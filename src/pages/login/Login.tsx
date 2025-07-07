import React from "react";
import Container from "../../component/container/container";
import { useFormik } from "formik";
import Button from "../../component/button/Button";
import * as YUP from 'yup';

function Login() {
const formik=useFormik({
  initialValues:{
    username:"",
    password:"",
    
  },
  onSubmit:(values)=> {
    const{username,password}=values;
    console.log(username, password);
  },
})
  return (
    <div className="mt-40">
      <Container>
        <div className=" h-96 w-96 bg-slate-300  mx-auto p-6 rounded">
          <form onSubmit={formik.handleSubmit}>
          <p>Login</p>
          <input name="username" value={formik.values.username} onChange={formik.handleChange} className="w-full p-2 rounded" type="text" />
          <input name="password"  value={formik.values.password} onChange={formik.handleChange} className="w-full mt-4 p-2 rounded" type="password" />
        <Button className="w-100 h-100" type="submit">Submit</Button>
        </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
