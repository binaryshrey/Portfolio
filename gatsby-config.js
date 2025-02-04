module.exports = {
  plugins: [{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Shreyansh Saurabh',
        short_name: 'Shreyansh Saurabh',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: './logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
    },
    {
      resolve:`gatsby-plugin-sitemap`
    },
    {
      resolve : 'gatsby-plugin-postcss',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.shreyanshsaurabh.com',
        sitemap: 'https://www.shreyanshsaurabh.com/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ],
  siteMetadata: {
    title: "Shreyansh Saurabh",
    description: "FullStack Developer : Portfolio site",
    image: `/logo.webp`,
    siteUrl: `https://www.shreyanshsaurabh.com/`,
  },
}
