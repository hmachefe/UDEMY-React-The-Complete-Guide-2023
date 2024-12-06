import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
      <EventsList events={events} />
  )
}
export default EventsPage;

const loader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
  // ... handle error
  } else {
    // const res = new Response("any data", {status: 201});
    // return res;
    return response.json();
  }
};

export { loader };