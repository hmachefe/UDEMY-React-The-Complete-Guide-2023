import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';


function NewEventPage() {
  return (
    <EventForm />
  );
}

export default NewEventPage;

export async function action({request, params}) {
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
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