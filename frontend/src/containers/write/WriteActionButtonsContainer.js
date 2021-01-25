import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writePost } from "../../modules/write";
import { withRouter } from "react-router-dom";
import WriteActionButton from "../../components/write/WriteActionButton";

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError
    }));

    const onPublish = () => { 
        console.log(title);
        dispatch(writePost({ title, body, tags }));
    };
    const onCancel = () => { history.goBack() };

    useEffect(() => {
        if(post) history.push(`/@${post.user.username}/${post._id}`);
        if(postError) console.log(postError);
    }, [post, postError, history]);

    return <WriteActionButton onPublish={onPublish} onCancel={onCancel}></WriteActionButton>
};

export default withRouter(WriteActionButtonsContainer);

