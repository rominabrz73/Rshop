import React from "react";
import Container from "../../component/container/container";
import { useFormik } from "formik";
import Button from "../../component/button/Button";
import * as Yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      password: Yup.string()
        .min(5, "Too Short!")
        .max(30, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const { username, password } = values;
      console.log(username, password);
    },
  });
  return (
    <div className="mt-40">
      <Container>
        <div className=" h-96 w-96 bg-slate-300  mx-auto p-6 rounded">
          <form onSubmit={formik.handleSubmit}>
            <p>Login</p>
            <input
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className="w-full p-2 rounded"
              type="text"
            />
            {formik.errors.username && formik.touched.username ? (
              <div  className="text-red-600">{formik.errors.username}</div>
            ) : null}
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="w-full mt-4 p-2 rounded"
              type="password"
            />
             {formik.errors.password && formik.touched.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
            <Button className="w-100 h-100" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
