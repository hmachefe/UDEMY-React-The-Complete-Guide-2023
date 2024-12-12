import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    data,
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () => {
    //   queryClient.invalidateQueries()
    //   navigate('../');
    // }
    onMutate: async (data) => { // OPTIMISTIC UPDATING
      await queryClient.cancelQueries({queryKey: ["events", params.id]});
      const newEvent = data.event;
      const previousEvent = queryClient.getQueryData(["events", params.id]);
      queryClient.setQueryData(["events", params.id], newEvent);
      return { previousEvent };
    },
    onError: (error, data, context) => { // data would be formData transformed into data.event above
      queryClient.setQueryData(["events", params.id], context.previousEvent); // rollback process in place
    },
    onSettled: () => { // like finally after try/catch blocks
      queryClient.invalidateQueries(["events", params.id]);
    }
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event:formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = <div className="center">
      <LoadingIndicator />
    </div>;  
  }

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
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
      </Modal>
  );
}
