module.exports = {
    "title": "VuePress",
    "description": "Vue 驱动的静态网站生成器",
    "base": "/doc/",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://baidu.com' },
        ],
        // sidebar: [
        //     ['/guide/page-a', 'page-a.md'],
        //     ['/guide/', 'README.md'],
        // ],
        sidebar: [
            {
              title: 'React',
              children: [
                ['/guide/page-a', 'page-a.md'],
                ['/guide/', 'README.md']
              ]
            },
            {
              title: 'Mobx',
              children: [
                ['/guide/page-a', 'page-a哈哈.md'],
                ['/guide/', 'README.md']
              ]
            },
            {
              title: 'Redux',
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