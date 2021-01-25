import React, { useEffect, useRef } from "react";
import styled from "../../../node_modules/styled-components";
import Quill from "../../../node_modules/quill";
import "quill/dist/quill.snow.css";
import BoardCommon from "./BoardCommon";

const BoardWriteBlock = styled.div``;
const EditorBlock = styled.div`
    .ql-editor {
        min-height: 500px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
`;
const InputStyled = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;
    width: 100%;
`;

const BoardWrite = ({ title, content, onChangeField, onChangeTitle, onSubmitBoard }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block']
                ]
            },
            theme: 'snow',
            placeholder: '내용을 작성하세요...'
        });
        quillInstance.current.on('text-change', (delta, oldDelta, source) => {
            onChangeField({ form: 'write', key: 'content', value: quillInstance.current.root.innerHTML });
        });
    }, [onChangeField]);

    return (
        <>
            <BoardCommon goBackUrl="/board" onSubmitBoard={onSubmitBoard}></BoardCommon>
            <BoardWriteBlock>
                <InputStyled value={title} onChange={onChangeTitle} placeholder="제목을 입력하세요..."></InputStyled>
                <EditorBlock>
                    <div ref={quillElement}></div>
                </EditorBlock>
            </BoardWriteBlock>
        </>
    );
};

export default BoardWrite;