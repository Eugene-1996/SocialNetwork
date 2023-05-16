import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Login from './Login';
import store from '../../redux/store';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

  



    return (
           <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
        <Field placeholder={'Password'} name={'password'} component={'input'}/>

        </div>
        <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me 
        </div>
        <div>
          <button>Login</button>
        </div>
      </form> 
    );
};


export const ReduxLoginForm = reduxForm<FormDataType>({
    
    form: 'login'
  })(LoginForm)

export default LoginForm;