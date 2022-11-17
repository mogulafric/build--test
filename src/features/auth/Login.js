import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setEmail("");
      setPassword("");
      navigate("/welcome");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setEmail(e.target.value);

  const handlePwdInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1><Spinner animation="border" /></h1>
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h3>Login</h3>

      <form onSubmit={handleSubmit} style={{width:'80%', float:"left"}}>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          id="email"
          ref={emailRef}
          value={email}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />
  </div>
  <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          id="password"
          onChange={handlePwdInput}
          value={password}
          required
        />
        </div>
        <button className="btn btn-primary" >Sign In</button>
        <br/><br/>
        <Link to="../resetpassword" style={{color:"#000"}}>Reset Password </Link> 
       <Link to="../" style={{color:"#000"}}>Home </Link>
      </form>
     
    </section>
  );

  return content;
};
export default Login;
