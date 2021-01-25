import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostTagInfoBlock = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: #2EFEF7;
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover {
            color: #04B4AE;
        }
    }
`;

const PostTagInfo = ({ tags }) => {

    return (
        <PostTagInfoBlock>
            {tags.map(tag => 
                <Link className="tag" to={`/?tag=${tag}`} key={tag}>#{tag}</Link>
            )}
        </PostTagInfoBlock>
    );
};

export default PostTagInfo;