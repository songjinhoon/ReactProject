import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux";
import { listPost } from "../../modules/post";
import PostList from "../../components/post/PostList";
import qs from "../../../node_modules/qs";
import { withRouter } from "../../../node_modules/react-router-dom";

const PostListContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { posts, error, user } = useSelector(({ post, user }) => ({
        posts: post.posts,
        error: post.error,
        user: user.user
    }));

    useEffect(() => {
        const { tag, page, username } = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(listPost({ tag, username, page }));
    }, [dispatch, location.search]);

    return <PostList posts={posts} error={error} user={user}></PostList>;
};

export default withRouter(PostListContainer);