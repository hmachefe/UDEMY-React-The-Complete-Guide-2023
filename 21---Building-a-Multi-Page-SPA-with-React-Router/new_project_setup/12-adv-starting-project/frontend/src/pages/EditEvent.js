import React from 'react'
import EventForm from '../components/EventForm'
// import { useLoaderData } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  
  return (
      <EventForm event={data.event} />
  )
}

export default EditEventPage