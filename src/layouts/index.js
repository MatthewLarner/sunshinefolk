import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

import Header from '../components/header';
import './index.css';

const baseStyles = () => injectGlobal`
    ${reset}
`;

const App = styled.div``;

const Layout = ({ children, data }) => {
    baseStyles();
    return (
        <App>
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}
            >
                {children()}
            </div>
        </App>
    );
};

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
