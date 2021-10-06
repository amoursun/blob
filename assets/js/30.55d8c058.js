(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{490:function(s,e,a){"use strict";a.r(e);var t=a(31),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vuepress-搭建博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress-搭建博客"}},[s._v("#")]),s._v(" 使用 VuePress 搭建博客")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("前排提醒:")]),s._v(" 你也许需要一定的前端基础（非传统前端）才能读懂此篇文章的内容。")])]),s._v(" "),a("p",[s._v("我认为 Vue 的生态是有够好的了——有 Router，有 Vuex，还有更多，都是非常有用处的。其中就包含 VuePress，原本是尤雨溪先生用来提高写文档效率而写的一个小作品，现在被发展后可以用作电子书/教程编写和博客的编写。本篇文章介绍的是后者，实际上两者是相通的。")]),s._v(" "),a("h2",{attrs:{id:"流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[s._v("#")]),s._v(" 流程")]),s._v(" "),a("p",[s._v("VuePress 与其它静态博客软件的发布流程基本一样——写完文章后 "),a("code",[s._v("build")]),s._v(" 成为静态文件。所以如果是 Hexo 或者 Hugo 用户看到这篇文章中的流程也许会感觉很熟悉，不过这里还是提到一下。")]),s._v(" "),a("p",[s._v("也正因为是静态文件，所以可以使用 GitHub 托管——当然也可以使用你自己的主机，仅需将网站根目录设置为 "),a("code",[s._v("build")]),s._v(" 产生的静态文件的目录即可。这会在下文中提到。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("首先选择一个你想要用来作为博客源代码放置之处的文件夹，"),a("strong",[s._v("下文中如果没有特殊声明，所有的文件、目录均指创建在此文件夹里")]),s._v("。")]),s._v(" "),a("p",[s._v("通过 npm 和 yarn 均可安装。本文主要使用 npm。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 yarn add -D vuepress")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("需要注意的一点是，这种方式是以本地依赖（dependencies）的形式安装 VuePress，它会在当前目录生成一个 "),a("code",[s._v("node_modules")]),s._v(" 文件夹并自动安装 JavaScript、Vue 等所需要的依赖。")]),s._v(" "),a("p",[s._v("在本文后面出现的指令均无法以 "),a("code",[s._v("vuepress")]),s._v(" 开头，因为 VuePress 没有被全局安装。")]),s._v(" "),a("p",[s._v("安装完成之后，就可以开始搭建了。")]),s._v(" "),a("h2",{attrs:{id:"搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[s._v("#")]),s._v(" 搭建")]),s._v(" "),a("p",[s._v("个人还是建议将你的博客的源代码托管到 GitHub 上，哪怕私有也好。当然，你也可以选择部署到自己的 Git 服务器上。这样做就有这些好处")]),s._v(" "),a("ol",[a("li",[s._v("一个算是比较简单的双重备份吧，当你的数据消失后，可以通过 Git Log 找到；")]),s._v(" "),a("li",[s._v("一些插件需要通过 Git 的提交日志获得你提交某篇文章的具体时刻，然后才能够显示日期或者 XX ago。")])]),s._v(" "),a("p",[s._v("那么首先我们创建一个专门放置「文章」的目录（区分于「独立页面」，这样做可以避免混淆），名称可以自取，例如 "),a("code",[s._v("archives")]),s._v("、"),a("code",[s._v("articles")]),s._v("、"),a("code",[s._v("posts")]),s._v("、"),a("code",[s._v("docs")]),s._v(" 等均可表达这个意思，也是传统博客程序中常用的。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" posts\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" posts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后就可以在这个文件夹里进行写作了，写作仅需在此文件夹里建立不同的 Markdown 文件，VuePress 会自动识别到你的文章。")]),s._v(" "),a("p",[s._v("VuePress 的写作使用 Markdown 文件进行，路由会自动将你的 Markdown 文件名称在实际 production 中转换成文件名 + "),a("code",[s._v(".html")]),s._v(" 的形式。")]),s._v(" "),a("p",[s._v("例如 "),a("code",[s._v("docs/Hello-World.md")]),s._v(" 将会被转化为 "),a("code",[s._v("docs/Hello-World.html")]),s._v("，而在根目录的 "),a("code",[s._v("Hello.md")]),s._v(" 将会被转化为 "),a("code",[s._v("Hello.html")]),s._v("，这也是为什么需要专门创建一个文件夹用来放置文章的原因，根目录里只需要放置独立页面即可，这样从路由层面看来会更加友好。")]),s._v(" "),a("p",[s._v("到目前为止，你的博客目录应该为这个样子")]),s._v(" "),a("div",{staticClass:"language-tree line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├─package-lock.json\n├─package.json\n├─node_modules\n└─posts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"写作与发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写作与发布"}},[s._v("#")]),s._v(" 写作与发布")]),s._v(" "),a("p",[s._v("如果你的环境已经搭建完毕，那么你可以选择在纯 Markdown 下进行写作，然后直接 "),a("code",[s._v("push")]),s._v(" 到你的仓库中去。")]),s._v(" "),a("p",[s._v("而如果你想要实时预览自己的文章在博客上的样子，或者调试一些应用层面的东西，你就需要启动开发服务器。")]),s._v(" "),a("p",[s._v("与 Vue 的开发服务器相同，VuePress 的服务器也是支持热重载的。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果之前 npm install 为全局安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D -g vuepress")]),s._v("\nvuepress dev "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果之前 npm install 是以本地依赖安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\nnpx vuepress dev "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这样，在默认情况下会在 "),a("a",{attrs:{href:"https://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://localhost:8080"),a("OutboundLink")],1),s._v(" 开放你的开发服务器，访问即可看到你的网站。")]),s._v(" "),a("p",[s._v("最后，写完了就可以进行构建了——将你的网站样式和内容编译成静态网页。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("vuepress build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\nnpx vuepress build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("默认情况下这个静态网页会被保存到 "),a("code",[s._v(".vuepress/dist")]),s._v(" 内，在后文会介绍修改方法。")]),s._v(" "),a("h2",{attrs:{id:"配置、主题、插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置、主题、插件"}},[s._v("#")]),s._v(" 配置、主题、插件")]),s._v(" "),a("p",[s._v("VuePress 之所以适合开发者，是因为它可以通过配置、主题和插件三方面高程度个性化——当然，是在你会 Vue 而且会看 VuePress 的 API 的前提下。")]),s._v(" "),a("p",[s._v("VuePress 的配置文件存储在 "),a("code",[s._v(".vuepress")]),s._v(" 里，一般情况下是没有这个文件夹的，我们可以自己创建。")]),s._v(" "),a("p",[s._v("进入后，创建 "),a("code",[s._v("config.js")]),s._v("，这就是 VuePress 的配置文件。")]),s._v(" "),a("p",[a("code",[s._v("config.js")]),s._v(" 在写入一个语句之后即可当作一般的 JSON 文件来使用——它比 JSON 要宽松得多。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Subilan\'s Blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("具体配置项目可以参考 VuePress 官方文档的"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/basic-config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("要切换主题，首先使用 npm 安装你想要的主题，比如")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vuepress-theme-example --save-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add vuepress-theme-example --dev")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后在 "),a("code",[s._v("config.js")]),s._v(" 里添加一行")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("即可。")]),s._v(" "),a("p",[s._v("在这里需要注意的一点是，VuePress 的所有主题、Plugin，根据官方的建议，均是以 "),a("code",[s._v("vuepress-theme-")]),s._v(" 和 "),a("code",[s._v("vuepress-plugin-")]),s._v(" 开头。也正因此，安装以他们开头的主题或插件，在填写的时候则可以省略 "),a("code",[s._v("vuepress-theme-")]),s._v(" 这样的开头。当然，这只是一般情况，具体请以你所看到的主题或插件为准。")]),s._v(" "),a("p",[s._v("关于 VuePress 原版主题的相关配置可以看官方文档的"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/default-theme-config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("默认主题"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("这是阅读完文章后，我个人推荐去参考的一些文档，以及一些可能需要的插件。")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("config.js 里完整的配置项有多少、哪些，有何作用？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.google.com/search?q=vuepress-theme+site%3Agithub.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("Google 搜索 VuePress 的主题"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/meteorlxy/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("meteorlxy/awesome-vuepress"),a("OutboundLink")],1),s._v(" - 丰富的 VuePress 周边生态推荐")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuejs/vuepress/packages/@vuepress"),a("OutboundLink")],1),s._v(" - VuePress 官方开发的插件")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuepress/vuepress-plugin-mathjax",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-mathjax"),a("OutboundLink")],1),s._v(" - 在你的博客里写 $\\LaTeX$ 公式。")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-last-updated",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-last-updated"),a("OutboundLink")],1),s._v(" - 根据 Git Log 显示文章最后修改时间")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-pwa",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-pwa"),a("OutboundLink")],1),s._v(" - 将你的博客变成具有 PWA 性质的 Web App")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Subilan/Blog",target:"_blank",rel:"noopener noreferrer"}},[s._v("Subilan/Blog"),a("OutboundLink")],1),s._v(" - 本博客的 GitHub 仓库")])])])}),[],!1,null,null,null);e.default=r.exports}}]);