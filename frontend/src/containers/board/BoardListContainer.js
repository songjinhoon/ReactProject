import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux";
import { location, Route, withRouter } from "../../../node_modules/react-router-dom";
import BoardListForm from "../../components/board/BoardListForm";

const BoardListContainer = ({ match }) => {
    const disaptch = useDispatch();
    useEffect(() => {

    }, []);

    return (
        <>
            <BoardListForm></BoardListForm>
            {/* <Route path={match.path} component={BoardListForm} exact></Route> */}
        </>
    );
};

export default withRouter(BoardListContainer);