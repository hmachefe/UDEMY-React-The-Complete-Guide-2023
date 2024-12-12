export  async function fetchEvents(searchTerm) {

    const url = 'http://localhost:3000/events';
    if (searchTerm) {
        url += "?search=" + searchTerm;
    }

    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error('An error occurred while fetching the events');
      error.code = response.status;
      error.info = await response.json(); // will be used by useQuery() method from tanstack/react-query, when destructured as { error }
      // will be used by useQuery() method from tanstack/react-query, destructured as { isError }
      throw error;
    }

    const { events } = await response.json();

    return events; // will be used by useQuery() method from tanstack/react-query, destructured as { data }
  }