import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { registerUser } from '../../modules/auth';
import { checkUser } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({history}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => {
        console.log('후후후후');
        
        return {
            form: auth.register,
            auth: auth.auth,
            authError: auth.authError,
            user: user.user
        }
    });
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
        if([username, password, passwordConfirm].includes('')){
            setError('빈 칸을 모두 입력해주세요.');
            return ;
        }
        if(password !== passwordConfirm){
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({
                form: 'register',
                key: 'password',
                value: ''
            }));
            dispatch(changeField({
                form: 'register',
                key: 'passwordConfirm',
                value: ''
            }));
            return;
        }
        dispatch(registerUser({username, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(authError){
            switch(authError.response.status){
                case 400:
                    setError('계정명은 최소3~최대20 사이입니다.');
                    break;
                case 409:
                    setError('이미 존재하는 계정명입니다.');
                    break;
                case 500:
                    setError('회원 가입 실패');
                    break;
                default :
                    break;
            }
            return ;
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(checkUser());
        }
    }, [authError, auth, dispatch]);

    useEffect(() => {
        if(user){
            //history.push('/');
            try{
                localStorage.setItem('user', JSON.stringify(user));
            }catch(e){
                console.log('localStorage is not working');
            }
        }
    }, [user, history]);

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error}></AuthForm>
    );
};

export default withRouter(RegisterForm);