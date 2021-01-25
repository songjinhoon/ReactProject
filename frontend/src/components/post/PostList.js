import React from "react";
import { Link } from "../../../node_modules/react-router-dom";
import Responsive from "../../components/common/Responsive";
import styled from "../../../node_modules/styled-components";
import Button from "../common/Button";
import PostSubInfo from "../common/PostSubInfo";
import PostTagInfo from "../common/PostTagInfo";

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;
const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;
const Mid = styled.div``;
const MidItem = styled.div`
    padding: 3rem 0;
    //여기 좀 이상한데 체크해보자.
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid gray;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: blue;
        }
    }
    p {
        margin-top: 2rem;
    }
`;
const eOnWheel = e => {
    console.log(e);
    console.log(e.nativeEvent.deltaY);
    if(e.deltaY === -100) {
        window.scrollBy({
            top: -100
        });
    }else {
        window.scrollBy({
            top: 100
        });
    }
};

const PostList = ({ posts, error, user }) => {
    if(error) return <PostListBlock>에러가 발생했습니다.</PostListBlock>;

    return (
        <PostListBlock onWheel={eOnWheel}>
            <Top>
                {user && (<Button cyan to="/write">새 글 작성하기</Button>)}
                
            </Top>
            <Mid>
                {posts && (
                    posts.map(post => (
                        <MidItem key={post._id}>
                            <h2><Link to={`/@${user.username}/${post._id}`}>{post.title}</Link></h2>
                            <PostSubInfo username={user.username} publishedDate={new Date(post.publishedDate)}></PostSubInfo>
                            <PostTagInfo tags={post.tags}></PostTagInfo>
                            <p>{post.body}</p>
                        </MidItem>
                    )) 
                )}
            </Mid>
        </PostListBlock>
    );
};

export default PostList;