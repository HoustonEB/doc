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
            title: 'H5',
            children: [
                ['/H5/Draggable', '拖拽'],
            ]
        },
      {
        title: 'Css',
        children: [
          ['/Css/文本处理', '文本处理'],
          ['/Css/布局', '布局']
        ]
      },
      {
        title: 'JS',
        children: [
          ['/JS/面向对象编程', '面向对象编程'],
          ['/JS/Module', 'Module'],
          ['/JS/Promise', 'Promise'],
          ['/JS/Object', 'Object'],
        ]
      },
      {
        title: 'React',
        // collapsable: false,
        children: [
          ['/React/State VS Props', 'State VS Props']
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
      },
      {
        title: 'Webpack',
        children: [
          ['/Webpack/Webpack', 'Quick Start']
        ]
      },
      {
        title: 'Node',
        children: [
          ['/Node/Node', 'Node']
        ]
      },
      {
        title: 'RegExr',
        children: [
          ['/RegExr/RegExr', '正则匹配表达式']
        ]
      }
    ]
  }
}