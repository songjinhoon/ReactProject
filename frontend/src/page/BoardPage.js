import React from "react";
import { withRouter, Route } from "../../node_modules/react-router-dom";
import HeaderContainer from "../containers/common/HeaderContainer";
import BoardListTemplate from "../components/board/BoardTemplate";
import BoardListContainer from "../containers/board/BoardListContainer";
import BoardDetailContainer from "../containers/board/BoardDetailContainer";
import BoardWriteContainer from "../containers/board/BoardWriteContainer";

const BoardPage = ({ match }) => {

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <BoardListTemplate>
                <Route path={match.path} component={BoardListContainer} exact></Route>
                <Route path={`${match.path}/write`} component={BoardWriteContainer}></Route> 
                <Route path={`${match.path}/detail/:id`} component={BoardDetailContainer}></Route>
            </BoardListTemplate>
        </>
    );
};

export default withRouter(BoardPage);