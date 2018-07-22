module.exports = {
    siteMetadata: {
        title: 'Sunshine Folk',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-netlify-cms',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Unica One`],
            },
        },
    ],
};
