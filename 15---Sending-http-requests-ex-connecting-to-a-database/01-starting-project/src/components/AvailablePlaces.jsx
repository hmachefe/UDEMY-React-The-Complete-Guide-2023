import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import fetchAvailablePlaces from '../http.js' 

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);  
          setIsFetching(false);   
        });
 

      } catch (error) {
        setError({message: error.message || 'Failed to fetch places'});
        setIsFetching(false);   
      }
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
