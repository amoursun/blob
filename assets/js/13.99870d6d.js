(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{500:function(a,s,t){"use strict";t.r(s);var n=t(30),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("完整项目地址："),t("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("vue-element-admin"),t("OutboundLink")],1),t("br"),a._v("\n系类文章一："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000009275424",target:"_blank",rel:"noopener noreferrer"}},[a._v("手摸手，带你用 vue 撸后台 系列一（基础篇）"),t("OutboundLink")],1),t("br"),a._v("\n系类文章二："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000009506097",target:"_blank",rel:"noopener noreferrer"}},[a._v("手摸手，带你用 vue 撸后台 系列二（登录权限篇）"),t("OutboundLink")],1),t("br"),a._v("\n系类文章三："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000009762198",target:"_blank",rel:"noopener noreferrer"}},[a._v("手摸手，带你用 vue 撸后台 系列三(实战篇）"),t("OutboundLink")],1),t("br"),a._v("\n系类文章四："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000010043013",target:"_blank",rel:"noopener noreferrer"}},[a._v("手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("blockquote",[t("p",[a._v("这半年来一直在用 vue 写管理后台，目前后台已经有七十多个页面，十几种权限，但维护成本依然很低，效率依然很高，所以准备开源分享一下后台开发的经验和成果。目前的技术栈主要的采用 vue+element+axios.由于是个人项目，所以数据请求都是用了 mockjs 代替。")])]),a._v(" "),t("p",[a._v("后续会出一系列的教程配套文章，如如何从零构建后台项目框架，如何做完整的用户系统（如权限验证，二次登录等），如何二次开发组件（如富文本），如何整合七牛等等文章，各种后台开发经验等等。莫急~~")]),a._v(" "),t("h2",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[a._v("#")]),a._v(" 功能")]),a._v(" "),t("ul",[t("li",[a._v("登录/注销")]),a._v(" "),t("li",[a._v("权限验证")]),a._v(" "),t("li",[a._v("侧边栏")]),a._v(" "),t("li",[a._v("面包屑")]),a._v(" "),t("li",[a._v("富文本编辑器")]),a._v(" "),t("li",[a._v("Markdown 编辑器")]),a._v(" "),t("li",[a._v("JSON 编辑器")]),a._v(" "),t("li",[a._v("列表拖拽")]),a._v(" "),t("li",[a._v("plitPane")]),a._v(" "),t("li",[a._v("Dropzone")]),a._v(" "),t("li",[a._v("Sticky")]),a._v(" "),t("li",[a._v("CountTo")]),a._v(" "),t("li",[a._v("echarts 图表")]),a._v(" "),t("li",[a._v("401，401 错误页面")]),a._v(" "),t("li",[a._v("错误日志")]),a._v(" "),t("li",[a._v("导出 excel")]),a._v(" "),t("li",[a._v("table example")]),a._v(" "),t("li",[a._v("form example")]),a._v(" "),t("li",[a._v("多环境发布")]),a._v(" "),t("li",[a._v("dashboard")]),a._v(" "),t("li",[a._v("二次登录")]),a._v(" "),t("li",[a._v("动态侧边栏")]),a._v(" "),t("li",[a._v("mock 数据")]),a._v(" "),t("li",[a._v("svg iconfont")])]),a._v(" "),t("h2",{attrs:{id:"开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[a._v("#")]),a._v(" 开发")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 克隆项目")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/PanJiaChen/vue-element-admin.git\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装依赖")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地开发 开启服务")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run dev\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("浏览器访问 http://localhost:9527")]),a._v(" "),t("h2",{attrs:{id:"发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[a._v("#")]),a._v(" 发布")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 发布测试环境 带webpack ananalyzer")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build:sit-preview\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 构建生成环境")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build:prod\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("├── build                      // 构建相关  \n├── config                     // 配置相关\n├── src                        // 源代码\n│   ├── api                    // 所以请求\n│   ├── assets                 // 主题 字体等静态资源\n│   ├── components             // 全局公用组件\n│   ├── directive              // 全局指令\n│   ├── filtres                // 全局filter\n│   ├── mock                   // mock数据\n│   ├── router                 // 路由\n│   ├── store                  // 全局store管理\n│   ├── styles                 // 全局样式\n│   ├── utils                  // 全局公用方法\n│   ├── view                   // view\n│   ├── App.vue                // 入口页面\n│   └── main.js                // 入口 加载组件 初始化等\n├── static                     // 第三方不打包资源\n│   ├── jquery\n│   └── Tinymce                // 富文本\n├── .babelrc                   // babel-loader 配置\n├── eslintrc.js                // eslint 配置项\n├── .gitignore                 // "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" 忽略项\n├── favicon.ico                // favicon图标\n├── index.html                 // html模板\n└── package.json               // package.json\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br")])]),t("h2",{attrs:{id:"状态管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[a._v("#")]),a._v(" 状态管理")]),a._v(" "),t("p",[a._v("后台只有 user 和 app 配置相关状态使用 vuex 存在全局，其它数据都由每个业务页面自己管理。")]),a._v(" "),t("h2",{attrs:{id:"效果图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果图"}},[a._v("#")]),a._v(" 效果图")]),a._v(" "),t("h4",{attrs:{id:"两步验证登录-支持微信和-qq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两步验证登录-支持微信和-qq"}},[a._v("#")]),a._v(" 两步验证登录 支持微信和 qq")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/bVMIw0",alt:"2login.gif"}}),a._v(")")]),a._v(" "),t("h4",{attrs:{id:"真正的动态换肤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#真正的动态换肤"}},[a._v("#")]),a._v(" 真正的动态换肤")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/bVMIxe",alt:"图片描述"}})]),a._v(" "),t("h4",{attrs:{id:"拖拽排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拖拽排序"}},[a._v("#")]),a._v(" 拖拽排序")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/bVMIxU",alt:"clipboard.png"}})]),a._v(" "),t("h4",{attrs:{id:"上传裁剪头像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传裁剪头像"}},[a._v("#")]),a._v(" 上传裁剪头像")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/bVMIx9",alt:"clipboard.png"}})]),a._v(" "),t("h4",{attrs:{id:"错误统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误统计"}},[a._v("#")]),a._v(" 错误统计")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/bVMIye",alt:"clipboard.png"}})]),a._v(" "),t("h4",{attrs:{id:"富文本-整合七牛-打水印等个性化功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#富文本-整合七牛-打水印等个性化功能"}},[a._v("#")]),a._v(" 富文本(整合七牛 打水印等个性化功能)")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/bVMIym",alt:"clipboard.png"}})]),a._v(" "),t("h2",{attrs:{id:"更多-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多-demo"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"http://panjiachen.github.io/vue-element-admin/",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多 demo"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"占坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#占坑"}},[a._v("#")]),a._v(" 占坑")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009275424",target:"_blank",rel:"noopener noreferrer"}},[a._v("系类文章一"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);