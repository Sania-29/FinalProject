import React,{useState} from "react";

function SignupForm({onSignup}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(name, email, password);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />   
            </div>
           
            <div>
                <label>Password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
              <button type="submit">Sign Up</button>
        </form>
    );

}
export default SignupForm;