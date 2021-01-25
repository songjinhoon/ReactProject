import React from "react";
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const PostSubInfoBlock = styled.div`
    ${props => props.hasMarginTop && css`
        margin-top: 1rem;
    `}
    color: gray;
    span + span:before {
        color: blue;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const PostSubInfo = ({ username, publishedDate, hasMarginTop }) => {
    
    return (
        <PostSubInfoBlock hasMarginTop={hasMarginTop}>
            <span><b><Link to={`/@{username}`}>{username}</Link></b></span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </PostSubInfoBlock>
    );
};

export default PostSubInfo;