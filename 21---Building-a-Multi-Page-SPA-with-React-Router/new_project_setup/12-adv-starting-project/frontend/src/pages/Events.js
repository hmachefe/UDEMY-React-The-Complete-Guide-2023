import React, { useEffect } from 'react';
import { useState } from 'react';

import EventsList from '../components/EventsList';
// import { Link } from 'react-router-dom'


// const DUMMY_EVENTS = [
//     { id: 'e1', title: 'Programming for everyone', description: 'A half-day event.', location: 'Some Street 22, Some City', date: '2021-05-12' },
//     { id: 'e2', title: 'Networking for introverts', description: 'A half-day event.', location: 'Some Street 22, Some City', date: '2021-05-12' },
//     { id: 'e3', title: 'Networking for extroverts', description: 'A half-day event.', location: 'Some Street 22, Some City', date: '2021-05-12' },
// ];

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);

      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}> 
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  )
}

// function EventsPage() {
//   return (
//     <ul>
//       {DUMMY_EVENTS.map((event) => (
//         <li key={event.id}>
//           <Link to={event.id}>{event.title}</Link>
//         </li>
//       ))}   
//     </ul>
//   )
// }

export default EventsPage;