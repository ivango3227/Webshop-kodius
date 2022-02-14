import React from "react";
import {NavLink} from "react-router-dom";

function SuccessPage(){
    return(
        <div className="success-page">
            <h1>Thank you for your order!</h1>
            <div>
                <NavLink to ="/">
                    <button>Continue shopping</button>
                </NavLink>
            
            </div>
            
        </div>
    )
}

export default SuccessPage;