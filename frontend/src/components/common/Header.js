import React from "react";
import { Link, withRouter } from "../../../node_modules/react-router-dom";
import styled from "../../../node_modules/styled-components";
import Responsive from "../common/Responsive";
import Button from "./Button";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 1;
`;
const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right{
        display: flex;
        align-items: center;
    }
`;
const Spacer = styled.div`
    height: 4rem;
`;
const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;
const ButtonStyled = styled(Button)`
    width: 7rem;
    height: 1.5rem;
`;

const Header = ({ user, onLogOut, location }) => {
    if(location.pathname === "/login" || location.pathname === "/register") {
        return (
            <>
                <HeaderBlock>
                    <Wrapper>
                        <Link to="/" className="logo">REACTERS</Link>
                    </Wrapper>
                </HeaderBlock>
                <Spacer></Spacer>
            </>
        );
    }else {
        return (
            <>
                <HeaderBlock>
                    <Wrapper>
                        <Link to="/" className="logo">REACTERS</Link>
                        {user ? (
                            <div className="right">
                                <UserInfo>{user.username}</UserInfo>
                                <ButtonStyled onClick={onLogOut}>로그아웃</ButtonStyled>
                            </div>
                        ) : (
                            <div className="right">
                                <Link to="/auth/login"><ButtonStyled>로그인</ButtonStyled></Link>
                            </div>
                        )}
                    </Wrapper>
                </HeaderBlock>
                <Spacer></Spacer>
            </>
        );
    }
};

export default withRouter(Header);