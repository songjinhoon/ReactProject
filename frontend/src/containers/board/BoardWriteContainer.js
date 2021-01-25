import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux";
import { withRouter } from "../../../node_modules/react-router-dom";
import BoardWrite from "../../components/board/BoardWrite";
import { initializeForm, changeField, writeBoard, resetBoard } from "../../modules/board";

const BoardWriteContainer = ({ goBackUrl, history }) => {
    const dispatch = useDispatch();
    const { title, content, board, error } = useSelector(({ board }) => ({
        title: board.write.title,
        content: board.write.content,
        board: board.board,
        error: board.error
    }));
    const onChangeTitle = useCallback(e => dispatch(changeField({ form: 'write', key: 'title', value: e.target.value})), [dispatch]);
    const onChangeField = useCallback(paylaod => dispatch(changeField(paylaod)), [dispatch]);
    const onSubmitBoard = useCallback(e => {
        e.preventDefault();
        if([title, content].includes('')) {
            alert('제목이랑 내용 빈칸 확인해주세요.');
            return ;
        }
        dispatch(writeBoard({ title, content }));
    }, [dispatch, title, content]);
    
    useEffect(() => {
        dispatch(initializeForm());
    }, [dispatch]);
    useEffect(() => {
        if(board) history.push(`/board/detail/${board._id}`);
        if(error) alert('에러 발생!');
    }, [board, error, history]);

    return <BoardWrite goBackUrl={goBackUrl} title={title} content={content} onChangeField={onChangeField} onChangeTitle={onChangeTitle} onSubmitBoard={onSubmitBoard}></BoardWrite>
};

export default withRouter(BoardWriteContainer);