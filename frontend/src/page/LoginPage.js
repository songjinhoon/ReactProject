import React from 'react';
import LoginForm from '../containers/auth/LoginForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import HeaderContainer from "../containers/common/HeaderContainer";

const LoginPage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <AuthTemplate>
                <LoginForm></LoginForm>
            </AuthTemplate>
        </>
    );
};

export default LoginPage;