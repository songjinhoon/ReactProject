import React from "react";
import styled from "../../../node_modules/styled-components";
import Responsive from "../common/Responsive";
import PostSubInfo from "../common/PostSubInfo";
import PostTagInfo from "../common/PostTagInfo";

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;
const Top = styled.div`
    border-bottom: 1px solid blue;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;
const Mid = styled.div`
    font-size: 1.3125rem;
    color: black;
`;

const PostViewer = ({ post, error }) => {
    if(error) {
        if(error.response && error.response.status === 404) {
            return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
        }else {
            return <PostViewerBlock>오류가 발생했습니다.</PostViewerBlock>
        }
    }

    // 이 부분에서 나는 loading redux를 처리하지 않았는데 확인해봐야 한다.
    // 근데 사실 이 부분이 필요할까? 싶기도 하다.
    if(!post) return null;

    const { title, body, user, publishedDate, tags } = post;

    return (
        <PostViewerBlock>
            <Top>
                <h1>{title}</h1>
                <PostSubInfo hasMarginTop username={user.username} publishedDate={new Date(publishedDate).toLocaleDateString()}></PostSubInfo>
                <PostTagInfo tags={tags}></PostTagInfo>
            </Top>
            <Mid dangerouslySetInnerHTML={{__html: body}}></Mid> 
        </PostViewerBlock>
    )
};

export default PostViewer;