import React, {useState} from "react";
import {BrouserRouter as Router, NavLink} from "react-router-dom";

function Checkout(props){
   const [userInfo,setUserInfo]=useState({
       fname:"",
       lname:"",
       streetName:"",
       streetNumber:"",
       email:""
   });

   function handleChange(event){
       const {name,value}=event.target;
       setUserInfo((prevValue)=>{
           return {
               ...prevValue,
               [name]:value
           };
       })
   }

    return (
        <div className="data-container">
         <h1>Please fullfil so we can take your order</h1>
            <form>
                
                <input onChange={handleChange} value={userInfo.fname} name="fname" className="control control-text" type="text" placeholder="First name" required />
                <input onChange={handleChange} value={userInfo.lname} name="lname" className="control control-text" type="text" placeholder="Last name" required />
                <input onChange={handleChange} value={userInfo.streetName} name="streetName" className="control control-text" type="text" placeholder="Street name" required />
                <input onChange={handleChange} value={userInfo.streetNumber} name="streetNumber" className="control control-text" type="text" placeholder="Street number" required />
                <input onChange={handleChange} value={userInfo.email} name="email" className="control control-text" type="email" placeholder="Email" required />
                
                <NavLink to="/SuccessPage" >
                <button onClick={()=>props.submitUserInfo(userInfo)} type="button">
                 Confirm order
                </button>
                </NavLink>

                
            </form>
        </div>
    );
}
export default Checkout;