import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
  return (
      <EventsList events={events} />
  )
}
export default EventsPage;

const loader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
//                setError('Could not fetch events');
  } else {
    const resData = await response.json();
//              setFetchedEvents(resData.events);
    return resData.events;
  }
};

export { loader };