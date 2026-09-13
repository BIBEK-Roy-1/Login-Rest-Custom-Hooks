// import { useState,useEffect } from "react";
// import "./login.css"

// export default function Login(){
//    const [email,setEmail] = useState("");
//    const [password, setPassword] = useState("");  

//    useEffect(()=>{
//     localStorage.setItem("email",email);

//    },[email]);

//     return(
//         <>
//         <h1>Login to the Portal!</h1>
//         <h3>Login</h3>
//       <input
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <br />
//       <input
//         placeholder="Enter Password"
//         type="password"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <br />
//       <button
//         onClick={() => {
//           console.log("Form submitted")
//         }}
//       >
//         Submit
//       </button>
//       <br />
//         </>
//     )
// }




import { useState, useEffect } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        <div className="login-form">
          <input
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {/* <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div> */}

          <button
            onClick={() => {
              console.log("Form submitted");
            }}
          >
            Login
          </button>
        </div>

        <div className="signup">
          Don't have an account? <a href="#">Sign up</a>
        </div>

      </div>
    </div>
  );
}