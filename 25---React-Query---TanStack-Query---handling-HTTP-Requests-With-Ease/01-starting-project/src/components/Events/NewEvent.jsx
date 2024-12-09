import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

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
    mutationFn: createNewEvent
  });

  const navigate = useNavigate();

  function handleSubmit(formData) {
    mutate({event: formData});
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
