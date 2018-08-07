module.exports = {
    "title": "VuePress",
    "description": "Vue 驱动的静态网站生成器",
    "base": "/doc/",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            ['/guide/page-a', 'ds']
        ]
    }
}