import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
// import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EventDetails() {

  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id], // or  queryKey: ["events", {id: params.id}],
    queryFn: ({signal}) => fetchEvent({ signal, id:  params.id })
  });

  const { mutate } = useMutation(
    {
      mutationFn: deleteEvent,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: "/events",
          refetchType: "none" // current fetched content through useMutation will not be triggered again
        });
        navigate("/events");
      }
    }
  );

  function handleDelete() {
    mutate( {id: params.id} );
  }

  const formattedDate = data ? new Date(data.date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }) : '';


  let content;

  if (isPending || !data) {
    content = (
      <div id="event-details-content" className="center">
        <p>fetching event data (Details)</p>
      </div>
    );
  }

  if (isError) {
    content = <div id="event-details-content" className="center">
      <ErrorBlock 
        title = "failed to load event (Details)" 
        message = {
          error?.info.message ||
          "failed to load event (Details), try again later please"
        }
      />
    </div>;
  }

  if (data) {
    content = <>
      <header>
        <h1>{data.title}</h1>
        <nav>
          <button onClick={handleDelete}>Delete</button>
          <Link to="edit">Edit</Link>
        </nav>
      </header>
      <div id="event-details-content">
        <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
        <div id="event-details-info">
          <div>
            <p id="event-details-location">{data.location}</p>
            <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
          </div>
          <p id="event-details-description">{data.description}</p>
        </div>
      </div>
    </>
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details"> 
        {content}
      </article>
    </>
  );
}
