import React, { Suspense } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData, redirect, defer, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading event fallback...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense> 
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading events fallback...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>     
    </>
  );

  // return (
  //   <> 
  //     <h1>EventDetailPage</h1>
  //     <p>Event ID: {params.eventId}</p>
  //   </>
  // )
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event' },
      {
        status: 500
      }
    );
  } else {
    const resultsData = await response.json();
    return resultsData.event;
  } 
}

async function loadEvents() {
  // can NOT invoke useState() since this loader function is NOT a React component
  const response = await fetch('http://localhost:8080/events'); // wrong url on purpose
  if (!response.ok) {
    throw json(
        { message: 'Could not fetch events' }
      ,
      { 
        status: 500 
      }
    );
  } else {
    const resultsData = await response.json();
    return resultsData.events;
  }
}

export async function loader({ params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event' },
      {
        status: 500
      }
    );
  }

  return redirect('/events');
}
