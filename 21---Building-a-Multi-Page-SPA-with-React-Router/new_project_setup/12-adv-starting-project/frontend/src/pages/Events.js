import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

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
  const response = await fetch('http://localhost:8080/eventsssssssssssssssss');
  if (!response.ok) {
    throw {
      message: 'Could not fetch events',
    };
    // return {
    //   isError: true,
    //   message: 'Could not fetch events'
    // };
  } else {
    return response.json();
  }
};

export { loader };