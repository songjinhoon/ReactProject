import React from "react";
import { Link } from "../../../node_modules/react-router-dom";
import styled from "../../../node_modules/styled-components";
import BoardCommon from "./BoardCommon";
import ImageTest from "../../logo-og.png";

const BoardListBlock = styled.div`
    height: 500px;
`;
const BoardBlock = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px 10px 10px 10px;
    background-color: #F2F2F2;
    padding: 0.5 1rem;
    margin-bottom: 3rem;
    img {
        border-radius: 10px 10px 10px 10px;
        width: 300px;
        height: 180px;
    }
    p {
        margin: 0;
    }

    .boardInfo {
        margin: 0 1rem;
        width: 100%;
        height: 150px;
        background-color: white;
        border-radius: 10px 10px 10px 10px;
        padding: 0 0.5rem;
        &:hover {
            background-color: #6E6E6E;
            cursor: pointer;
        }
        .boardInfoTop {
            padding-bottom: 0.3rem;
            border-bottom: 1px solid #E6E6E6;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            h2 {
                margin: 0;
            }
            span {
                font-size: 0.8rem;
                font-weight: bold;
                color: #585858;
            }
        }
        .boardInfoMid {
            height: 80px;
            padding: 0.5rem 0;
            font-size: 0.75rem;
            font-weight: 600;
            border-bottom: 1px solid #E6E6E6;
        }
        .boardInfoFooter {
            margin-top: 0.5rem;
            display: flex;
            justify-content: flex-end;
            font-size: 0.8rem;
            font-weight: 600;
            color: #585858;
            p {
                margin-left: 1rem;
            }
        }
    }
`;

const BoardListForm = ({ match }) => {

    return (
        <>
            <BoardCommon goBackUrl="/" check={match.path}></BoardCommon>
            <BoardListBlock>
                <BoardBlock>
                    <img src={ImageTest} alt="?"></img>
                    <div className="boardInfo">
                        <Link to ="/">
                        <div className="boardInfoTop">
                            <h2>제목</h2>
                            <span>2020년 12월 12일</span>    
                        </div>
                        <div className="boardInfoMid">
                            <p>기사(記事)는 신문이나 잡지 등에 실린 글을 말한다. 기사(技士)는 차량이나 기계 등을 운전하는 사람을 말한다. 기사(技士)는 국가기술자격의 한 등급이다.</p>
                        </div>
                        <div className="boardInfoFooter">
                            <p>작성자: 홍길동</p>
                            <p>좋아요: 10</p>
                        </div>
                        </Link>
                    </div>
                </BoardBlock>
                <BoardBlock>
                    <img src={ImageTest} alt="?"></img>
                    <div className="boardInfo">
                        <Link to ="/">
                        <div className="boardInfoTop">
                            <h2>제목</h2>
                            <span>2020년 12월 12일</span>    
                        </div>
                        <div className="boardInfoMid">
                            <p>기사(記事)는 신문이나 잡지 등에 실린 글을 말한다. 기사(技士)는 차량이나 기계 등을 운전하는 사람을 말한다. 기사(技士)는 국가기술자격의 한 등급이다.</p>
                        </div>
                        <div className="boardInfoFooter">
                            <p>작성자: 홍길동</p>
                            <p>좋아요: 10</p>
                        </div>
                        </Link>
                    </div>
                </BoardBlock>
                {/* <div className="boardBlock">
                    
                </div>             
                <div className="boardBlock">
                    <img src={ImageTest}></img>
                    <div className="boardInfo">
                        <div className="boardInfoTop">
                            <h2>제목</h2>
                            <span>2020년 12월 12일</span>    
                        </div>
                        <div className="boardInfoMid">
                            <p>기사(記事)는 신문이나 잡지 등에 실린 글을 말한다. 기사(技士)는 차량이나 기계 등을 운전하는 사람을 말한다. 기사(技士)는 국가기술자격의 한 등급이다.</p>
                        </div>
                        <div className="boardInfoFooter">
                            <p>작성자: 홍길동</p>
                            <p>좋아요: 10</p>
                        </div>
                    </div>
                </div>
                <div className="boardBlock">
                    <img src={ImageTest}></img>
                    <div className="boardInfo">
                        <div className="boardInfoTop">
                            <h2>제목</h2>
                            <span>2020년 12월 12일</span>    
                        </div>
                        <div className="boardInfoMid">
                            <p>기사(記事)는 신문이나 잡지 등에 실린 글을 말한다. 기사(技士)는 차량이나 기계 등을 운전하는 사람을 말한다. 기사(技士)는 국가기술자격의 한 등급이다.</p>
                        </div>
                        <div className="boardInfoFooter">
                            <p>작성자: 홍길동</p>
                            <p>좋아요: 10</p>
                        </div>
                    </div>
                </div> */}
            </BoardListBlock>
        </>
    )
};

export default BoardListForm;