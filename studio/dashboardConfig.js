export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62a732f93eb97f4787416669',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pa76en3i',
                  apiId: '74cd289a-e371-4cc6-8b01-3c2e09dbd2b3'
                },
                {
                  buildHookId: '62a732fa85fbfe44711b1462',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1a7tp5et',
                  apiId: '9670bdba-15ac-454e-acfc-c76e3c828cb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lidiainmu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1a7tp5et.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
