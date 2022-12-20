import React from 'react';
import Redux from 'redux';




const ReduxApp = () => {

  const initialState = {
    value: 0
  };


  function counterReducer(state = initialState, action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
      case "counter/incremented":
        return { ...state, value: state.value + 1 };
      case "counter/decremented":
        return { ...state, value: state.value - 1 };
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state;
    }
  }

  const store = Redux.createStore(counterReducer);

  const valueEl = document.getElementById("value");


  return (
    <div>
      Clicked: <span id="value">0</span> times
      <button id="increment">+</button>
      <button id="decrement">-</button>
      <button id="incrementIfOdd">Increment if odd</button>
      <button id="incrementAsync">Increment async</button>

    </div>

  )
} 


export default ReduxApp;