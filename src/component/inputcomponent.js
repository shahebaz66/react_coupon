import '../App.css';



function Inputcomponent(props){
    return(
        <div className="bottom">
        <input placeholder="Enter Mobile Number" maxLength="10" onChange={(e)=>props.getValue(e)}/>
        {!props.redeem?<h6>Enter the same number used on man matters</h6>:<h6 style={{color:"red"}}>Number already redeemed</h6>}
        {props.changeColor?<button style={{backgroundColor:"#4CAF50"}} onClick={()=>props.checkNumber()}>Wow! Get my Paytm Gift Card</button>:<button>Wow! Get my Paytm Gift Card</button>}
      </div>
    )
}

export default Inputcomponent;