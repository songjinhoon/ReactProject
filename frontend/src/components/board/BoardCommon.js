import React from "react";
import { Link } from "../../../node_modules/react-router-dom";
import styled from "../../../node_modules/styled-components";
import Button from "../common/Button";

const BoardCommonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between ;
    margin-bottom: 1.5rem;
    width: 100%;
    
    button {
        width: 5rem;
        height: 2rem;
    }
`;
const LeftBlock = styled.div`
`;
const RightBlock = styled.div`
    Button {
        background: #00BFFF;
        width: 7rem;
    }
`;
const ButtonStyled = styled(Button)`
    & + & {
        margin-left: 0.5rem;
    }
`;

const BoardCommon = ({ goBackUrl, check, onSubmitBoard, detail }) => {
    
    return (
        <BoardCommonBlock>
            <LeftBlock>
                <Link to={goBackUrl}><ButtonStyled cyan>뒤로가기</ButtonStyled></Link>
            </LeftBlock>
            <RightBlock>
                {check && check === "/board" ? 
                    (<Link to="/board/write"><ButtonStyled cyan>게시글 작성</ButtonStyled></Link>)
                : 
                    (<ButtonStyled cyan onClick={onSubmitBoard}>게시글 저장</ButtonStyled>) 
                }
                {detail && detail === "/board/detail" ? 
                    (<Link to="/"><ButtonStyled cyan>게시글 수정</ButtonStyled></Link>) 
                : 
                    (<div>gg</div>)
                }
            </RightBlock>
        </BoardCommonBlock>
    );
};

BoardCommon.defaultProps = {
    goBackUrl: '/'
}

export default BoardCommon;