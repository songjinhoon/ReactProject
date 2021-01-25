import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginContainer from '../containers/auth/LoginContainer';
import RegisterForm from '../containers/auth/RegisterForm';
import HeaderContainer from '../containers/common/HeaderContainer';
import AuthTemplate from '../components/auth/AuthTemplate';

const AuthPage = ({ match }) => {

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <AuthTemplate>
                <Route path={`${match.path}/login`} component={LoginContainer}></Route>
                <Route path={`${match.path}/register`} component={RegisterForm}></Route>
            </AuthTemplate>
        </>
    );
};

export default withRouter(AuthPage);