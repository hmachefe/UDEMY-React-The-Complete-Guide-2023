import { Form, useNavigate, useNavigation, useActionData } from 'react-router-dom';

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
  console.log('isSubmitting == ', isSubmitting);  

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method="post" action="/events/new" className={classes.form}>
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

export default EventForm;
