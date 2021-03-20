import body from './images/body.png'
import head from './images/header.png'
import final from './images/final.png'
import React, { useState } from 'react';
import './App.css';
import InputField from './component/inputcomponent'
function App() {
  var [state,setState]=useState({next:false,redeem:false,changeColor:false,number:0})
  var getValue=(e)=>{
    
    if(e.target.value.length===10){
      setState({...state,changeColor:true,number:e.target.value})
    }else{
      setState({...state,changeColor:false,number:e.target.value})
    }
  }
  var checkNumber=()=>{
    if(state.number.length===10){
      var a=JSON.parse(localStorage.getItem('numbers'));
      
      if(a){
        if(a.includes(state.number)){
          setState({...state,redeem:true})
        }else{
          a.push(state.number)
          localStorage.setItem('numbers', JSON.stringify(a));
          if(state.redeem){
            setState({...state,next:true,redeem:false})
          }else{
            setState({...state,next:true})
          }
          
        }
      }else{
        var b=JSON.stringify([state.number])
        localStorage.setItem('numbers',b);
        if(state.redeem){
          setState({...state,redeem:false})
        }else{
          setState({...state,next:true})
        }
      }
      
    }
  }
  return (
    <div className="App">
      <div className="top">
        <img src={head}/>
        
      </div>
      <div className="middle">
          <img src={body}/>
        </div>
      <div>You have WON Paytm Gift Card of rs 200 for <b> placing the order on man matters</b></div>
      {state.next?<div className="final"><img src={final}/></div>:<InputField redeem={state.redeem} changeColor={state.changeColor} getValue={getValue} checkNumber={checkNumber}/>}
     
    </div>
  );
}

export default App;
