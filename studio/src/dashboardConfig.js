export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5a67ad53bf64bf73a3bcab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6on7nnto',
                  apiId: '998c1e52-748d-4949-8842-3bda8b74879f'
                },
                {
                  buildHookId: '5e5a67ad87d36e69a3fe6b47',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oqg4zski',
                  apiId: 'a0bc80e9-0017-4b13-bc09-8a1f171ed7fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IvarBorthen/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oqg4zski.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
