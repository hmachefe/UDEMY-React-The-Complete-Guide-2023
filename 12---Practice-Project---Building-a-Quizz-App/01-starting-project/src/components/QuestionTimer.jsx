import { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        setTimeout(() => {
            onTimeout();
        }, timeout);            
    }, [timeout, onTimeout]);


    useEffect(() => {
        console.log('SETTING INTERVAL');
        setInterval(() => {
            setRemainingTime(previousRemainingTime => previousRemainingTime - 100);
        }, 100);           
    }, []);

    return <progress id="question-time" value={remainingTime} max={timeout}/>
}