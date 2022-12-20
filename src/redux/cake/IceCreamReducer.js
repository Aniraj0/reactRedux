import { BUY_ICECREAM } from "./Types";

//Reducers

const initialIceState = {
  numOfIceCream: 10
} //initialState is past in as an arguement in a Reducer function


const IceCreamReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}


export default IceCreamReducer;