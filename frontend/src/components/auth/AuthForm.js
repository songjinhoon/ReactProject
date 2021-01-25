import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    height: 300px;
    h3 {
        margin: 0;
        color: black;
        margin-bottom: 1rem;
    }
`;
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid Black;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: Black;
        border-bottom: 1px solid Black;
    }
    & + & {
        margin-top: 1rem;
    }
`;
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: gray;
        text-decoration: none;
        &:hover {
            color: black;
        }
    }
`;
const ButtonMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

/* ERROR MESSAGE */
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput onChange={onChange} value={form.username} autoComplete="username" name="username" placeholder="아이디"></StyledInput>
                <StyledInput onChange={onChange} value={form.password} autoComplete="new-password" name="password" placeholder="비밀번호" type="password"></StyledInput>
                {type === "register" && (
                    <StyledInput onChange={onChange} value={form.passwordConfirm} autoComplete="new-password" name="passwordConfirm" placeholder="비밀번호 확인" type="password"></StyledInput>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonMarginTop cyan fullWidth>{text}</ButtonMarginTop>
            </form>
            <Footer>
                {type === "login" ? (<Link to="/auth/register">회원가입</Link>) : <Link to="/auth/login">로그인</Link>}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
