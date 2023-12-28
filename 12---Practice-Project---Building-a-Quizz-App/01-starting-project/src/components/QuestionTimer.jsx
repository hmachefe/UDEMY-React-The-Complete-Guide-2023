import { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timeoutId = setTimeout(() => {
            onTimeout();
        }, timeout);       
        return () => clearTimeout(timeoutId);     
    }, [timeout, onTimeout]);


    useEffect(() => {
        console.log('SETTING INTERVAL');
        const intervalId = setInterval(() => {
            setRemainingTime(previousRemainingTime => previousRemainingTime - 100);
        }, 100);           
        return () => clearInterval(intervalId);
    }, []);

    return <progress id="question-time" value={remainingTime} max={timeout}/>
}