import React from "react";
import styled from "../../../node_modules/styled-components";
import qs from "../../../node_modules/qs";
import Button from "../../components/common/Button";

const PaginationBlock = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`;
const PageNumber = styled.div``;

/* 이걸 컴포넌트 내부랑 외부 비교 + 파라미터 객체로 받으면 안되는지? */
const buildLink = ({ username, tag, page }) => {
    const query = qs.stringify({ tag, page });
    //return username ? `/@{username}?${query}` : 
};

const Pagination = ({ page, lastPage, username, tag }) => {
    return (
        <PaginationBlock>
            <Button disabled={page === 1} to={page === 1 ? undefined : buildLink({ username, tag, page: page-1 })}>이전</Button>
        </PaginationBlock>
    )
};

export default Pagination;
