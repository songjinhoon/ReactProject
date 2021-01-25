import React from 'react';
import styled from '../../../node_modules/styled-components';
import BoardCommon from './BoardCommon';

const BoardDetailBlock = styled.div``;
const Top = styled.div`
    
`;
const TopTitle = styled.div`
    font-size: 3rem;
    font-weight: 600;
`;
const TopBoardInfo = styled.div`
    color: #2E2E2E;
`;
const Mid = styled.div``;

const BoardDetail = ({ board }) => {
    if(!board) return null;

    return (
        <>
            <BoardCommon goBackUrl="/board"></BoardCommon>
            <BoardDetailBlock>
                <Top>
                    <TopTitle>{board.title}</TopTitle>
                    <TopBoardInfo>
                        <span>{board.user.username}</span>
                        <span>{board.publishedDate}</span>
                    </TopBoardInfo>
                </Top>
                <Mid>
                    <p>{board.content}</p>
                </Mid>
            </BoardDetailBlock>
        </>
    );
};      

BoardDetail.defaultProps = {
    board: {
        title: '',
        content: '',
        user: {
            username: '',
            _id: '',
        }
    }
};

export default BoardDetail;