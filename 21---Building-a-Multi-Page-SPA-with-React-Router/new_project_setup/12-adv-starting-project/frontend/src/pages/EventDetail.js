import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { json } from 'react-router-dom';

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event} />
  );

  // return (
  //   <> 
  //     <h1>EventDetailPage</h1>
  //     <p>Event ID: {params.eventId}</p>
  //   </>
  // )
}

export default EventDetailPage;

export async function loader({ params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event' },
      {
        status: 500
      }
    );
  } else {
    return response;
  } 
}