import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import HeaderContainer from "../containers/common/HeaderContainer";

const RegisterPage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <AuthTemplate>
                <RegisterForm></RegisterForm>
            </AuthTemplate>
        </>
    );
};

export default RegisterPage;