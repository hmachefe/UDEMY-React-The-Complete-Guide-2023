import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useQuery /*, useMutation */ } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { redirect, useSubmit } from 'react-router-dom';

export default function EditEvent() {
  const navigate = useNavigate();
  const { state: navigationState } = useNavigation();
  const params = useParams();
  const submit = useSubmit();

  const {
    data,
    isError,
    error
  } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries()
  //   //   navigate('../');
  //   // }
  //   onMutate: async (data) => { // OPTIMISTIC UPDATING
  //     await queryClient.cancelQueries({queryKey: ["events", params.id]});
  //     const newEvent = data.event;
  //     const previousEvent = queryClient.getQueryData(["events", params.id]);
  //     queryClient.setQueryData(["events", params.id], newEvent);
  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => { // data would be formData transformed into data.event above
  //     queryClient.setQueryData(["events", params.id], context.previousEvent); // rollback process in place
  //   },
  //   onSettled: () => { // like finally after try/catch blocks
  //     queryClient.invalidateQueries(["events", params.id]);
  //   }
  // });

  function handleSubmit(formData) {
    submit(formData, { method: "PUT" }); // anything but get as method
    // will trigger the exported action function (bottom of the file)
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = <>
      <ErrorBlock 
        title="Failed to load event"
        message={error.info?.message || "Failed to load event, please check your inputs and try again later"}
      />
      <div className="form-actions">
        <Link to="../" className="button">
          Okay
        </Link>
      </div>
    </>
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {navigationState === 'submitting' 
          ? 
          (<p>Sending data...</p>)
          :
          (
            <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
          )
        }
    </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
      </Modal>
  );
}


export async function loader({ params }) {
 return queryClient.fetchQuery({
  queryKey: ["events", params.id],
  queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
 });
}

// will be triggered by the Form submission (above in the present file)
export async function action({ request, params }) {
  const formData = await request.formData(); // built in method provided by react router to get hold of the form data
  const updatedEventData = Object.fromEntries(formData); // simply transforms the complex form data into a key-value pairs object
  await updateEvent({id: params.id, event: updatedEventData});
  await queryClient.invalidateQueries({queryKey: ["events"]});
  return redirect("../");
}