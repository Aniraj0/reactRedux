import { BUY_CAKE } from "./Types";

//Reducers

const initialCakeState = {
  numOfCakes: 10,
} //initialState is past in as an arguement in a Reducer function


const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}


export default cakeReducer;