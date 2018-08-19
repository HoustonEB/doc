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
              collapsable: false,
              children: [
                ['/React/', 'README.md']
              ]
            },
            {
              title: 'Mobx',
              children: [
<<<<<<< HEAD
                ['/Mobx/observable/objects', 'objects'],
                ['/Mobx/observable/arrays', 'arrays']
=======
                ['/guide/page-a', 'page-a哈哈.md'],
                ['/guide/', 'README.md']
>>>>>>> develop
              ]
            },
            {
              title: 'Redux',
              children: [
                ['/Redux/', 'README.md']
              ]
            },
            {
              title: 'Git',
              children: [
                ['/Git/Branch', 'Branch']
              ]
            }
          ]
    }
}