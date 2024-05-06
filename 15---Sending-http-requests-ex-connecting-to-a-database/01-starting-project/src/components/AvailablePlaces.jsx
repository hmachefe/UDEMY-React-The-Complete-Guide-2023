import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {

    async function fetchPlaces() {
      setIsFetching(false);
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();  
      setAvailablePlaces(resData.places);
      setIsFetching(true);
    };

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={!isFetching}
      loadingText="Fetching place data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
