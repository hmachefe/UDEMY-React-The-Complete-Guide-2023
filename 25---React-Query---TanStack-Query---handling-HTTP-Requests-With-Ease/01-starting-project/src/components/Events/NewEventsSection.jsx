import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {

  // returns a query object that can be used with destructuring to pull out the elements which are the most important 
  const { data, isPending, isError, error /* message*/, refetch } = useQuery(
    { 
      queryKey: ['events'], // identifier (used for caching purpose)
      queryFn: fetchEvents, // function that returns a Promise
      // staleTime: 15000,
      // gcTime: 100
    }
  );


  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock 
        title="An error occurred" 
        message={error.info?.message || "Failed to fetch events"} 
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}