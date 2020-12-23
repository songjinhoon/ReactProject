import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { postLogin } from '../../modules/auth';
import { getCheck } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const LoginForm = ({history}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => {
        return ({
            form: auth.login,
            auth: auth.auth,
            authError: auth.authError,
            user: user.user
        });
    });
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch(changeField({
            form: 'login',
            key: name,
            value
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const {username, password} = form;
        dispatch(postLogin({username, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError){
            console.log('인증 실패');
            console.log(authError);
            setError('로그인 실패');
        }
        if(auth){
            console.log('로그인 성공');
            console.log(auth);
            dispatch(getCheck());
        }
    }, [authError, auth, dispatch]);

    useEffect(() => {
        if(user){
            history.push('/');
        }
    }, [history, user]);

    return (
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error}></AuthForm>
    );
};

export default withRouter(LoginForm);