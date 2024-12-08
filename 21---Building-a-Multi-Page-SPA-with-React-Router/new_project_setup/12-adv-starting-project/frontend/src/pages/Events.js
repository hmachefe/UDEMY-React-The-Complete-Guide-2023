import { useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { json } from 'react-router-dom';

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

function EventsPage() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading fallback...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

}
export default EventsPage;

// no more async for loader
const loader = () => {
  // defer is a function that must be executed, passing a object as an argument
  // handling all http requests going on in the background for this page
  return defer({
    // not only pointing to loadEvents but executing() it
    events: loadEvents()
  })
};

export { loader };