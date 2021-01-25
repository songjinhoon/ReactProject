import React from "react";
import styled from "../../../node_modules/styled-components";
import Responsive from "../common/Responsive";

const BoardTemplateBlock = styled(Responsive)`
    padding: 1rem;
`;

const BoardTemplate = ({ children }) => {
    return <BoardTemplateBlock>{children}</BoardTemplateBlock>
};

export default BoardTemplate;
