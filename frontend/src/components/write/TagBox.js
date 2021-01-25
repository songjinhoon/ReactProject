import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
    padding: 0 1rem;
    h4 {
        margin-top: 0;
        margin-bottom: 0.5rem,;
    }
`;
const TagBoxForm = styled.form`
    // border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    // border: 1px solid blue;
    input, button {
        outline: none;
        // border: none;
        font-size: 1rem;
    }
    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        // border: none;
        background: blue;
        color: white;
        font-weight: bold;
        &:hover {
             background: blue;
        }
      }
`;
const TagDiv = styled.div`
    margin-right: 0.5rem;
    color: blue;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;
const TagListDiv = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;
// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => <TagDiv onClick={() => onRemove(tag)}>#{tag}</TagDiv>);
// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
    <TagListDiv>
        {tags.map(tag => <TagItem key={tag} tag={tag} onRemove={onRemove}></TagItem>)}
    </TagListDiv>
));

const TagBox = ({ onChangeTags, tags }) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(tag => {
        if(!tag) return;
        if(localTags.includes(tag)) return; 
        const nextTags = [...localTags, tag];
        setLocalTags(nextTags);
        onChangeTags(nextTags);
    }, [localTags, onChangeTags]);
    const onRemove = useCallback(tag => {
        const nextTags = localTags.filter(t => t !== tag);
        setLocalTags(nextTags);
        onChangeTags(nextTags);
    }, [localTags, onChangeTags]);
    const onChange = useCallback(e => { setInput(e.target.value) }, []);
    const onSubmit = useCallback(e => { 
        e.preventDefault();
        insertTag(input.trim());
        setInput('');
    }, [input, insertTag]);

    useEffect(() => { setLocalTags(tags) }, [tags]);

    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagBoxForm onSubmit={onSubmit}>
                <input placeholder="태그를 입력하세요." value={input} onChange={onChange}></input>
                <button type="submit">추가</button>
            </TagBoxForm>
            <TagList tags={localTags} onRemove={onRemove}></TagList>
        </TagBoxBlock>
    );
};

export default TagBox;