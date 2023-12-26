import { useState, useEffect } from "react";

export default function ProgressBar({timer}) {
 
    const [remainingTime, setRemainingTime] = useState(timer);

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
 
    return (
        <progress value={remainingTime} max={timer}></progress>
    );
}