import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from "../containers/post/PostListContainer";

const PostListPage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <PostListContainer></PostListContainer>
        </>
    )
};

export default PostListPage;