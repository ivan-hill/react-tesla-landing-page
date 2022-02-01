import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 60px;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content center;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
`;

const CustomMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .5s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }

    a {
        font-weight: 600;
    }
`;

const CustomClose = styled(CustomMenu)`
    justify-content: flex-end;
`;

function Header() {
    const [ BurgerStatus, setBurgerStatus ] = useState(false);

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="tesla logo" />
            </a>

            <Menu>
                <a href="/">Model S</a>
                <a href="/">Model 3</a>
                <a href="/">Model X</a>
                <a href="/">Model Y</a>
            </Menu>

            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#393c41"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </CustomMenu>
            </RightMenu>

            <BurgerNav show={BurgerStatus}>
                <CustomClose onClick={() => setBurgerStatus(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#393c41"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </CustomClose>
                <li><a href="/">Existing Iventory</a></li>
                <li><a href="/">Used Iventory</a></li>
                <li><a href="/">Trade-in</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadstar</a></li>
                <li><a href="/">Existing Iventory</a></li>
                <li><a href="/">Existing Iventory</a></li>
                <li><a href="/">Existing Iventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
