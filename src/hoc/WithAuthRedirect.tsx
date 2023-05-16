import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppReduxStateType } from '../redux/redux-store';


type MapStatePropsType = {
    isAuth: boolean 
}

export function withAuthRedirect<T={}>(Component: ComponentType<T>)  {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {

            let {isAuth, ...restProps} = this.props

            if (!isAuth) return <Redirect to={'/login'} />

            // const props = restProps as unknown as T & {children: React.ReactNode}
            return <Component {...restProps as T & {children?: React.ReactNode}} />

        }
    }

    const mapStateToPropsForRedirect = (state: AppReduxStateType): MapStatePropsType => ({
        isAuth: state.auth.isAuth
    })

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)



    return ConnectAuthRedirectComponent

};

export default withAuthRedirect;
