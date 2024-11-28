import classes from './Counter.module.css';
import { useSelector, connect } from 'react-redux';
import { Component } from 'react';

// const Counter = () => {

//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   };

//   const toggleCounterHandler = () => {
//     // if (counter === 0) {
//     //   dispatch({ type: 'increment' });      
//     // } else { // if (counter === 1) {
//     //   dispatch({ type: 'descrement' });      
//     // }
//   };


// };

class Counter extends Component {

  incrementHandler() {
    this.props.increment.bind(this);
  }

  decrementHandler() {
    this.props.decrement.bind(this);
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}> {this.props.counter} </div>
        <div class="counter">
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const matDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
    // toggleCounter: () => dispatch({ type: 'toggleCounter' })
  };
};

export default connect(mapStateToProps, matDispatchToProps)(Counter);
