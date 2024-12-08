import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { json } from 'react-router-dom';

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    // return (
    //   <p>{data.message}</p>
    // );
  }

  const events = data.events;
  return (
      <EventsList events={events} />
  )
}
export default EventsPage;

const loader = async () => {
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
    return response.json();
  }
};

export { loader };