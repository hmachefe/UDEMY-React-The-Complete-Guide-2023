import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/placesss');
        const resData = await response.json();  

        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }
        setAvailablePlaces(resData.places);  
      } catch (error) {
        setError({message: error.message || 'Failed to fetch places'});
      }
      setIsFetching(false);   
    };

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="Could not fetch places" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
