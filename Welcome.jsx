import React from "react";
import {useNavigate} from "react-router-dom";

function Welcome(){
    const Navigate = useNavigate();

    return(
        <div>
            <h1>Welcome</h1>
                <button onClick={() => Navigate("/signup")}>Sign UP</button>
                <button onClick={() => Navigate("/login")}>Log In</button>
        </div>
    );
}

export default Welcome;