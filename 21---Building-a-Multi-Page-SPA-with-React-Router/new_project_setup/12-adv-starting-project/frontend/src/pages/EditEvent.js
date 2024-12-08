import React from 'react'
import EventForm from '../components/EventForm'
// import { useLoaderData } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  console.log("Loader Data in EditEventPage:", data); // Debugging line
  
  // method will be passed to the EventForm component, as a prop
  // and will be retrieved in the EventForm component with useActionData
  return (
      <EventForm method="patch" event={data.event} />
  )
}

export default EditEventPage