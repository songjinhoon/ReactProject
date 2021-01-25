import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostViewer from "../../components/post/PostViewer";
import { readPost, unloadPost } from "../../modules/post";

const PostViewerContainer = ({ match }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();
    const { post, error } = useSelector(({ post }) => ({
        post: post.post,
        error: post.error
    }));

    useEffect(() => {
        dispatch(readPost(postId));
        // 나중에 이부분 주석처리하고, 포스트 목록으로 나갔다가 들어오는거 체크한다.
        return () => { dispatch(unloadPost()) }; 
    }, [dispatch, postId]);

    return <PostViewer post={post} error={error}></PostViewer>;
};

export default withRouter(PostViewerContainer);