import React, { useEffect, useMemo } from 'react';
import { withRouter } from '../../../node_modules/react-router-dom';
import { useDispatch, useSelector } from '../../../node_modules/react-redux';
import BoardDetail from '../../components/board/BoardDetail';
import { readBoard, resetBoard } from '../../modules/board';

const BoardDetailContainer = ({ match }) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const { board } = useSelector(({ board }) => ({ board: board.board }) );

    useEffect(() => {
        dispatch(readBoard(id));
        //return () => dispatch(unloadPost());
    }, [dispatch, id]);
    
    return <BoardDetail board={board}></BoardDetail>;
};

export default withRouter(BoardDetailContainer);