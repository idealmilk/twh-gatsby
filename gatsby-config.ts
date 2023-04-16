import type { GatsbyConfig } from 'gatsby';

const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.mgilligan.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-anchor-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#00BFA6',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        context: path.join(__dirname, 'src/context'),
        data: path.join(__dirname, 'src/data'),
        hooks: path.join(__dirname, 'src/hooks'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages'),
        sections: path.join(__dirname, 'src/sections'),
        styles: path.join(__dirname, 'src/styles'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
