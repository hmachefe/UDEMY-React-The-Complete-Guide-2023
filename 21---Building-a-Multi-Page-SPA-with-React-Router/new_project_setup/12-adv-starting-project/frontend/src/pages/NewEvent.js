import EventForm from '../components/EventForm';

function NewEventPage() {

  // method will be passed to the EventForm component, as a prop
  // and will be retrieved in the EventForm component with useActionData
  return (
    <EventForm method="post"/>
  );
}

export default NewEventPage;

