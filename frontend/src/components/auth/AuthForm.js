import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
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

const AuthForm = ({ type }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                ></StyledInput>
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                ></StyledInput>
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    ></StyledInput>)}
                <ButtonMarginTop cyan fullWidth>{text}</ButtonMarginTop>
            </form>
            <Footer>
                {type === "login" ? (<Link to="/register">회원가입</Link>) : <Link to="/login">로그인</Link>}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
