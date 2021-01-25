import React from "react";
import { Route } from "react-router-dom";
import AuthPage from './page/AuthPage';
import LoginPage from "./page/LoginPage";
import PostListPage from "./page/PostListPage";
import PostPage from "./page/PostPage";
import RegisterPage from "./page/RegisterPage";
import WritePage from "./page/WritePage";
import MainPage from "./page/MainPage";
import BoardPage from "./page/BoardPage";

const App = () => {
    return (
        <>
            <Route component={MainPage} path="/" exact></Route>
            <Route component={AuthPage} path="/auth"></Route>
            <Route component={BoardPage} path="/board"></Route>
            <Route component={PostListPage} path="/post"></Route>
            <Route component={WritePage} path="/write"></Route>
            <Route component={PostPage} path="/@:username/:postId"></Route>
        </>
    );
};

export default App;