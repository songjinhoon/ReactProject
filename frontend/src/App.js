import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import PostListPage from './routes/PostListPage';
import PostPage from './routes/PostPage';
import RegisterPage from './routes/RegisterPage';
import WritePage from './routes/WritePage';
import MainPage from './routes/MainPage';

const App = () => {
    return (
        <>
            {/* <Route
                component={PostListPage}
                path={['/@:username', '/']}
                exact
            ></Route> */}
            <Route component={MainPage} path="/" exact></Route>
            <Route component={LoginPage} path="/login"></Route>
            <Route component={RegisterPage} path="/register"></Route>
            <Route component={WritePage} path="/write"></Route>
            <Route component={PostPage} path="/@:username/:postId"></Route>
        </>
    );
};

export default App;