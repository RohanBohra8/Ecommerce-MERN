import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';

const Login = () => {
    //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //navigation from react-router-dom
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/v1/auth/login`,
        { email, password }
      );
      if(response && response.data.success){
        toast.success(response.data.message,{
            duration: 2000
        })
        navigate('/');
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title='Login- Ecommerce App'>
        <div className="form-container">
        <h1>Login Page</h1>

        <form on onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login