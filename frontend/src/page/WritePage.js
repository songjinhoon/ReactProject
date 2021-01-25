import React from 'react';
import Responsive from "../components/common/Responsive";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import HeaderContainer from '../containers/common/HeaderContainer';

const WritePage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <EditorContainer></EditorContainer>
            <TagBoxContainer></TagBoxContainer>
            <WriteActionButtonsContainer></WriteActionButtonsContainer>
        </>
    );
};

export default WritePage;