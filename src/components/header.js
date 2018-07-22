import React from 'react';
import Link from './link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Heading = styled.h1`
    font-family: 'Unica One', cursive;
    text-transform: uppercase;
    font-size: 38px;
    color: black;
    text-decoration: none;
    font-weight: 400;
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <Link to="/">
                <Heading>{siteTitle}</Heading>
            </Link>
        </div>
    </HeaderWrapper>
);

export default Header;
