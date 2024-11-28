import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    // if (counter === 0) {
    //   useDispatch({ type: 'increment' });      
    // } else { // if (counter === 1) {
    //   useDispatch({ type: 'descrement' });      
    // }

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
