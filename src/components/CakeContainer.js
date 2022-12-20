import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux/index';



function CakeContainer(props){
  console.log(props);
  return(
    <div>
        <h2>Nomber of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button> 
        <h2>Nomber of IceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    // numOfCakes: state.cake.numOfCakes,
    // numOfIceCream: state.iceCream.numOfIceCream,

    numOfCakes: state.cakeReducer.numOfCakes,
    numOfIceCream: state.IceCreamReducer.numOfIceCream,
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    buyCake: ()=>{dispatch(buyCake())},
    buyIceCream: ()=>{dispatch(buyIceCream())}
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(CakeContainer)