import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialize, changeField } from "../../modules/write";
import Editor from "../../components/write/Editor";

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body
    }));
    // 아래 useCallback을 썻는데... RegisterContainer의 onChange와 다르게 작성한 이유는?
    // EditorComponent의 useEffect()에서 onChangeField를 사용하기 위함이다. -> 원래 component에서는 onChange 속성 값에 명시를 해주는데...
    // EditorComponent는 onChange속성을 사용할 수 없기에 useEffect()를 활용한다. -> 그래야 useEffect()가 화면에 나타났을 때 딱 한번만 실행되기 때문이다.
    const onChangeField = useCallback(paylaod => dispatch(changeField(paylaod)), [dispatch]);

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return <Editor onChangeField={onChangeField} title={title} body={body}></Editor>
};

export default EditorContainer;