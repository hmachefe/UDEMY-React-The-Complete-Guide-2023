import { Form, useNavigate, useNavigation, useActionData } from 'react-router-dom';
import { json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {

  // return user data returned by our action (in the form)
  // but response parsed by the router, same as for loader
  const data = useActionData();

  const navigate = useNavigate();

  // hook provided by the react-router and gives us access to a navigation object
  // from where we can extract various piece of information, for instance all the
  // date which were submitted. Or the current state of currently active transition 
  // (from one route to another route, or if we submit a form)
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting ...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export async function action({request, params}) {

  console.log('params == ', params);

  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  };

  let url = 'http://localhost:8080/events/';
  if (method === 'PATCH') {
    const eventId = params.eventId;
    url += eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData) 
  });

  if (response.status === 422) {
    // validation errors raised by the back-end', to be returned in our pages and components
    // not returning redirection on "/events" route
    // will be used by useActionData() in the EventForm component, already parsed by react router
    return response;
  }

  if (!response.ok) {   
      throw json(
        { message: 'Could not create event.' },
        { status: 500 }   
      );
  }

  // return response.json();

  return redirect('/events');

} 

export default EventForm;
