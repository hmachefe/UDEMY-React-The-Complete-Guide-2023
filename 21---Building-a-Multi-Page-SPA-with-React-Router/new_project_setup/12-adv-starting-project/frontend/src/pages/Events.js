import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
    { id: 'e1', title: 'Programming for everyone', description: 'A half-day event.', location: 'Some Street 22, Some City', date: '2021-05-12' },
    { id: 'e2', title: 'Networking for introverts', description: 'A half-day event.', location: 'Some Street 22, Some City', date: '2021-05-12' },
    { id: 'e3', title: 'Networking for extroverts', description: 'A half-day event.', location: 'Some Street 22, Some City', date: '2021-05-12' },
]


function EventsPage() {
  return (
    <ul>
      {DUMMY_EVENTS.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}   
    </ul>
  )
}

export default EventsPage