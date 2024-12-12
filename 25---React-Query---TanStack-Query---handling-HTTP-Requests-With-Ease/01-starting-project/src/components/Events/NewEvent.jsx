import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../util/http.js';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {

/*
  useMutation({
    mutationKey:
    mutationFn:
  });
*/

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      // queryClient.invalidateQueries({queryKey: ["events"], exact: true});
      queryClient.invalidateQueries({queryKey: ["events"], exact: true});
      navigate("/events");
    }
  });

  const navigate = useNavigate();

  function handleSubmit(formData) {
    mutate({event: formData});
    // navigate("/events"); // we can't afford navigating straight away (there could be an error to be spoted)
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
        )}
      </EventForm>
    {isError && <ErrorBlock title="Failed to create event" message={error.info?.message || "failed to create event, check your inputs"}/>}
    </Modal>
  );
}
