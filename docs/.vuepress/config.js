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
                ['/React/State VS Props', 'State VS Props']
              ]
            },
            {
              title: 'JS',
              children: [
                ['/JS/面向对象编程', '面向对象编程']

              ]
            },
            {
              title: 'Mobx',
              children: [
                ['/Mobx/observable/objects', 'objects'],
                ['/Mobx/observable/arrays', 'arrays']

              ]
            },
            {
              title: 'Redux',
              children: [
                ['/Redux/Reader', 'Reader']
              ]
            },
            {
              title: 'Echarts',
              children: [
                ['/Echarts/Echarts', 'Echarts']
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