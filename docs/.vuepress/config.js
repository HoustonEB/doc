module.exports = {
    "title": "VuePress",
    "description": "Vue 驱动的静态网站生成器",
    "base": "/.vuepress/dist/",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        // sidebar: [
        //     ['/guide/page-a', 'page-a.md'],
        //     ['/guide/', 'README.md'],
        // ],
        sidebar: [
            {
              title: 'Group 1',
              collapsable: false,
              children: [
                ['/guide/page-a', 'page-a.md'],
                ['/guide/', 'README.md']
              ]
            },
            {
              title: 'Group 2',
              children: [ 
                ['/guide/page-a', 'page-a.md'],
                ['/guide/', 'README.md'],
                ]
            }
          ]
    }
}