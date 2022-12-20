
// import React from 'react';
// import Redxu from 'redux';



// //Creating store

// const createStore = Redux.createStore

// //Actions
// const BUY_CAKE = 'Buy_Cake';

// function buyCake(){
//   return({
//     type: BUY_CAKE,
//     info: "First redux action"
//   })
// }


// //Reducers

// const initialState = {
//   numofCakes:10
// } //initialState is past in as an arguement in a Reducer function


// const reducer = (state = initialState, action) =>{
//   switch (action.type) {
//     case BUY_CAKE:
//       return {...state, numofCakes: state.numofCakes -1};
//     default:
//       // If the reducer doesn't care about this action type,
//       // return the existing state unchanged
//       return state;
//   }
// }



// // Store

// const store = createStore(reducer)
// console.log('Initial State', store.getState());

// const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()));

// store.dispatch(buyCake());

// unsubscribe()


// export {createStore, BUY_CAKE, buyCake, initialState, reducer, store, unsubscribe};