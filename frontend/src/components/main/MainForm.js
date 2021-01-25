import React from "react";
import { Link } from "../../../node_modules/react-router-dom";
import styled from "../../../node_modules/styled-components";
import logo from "../../logo.svg";

const MainFormBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 350px;
    }

    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }

    @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
`;
const Spacer = styled.div`
    height: 8rem;
`;
const Mid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    color: #424242;
    font-weight: 500;
    letter-spacing: 2px;
    text-decoration: underline;
    a {
        &:hover {
            color: #151515;
        }
    }
`;

const MainForm = () => {
    return (
        <>
            <MainFormBlock>
                <h1>Main Page</h1>
                <img src={logo} className="App-logo" alt="로고"></img>
                <Spacer></Spacer>
                <Mid>
                    <Link to="/post">POST</Link>
                    <Link to="/board">BOARD</Link>
                </Mid>
            </MainFormBlock>
        </>
    );
};

export default MainForm;