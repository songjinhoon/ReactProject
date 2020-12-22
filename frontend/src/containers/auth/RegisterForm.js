import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { postRegister } from '../../modules/auth';


const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form, auth, authError} = useSelector(({auth}) => ({
        form: auth.register
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form: 'register',
            key: name,
            value
        }));
    };
    const onSubmit = e => {
        e.preventDefault();
        const {username, password, passwordConfirm} = form;
        console.log(username + ' :: ' + password);
        if(password !== passwordConfirm){
            return;
        }else{
            dispatch(postRegister({username, password}));
        }
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(authError){
            console.log('오류발생');
            console.log(authError);
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
        }
    }, [authError, auth]);

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit}></AuthForm>
    );
};

export default RegisterForm;