import { useEffect, useState } from "react";

const TIMER = 3000

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('setInterval' )
        setRemainingTime((prevRemainingTime) => {
          console.log('REMAINING TIME', prevRemainingTime)
          return prevRemainingTime - 10;
        }
    )}, 10);

    return () => {
      clearInterval(interval);
    };

  });      

  useEffect(() => {
    console.log('SET TIMER')
    const timer = setTimeout(() => {
      // console.log('TIMER EXPIRED')
      onConfirm();
    }, TIMER)

    return () => {
      // console.log('clear timer')
      clearTimeout(timer);
    };
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}></progress>
    </div>
  );
}
