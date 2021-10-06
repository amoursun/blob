const path = require('path');

module.exports = {
    title: "Amoursun's Blog",
    description: '作为技术博客, 文档, 技术整理',
    //  指定 vuepress build 的输出目录
    dest: 'dist',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/img/logo.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
        //增加manifest.json
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    base: '/blog/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        // ['@vuepress/google-analytics', {
        //     ga: '**-*********-*' // 你的Google Analytics ID
        // }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/back-to-top'],
        ['@vuepress/nprogress'],
        [{
            mathjax: {
                target: 'chtml',
            },
        }],
    ],
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@docs': path.resolve(__dirname, '../docs'),
    //             '@theme': path.resolve(__dirname, './theme'),
    //         }
    //     }
    // },
    chainWebpack: config => {
        config.resolve.alias.set('@docs', path.resolve(__dirname, '../docs'));
        config.resolve.alias.set('@theme', path.resolve(__dirname, './theme'))
    },
    // locales: {
    //     // 键名是该语言所属的子路径
    //     // 作为特例，默认语言可以使用 '/' 作为其路径。
    //     '/en/': {
    //         lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //         title: 'English',
    //         description: 'Vue-powered Static Site Generator'
    //     },
    //     '/': {
    //         lang: 'zh-CN',
    //         title: '中文',
    //         description: 'Vue 驱动的静态网站生成器'
    //     }
    // },
    // theme: '@vuepress/blog',
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/amoursun/blob.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/amoursun/blob',
        // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        // editLinkText: 'Git EditLink [Private]',
        // 文档更新时间：每个文件git最后提交的时间,
        lastUpdated: '最后更新于(Last Updated)',
        // 侧边栏搜索深度
        sidebarDepth: 4, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        search: true,
        searchMaxSuggestions: 10,
        // 顶部导航栏
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            {text: 'Blog', link: '/'},
            {text: '链接', link: '/links/wiki/'},
            {text: 'FAQ', link: '/FAQ/'},
            // 多项，下拉形式
            {
                text: '分类',
                items: [
                    // link：指向链接也可以是外网链接
                    {
                        text: 'JS',
                        link: '/thought/js/'
                    },
                    {
                        text: 'CSS',
                        link: '/thought/css/'
                    },
                    {
                        text: 'Node',
                        link: '/thought/node/'
                    },
                    {
                        text: 'ES6',
                        link: '/thought/es6/'
                    },
                    {
                        text: 'Git',
                        link: '/thought/git/'
                    },
                    {
                        text: 'React & Mobx',
                        link: '/thought/react&mobx/'
                    },
                    {
                        text: '其他',
                        link: '/thought/other/'
                    }
                ]
            },
            // 多项，下拉形式
            {
                text: '作者',
                items: [
                    // link：指向链接也可以是外网链接
                    {text: '关于作者', link: '/another/aboutSelf'},
                ]
            },
        ],
        hiddenPages: [
            // '/',
        ],
        // sidebar: 'auto',
        // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar: {
            '/FAQ/': [
                {
                    title: 'FAQ',
                    children: [
                        ['/FAQ/content/question-1', '#FAQ_question_1'],
                        ['/FAQ/content/question-2', '#FAQ_question_2'],
                    ]
                }
            ],
            '/thought/': [
                {
                    title: 'JS',
                },
                {
                    title: 'CSS',
                },
                {
                    title: 'Node',
                },
                {
                    title: 'ES6',
                },
                {
                    title: 'Git',
                },
                {
                    title: 'React & Mobx',
                },
                {
                    title: '其他',
                    children: [
                        ['/thought/other/', '#other']
                    ]
                }
            ],
            '/another/': [
                ['/another/aboutSelf', '#about_self'],
            ]
        },
        // locales: {
        //     '/': {
        //         selectText: 'Languages',
        //         label: 'English',
        //         ariaLabel: 'Languages',
        //         editLinkText: 'Edit this page on GitHub',
        //         serviceWorker: {
        //             updatePopup: {
        //                 message: "New content is available.",
        //                 buttonText: "Refresh"
        //             }
        //         },
        //         algolia: {},
        //         nav: [
        //             {text: 'Nested', link: '/nested/', ariaLabel: 'Nested'}
        //         ],
        //         sidebar: {
        //             '/': [/* ... */],
        //             '/nested/': [/* ... */]
        //         }
        //     },
        //     '/zh/': {
        //         // 多语言下拉菜单的标题
        //         selectText: '选择语言',
        //         // 该语言在下拉菜单中的标签
        //         label: '简体中文',
        //         // 编辑链接文字
        //         editLinkText: '在 GitHub 上编辑此页',
        //         // Service Worker 的配置
        //         serviceWorker: {
        //             updatePopup: {
        //                 message: "发现新内容可用.",
        //                 buttonText: "刷新"
        //             }
        //         },
        //         // 当前 locale 的 algolia docsearch 选项
        //         algolia: {},
        //         nav: [
        //             {text: '嵌套', link: '/zh/nested/'}
        //         ],
        //         sidebar: {
        //             '/zh/': [/* ... */],
        //             '/zh/nested/': [/* ... */]
        //         }
        //     }
        // }
    }
};