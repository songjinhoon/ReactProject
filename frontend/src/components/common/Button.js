import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: #0657f8;
    &:hover {
        background: #5086f0;
    }

    ${(props) =>
        props.fullWidth &&
        css`
            padding: 0.75rem 0;
            width: 100%;
            font-size: 1.125rem;
        `}

    ${(props) =>
        props.cyan &&
        css`
            background: #01DFD7;
            &:hover {
                background: #04B4AE;
            }
        `}
`;

const Button = (props) => <StyledButton {...props} />; // 바로 내보내지않고 새로운 Button을 만들어서 렌더링 해주는 이유는 자동 import를 위함

export default Button;
