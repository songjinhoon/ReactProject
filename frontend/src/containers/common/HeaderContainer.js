import React from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux";
import { logoutUser } from "../../modules/user";
import Header from "../../components/common/Header";

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user); // const { user } = useSelector(({ user }) => ({user: user.user}));
    const onLogOut = () => dispatch(logoutUser());

    return <Header user={user} onLogOut={onLogOut}></Header>
};

export default HeaderContainer;