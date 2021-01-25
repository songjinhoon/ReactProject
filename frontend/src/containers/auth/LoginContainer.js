import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initializeForm, changeField, loginUser } from '../../modules/auth';
import { checkUser } from '../../modules/user';
import AuthForm from '../../components/auth/AuthForm';

const LoginContainer = ({ history }) => {
    console.log('::DEBUG::');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    const onChangeForm = useCallback(e => {
        const { name, value } = e.target;
        dispatch(changeField({
            form: 'login',
            key: name,
            value 
        }));
    }, [dispatch]);
    const onSubmitForm = useCallback(e => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(loginUser({ username, password }));
    }, [form, dispatch]);

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);
    useEffect(() => {
        if(authError){
            console.log(authError);
            setError('로그인 실패');
        }
        if(auth){
            console.log(auth);
            dispatch(checkUser());
        }
    }, [authError, auth, dispatch]);
    useEffect(() => {
        if(user){
            history.push('/');
            try{
                localStorage.setItem('user', JSON.stringify(user));
            }catch(e){
                console.log('localStorage is not working');
            }
        }
    }, [history, user]);


    return <AuthForm type="login" form={form} onChange={onChangeForm} onSubmit={onSubmitForm} error={error}></AuthForm>
};

export default withRouter(LoginContainer);