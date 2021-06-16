import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const visibility = useSelector(state => state.counter.visible);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visibility && 
      <div>
        <div className={classes.value}>Counter value: {counter}</div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
  
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   };

//   decrementHandler() {
//     this.props.decrement();
//   };

//   toggleCounterHandler() {};
  
//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>Counter value: {this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'}), 
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
