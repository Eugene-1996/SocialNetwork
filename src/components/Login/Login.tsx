import React from 'react';
import LoginForm, { FormDataType, ReduxLoginForm } from './LoginForm';
import { reduxForm } from 'redux-form';




const Login = () => {

  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }


  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;