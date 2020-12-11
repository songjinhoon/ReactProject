import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => {
        return ({
            form: auth.login
        });
    });
    const onChange = (e) => {
        const {value, name} = e.target;
        const obj = {
            form: 'login',
            key: name,
            value
        };
        console.log(obj);
        dispatch(changeField(obj));
    };
    const onSubmit = (e) => {
        e.prevendDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onsubmit}></AuthForm>
    );
};

export default LoginForm;