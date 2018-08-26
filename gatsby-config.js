module.exports = {
    siteMetadata: {
        title: 'Sunshine Folk',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Unica One`],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
    ],
};
