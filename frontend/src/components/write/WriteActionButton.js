import React from "react";
import styled from "../../../node_modules/styled-components";
import Button from "../common/Button";

const WriteActionButtonDiv = styled.div`
    margin: 1rem 0 3rem 0;
    padding: 0 1rem;
    button + button {
        margin-left: 0.5rem;
    }
`;
const ButtonStyled = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;

const WriteActionButton = ({ onCancel, onPublish }) => {
    return (
        <WriteActionButtonDiv>
            <ButtonStyled onClick={onPublish} cyan>포스트 등록</ButtonStyled>
            <ButtonStyled onClick={onCancel}>취소</ButtonStyled>
        </WriteActionButtonDiv>
    );
};

export default WriteActionButton;