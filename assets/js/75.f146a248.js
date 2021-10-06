(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{561:function(t,e,a){"use strict";a.r(e);var r=a(30),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"flutter-vs-react-native"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-vs-react-native"}},[t._v("#")]),t._v(" flutter vs react native")]),t._v(" "),a("p",[t._v("谷歌大会上")]),t._v(" "),a("p",[t._v("react native 使用 js 编写，生成虚拟 dom，最后它将你转化为 iOS 或者 Android 原生组件。而 Flutter 是基于 "),a("code",[t._v("Skia")]),t._v(" 实现的。没有什么 Android runtime 或者 Chromium 什么中间层。")]),t._v(" "),a("p",[t._v("dart 语言上的优势。类 java 强类型 oop 语言，AOT(Ahead-Of-Time )")]),t._v(" "),a("p",[t._v("Flutter 和 RN/Weex 的差异，核心在于渲染的基础由自己实现，简单来说，")]),t._v(" "),a("ul",[a("li",[t._v("Flutter 的代码经过 Flutter 引擎直接就渲染到了屏幕上")]),t._v(" "),a("li",[t._v("而 RN/Weex 的代码需要先跑到 Native 层处理一下，然后经过 Native 层渲染到屏幕")])]),t._v(" "),a("p",[t._v("很显然前者效率会更高。由于 Native 组件可能会随着系统的升级跟着一起升级（API 增、删或变化），RN/Weex 需要写很多胶水层代码来适配不同版本、不同平台的 Native 组件，而 Flutter 就不存在这个问题")]),t._v(" "),a("p",[t._v("缺点：UI 控件 API，主要的坑就在于需要非常了解原生的环境，语言成本，没有热更新，组件混乱，有不少学习成本")]),t._v(" "),a("h3",{attrs:{id:"前端代码安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端代码安全"}},[t._v("#")]),t._v(" 前端代码安全")]),t._v(" "),a("p",[t._v("可以使用 "),a("a",{attrs:{href:"https://obfuscator.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Obfuscator Tool"),a("OutboundLink")],1),t._v(" js 代码混淆工具，但只是增加了一些破解成本，WebAssembly 安全性相对而言更好。相关文章"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/61651310",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端核心代码保护技术面面观"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"实现-foreach-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-foreach-polyfill"}},[t._v("#")]),t._v(" 实现 forEach polyfill")]),t._v(" "),a("h3",{attrs:{id:"多线程和单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程和单线程"}},[t._v("#")]),t._v(" 多线程和单线程")]),t._v(" "),a("p",[t._v("js 为什么要设计成单线程？"),a("br"),t._v("\n浏览器的内核是多线程"),a("br"),t._v("\nweb worker -comlink")]),t._v(" "),a("p",[t._v("Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。")]),t._v(" "),a("p",[t._v("Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象")]),t._v(" "),a("h3",{attrs:{id:"settimeout-vs-setinterval-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-vs-setinterval-区别"}},[t._v("#")]),t._v(" setTimeout vs setInterval 区别")]),t._v(" "),a("p",[t._v("衍生问题 setTimeout(func, 0)")]),t._v(" "),a("h3",{attrs:{id:"函数-节流-防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数-节流-防抖"}},[t._v("#")]),t._v(" 函数 节流 防抖")]),t._v(" "),a("p",[t._v("实现不说了"),a("br"),t._v("\n主要说下各自运用场景：")]),t._v(" "),a("p",[t._v("debounce-防抖："),a("br"),t._v("\n在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。")]),t._v(" "),a("ul",[a("li",[t._v("每次 resize/scroll 触发统计事件")]),t._v(" "),a("li",[t._v("文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）")])]),t._v(" "),a("p",[t._v("throttle-节流："),a("br"),t._v("\n规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。")]),t._v(" "),a("ul",[a("li",[t._v("DOM 元素的拖拽功能实现（mousemove）")]),t._v(" "),a("li",[t._v("搜索联想（keyup）")]),t._v(" "),a("li",[t._v("监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次 #21 (comment)")])]),t._v(" "),a("h3",{attrs:{id:"eval-vs-new-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eval-vs-new-function"}},[t._v("#")]),t._v(" eval vs new Function")]),t._v(" "),a("h3",{attrs:{id:"_1-2-3-map-parseint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-map-parseint"}},[t._v("#")]),t._v(" ['1', '2', '3'].map(parseInt)")]),t._v(" "),a("h3",{attrs:{id:"待看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待看"}},[t._v("#")]),t._v(" 待看")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question",target:"_blank",rel:"noopener noreferrer"}},[t._v("木易杨-高级前端进阶"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/azl397985856/leetcode",target:"_blank",rel:"noopener noreferrer"}},[t._v("leetcode"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d16cec0f265da1bba591903")]),t._v(" "),a("h3",{attrs:{id:"defer-vs-async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defer-vs-async"}},[t._v("#")]),t._v(" defer vs async")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wpimg.wallstcn.com/2dd76605-8008-479d-9415-e1fed67f9660.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"跨项目使用代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨项目使用代码"}},[t._v("#")]),t._v(" 跨项目使用代码")]),t._v(" "),a("ul",[a("li",[t._v("npm")]),t._v(" "),a("li",[t._v("[bit](https://github.com/teambit/bit")]),t._v(" "),a("li",[t._v("git module")]),t._v(" "),a("li",[t._v("Monorepo")])]),t._v(" "),a("h2",{attrs:{id:"json-边界问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-边界问题"}},[t._v("#")]),t._v(" json 边界问题")]),t._v(" "),a("p",[t._v("U+2028 U+2029")]),t._v(" "),a("p",[t._v("JSON 支持，但在 js 中的 JSON 就不支持。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29958439",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON: 不要误会,我真的不是 JavaScript 的子集"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),a("h2",{attrs:{id:"http2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" http2")]),t._v(" "),a("p",[t._v("http2 头部压缩")]),t._v(" "),a("p",[t._v("服务器端渲染 vs 预渲染 (SSR vs Prerendering)")]),t._v(" "),a("h2",{attrs:{id:"前端埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端埋点"}},[t._v("#")]),t._v(" 前端埋点")]),t._v(" "),a("p",[t._v("代码埋点"),a("br"),t._v("\n可视化埋点"),a("br"),t._v("\n全埋点"),a("br"),t._v("\n后端埋点")]),t._v(" "),a("h2",{attrs:{id:"beacon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beacon"}},[t._v("#")]),t._v(" Beacon")]),t._v(" "),a("p",[t._v("Beacon API 允许开发者发送少量错误分析和上报的信息，它的特点很明显：")]),t._v(" "),a("p",[t._v("在空闲的时候异步发送统计，不影响页面诸如 JS、CSS Animation 等执行"),a("br"),t._v("\n即使页面在 unload 状态下，也会异步发送统计，不影响页面过渡/跳转到下跳页"),a("br"),t._v("\n能够被客户端优化发送，尤其在 Mobile 环境下，可以将 Beacon 请求合并到其他请求上，一同处理。")]),t._v(" "),a("p",[t._v("https://www.barretlee.com/blog/2016/02/20/navigator-beacon-api/")]),t._v(" "),a("h2",{attrs:{id:"为什么前端监控要用-gif-打点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么前端监控要用-gif-打点"}},[t._v("#")]),t._v(" 为什么前端监控要用 GIF 打点")]),t._v(" "),a("h2",{attrs:{id:"前端监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端监控"}},[t._v("#")]),t._v(" 前端监控")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5b35921af265da598f1563cf")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"mutationobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver"}},[t._v("#")]),t._v(" MutationObserver")]),t._v(" "),a("h3",{attrs:{id:"intersectionobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intersectionobserver"}},[t._v("#")]),t._v(" IntersectionObserver")]),t._v(" "),a("h2",{attrs:{id:"web-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[t._v("#")]),t._v(" web worker")]),t._v(" "),a("h2",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d199ab15188255d6924028b")]),t._v(" "),a("p",[t._v("基于 tapable 插件")]),t._v(" "),a("h3",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" tree shaking")]),t._v(" "),a("p",[t._v("https://segmentfault.com/a/1190000012794598"),a("br"),t._v("\nhttps://github.com/webpack/webpack/issues/7500"),a("br"),t._v("\nhttps://diverse.space/2018/05/better-tree-shaking-with-scope-analysis")]),t._v(" "),a("h3",{attrs:{id:"hot-reload-热更新原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hot-reload-热更新原理"}},[t._v("#")]),t._v(" hot reload 热更新原理")]),t._v(" "),a("p",[t._v("webapck HMR 则不会刷新浏览器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。")]),t._v(" "),a("p",[t._v("https://github.com/kaola-fed/blog/issues/238"),a("br"),t._v("\nhttps://zhuanlan.zhihu.com/p/30669007")]),t._v(" "),a("p",[t._v("依赖 HotModuleReplacementPlugin")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./print.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accepting the updated printMe module!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printMe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("vue hmr 基于 vue-hot-reload-api")]),t._v(" "),a("h3",{attrs:{id:"webpack-是如何实现动态导入的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-是如何实现动态导入的"}},[t._v("#")]),t._v(" webpack 是如何实现动态导入的")]),t._v(" "),a("p",[t._v("https://blog.elsonzhang.cn/2018/08/01/talk-about-webpack-bundle/"),a("br"),t._v("\nhttps://juejin.im/post/5d26e7d1518825290726f67a")]),t._v(" "),a("h2",{attrs:{id:"垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),a("h2",{attrs:{id:"js-双精度问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-双精度问题"}},[t._v("#")]),t._v(" js 双精度问题")]),t._v(" "),a("h2",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("p",[t._v("bds dfs"),a("br"),t._v("\n尾调用"),a("br"),t._v("\n五大算法"),a("br"),t._v("\n动态规划 #62 #70 #198 #91"),a("br"),t._v("\n分治算法"),a("br"),t._v("\n回溯法 #78 #22 #55(4 中解法) #39")]),t._v(" "),a("p",[t._v("矩阵旋转")]),t._v(" "),a("p",[t._v("游标记录位置 #283")]),t._v(" "),a("p",[t._v("位运算 #371")]),t._v(" "),a("p",[t._v("二叉树"),a("br"),t._v("\ndfs：104"),a("br"),t._v("\nbfs：102"),a("br"),t._v("\n前中后序：144 94 145"),a("br"),t._v("\n二叉树对称性验证 101"),a("br"),t._v("\n验证二叉搜索树 98 （中序遍历)"),a("br"),t._v("\n验证 110 (序列变量)"),a("br"),t._v("\n反正二叉树 226")]),t._v(" "),a("p",[t._v("链表"),a("br"),t._v("\n删除链表倒数第 k 个数 19"),a("br"),t._v("\n链表合并 21"),a("br"),t._v("\n链表翻转 206"),a("br"),t._v("\n环形链表 141 快慢指针"),a("br"),t._v("\n链表排序 未做出 148")]),t._v(" "),a("p",[t._v("二分查找 未做")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d0d9d4d6fb9a07ece67d8dd#comment")]),t._v(" "),a("h3",{attrs:{id:"vue-scoped-css-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-scoped-css-module"}},[t._v("#")]),t._v(" vue scoped css module")]),t._v(" "),a("h2",{attrs:{id:"私有-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有-npm"}},[t._v("#")]),t._v(" 私有 npm")]),t._v(" "),a("h2",{attrs:{id:"es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),a("p",[t._v("BigInt")]),t._v(" "),a("h2",{attrs:{id:"flutter-vs-react-native-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-vs-react-native-2"}},[t._v("#")]),t._v(" flutter vs react native")]),t._v(" "),a("h2",{attrs:{id:"jsbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge"}},[t._v("#")]),t._v(" JSBridge")]),t._v(" "),a("ul",[a("li",[t._v("API 注入，原理其实就是 Native 获取 JavaScript 环境上下文，并直接在上面挂载对象或者方法，使 js 可以直接调用，Android 与 IOS 分别拥有对应的挂载方式。安卓：JavaScriptInterface，iOS:postmessage")]),t._v(" "),a("li",[t._v("WebView 中的 prompt/console/alert 拦截，通常使用 prompt，因为这个方法在前端中使用频率低，比较不会出现冲突；")]),t._v(" "),a("li",[t._v("WebView URL Scheme 跳转拦截；")])]),t._v(" "),a("h2",{attrs:{id:"mvc-mvvm-mvp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc-mvvm-mvp"}},[t._v("#")]),t._v(" MVC MVVM MVP")]),t._v(" "),a("h2",{attrs:{id:"js-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-基础"}},[t._v("#")]),t._v(" js 基础")]),t._v(" "),a("h3",{attrs:{id:"如何提升-json-stringify-的性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何提升-json-stringify-的性能"}},[t._v("#")]),t._v(" 如何提升 JSON.stringify()的性能")]),t._v(" "),a("h2",{attrs:{id:"计算机基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机基础"}},[t._v("#")]),t._v(" 计算机基础")]),t._v(" "),a("h3",{attrs:{id:"uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid"}},[t._v("#")]),t._v(" uuid")]),t._v(" "),a("p",[t._v("UUID 是由一组 32 位数的 16 进制数字所构成。通用唯一标识符还可以用来指向大多数的可能的物体。微软和其他一些软件公司都倾向使用全球唯一标识符（GUID），这也是通用唯一标识符的一种类型，可用来指向组建对象模块对象和其他的软件组件")]),t._v(" "),a("h3",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),a("h3",{attrs:{id:"js-ioc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-ioc"}},[t._v("#")]),t._v(" js ioc")]),t._v(" "),a("h2",{attrs:{id:"react-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-相关"}},[t._v("#")]),t._v(" React 相关")]),t._v(" "),a("p",[t._v("hooks 原理")]),t._v(" "),a("p",[t._v("async function 判断"),a("br"),t._v("\nnode 的循环依赖"),a("br"),t._v("\nposition fixed 定位问题")]),t._v(" "),a("h2",{attrs:{id:"正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[t._v("#")]),t._v(" 正则")]),t._v(" "),a("p",[t._v("[^a-za-z]")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5965943ff265da6c30653879")]),t._v(" "),a("p",[t._v("验证身份证")]),t._v(" "),a("h2",{attrs:{id:"面试集锦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试集锦"}},[t._v("#")]),t._v(" 面试集锦")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.imooc.com/article/4379",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何面试前端工程师：Github 很重要"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/5aa7d82c6fb9a028c522de43",target:"_blank",rel:"noopener noreferrer"}},[t._v("几道 JS 代码手写题以及一些代码实现"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/lydiahallie/javascript-questions",target:"_blank",rel:"noopener noreferrer"}},[t._v("javascript-questions"),a("OutboundLink")],1),t._v(" 一些简单的前端问题")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/lidaguang1989/frontent-interview/blob/master/javascript.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试大纲"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d153267e51d4510624f9809",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 220+个知识点（面试题）为你保驾护航"),a("OutboundLink")],1),t._v(" 总结的还行")])])]),t._v(" "),a("h2",{attrs:{id:"其它问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它问题"}},[t._v("#")]),t._v(" 其它问题")]),t._v(" "),a("h3",{attrs:{id:"前端进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端进阶"}},[t._v("#")]),t._v(" 前端进阶")]),t._v(" "),a("h3",{attrs:{id:"职业发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#职业发展"}},[t._v("#")]),t._v(" 职业发展")]),t._v(" "),a("h3",{attrs:{id:"你有什么想问的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你有什么想问的"}},[t._v("#")]),t._v(" 你有什么想问的")]),t._v(" "),a("h2",{attrs:{id:"技术问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术问题"}},[t._v("#")]),t._v(" 技术问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("npm 私有仓库"),a("br"),t._v("\n目前使用的是 Nexus 和安卓管理 maven 的东西放在一起"),a("br"),t._v("\n或者可以使用社区方案： verdaccio")])]),t._v(" "),a("li",[a("p",[t._v("你对微服务的看法"),a("br"),t._v("\nhttps://github.com/CanopyTax/single-spa")])]),t._v(" "),a("li",[a("p",[t._v("gRPC")])])]),t._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("h3",{attrs:{id:"vue-模板为什么只能包含一个根元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-模板为什么只能包含一个根元素"}},[t._v("#")]),t._v(" vue 模板为什么只能包含一个根元素")]),t._v(" "),a("p",[t._v("原因：https://github.com/haizlin/fe-interview/issues/457")]),t._v(" "),a("p",[t._v("解决：vue-fragments 或者 Functional components with render functions")]),t._v(" "),a("h3",{attrs:{id:"style-加-scoped-属性的用途和原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-加-scoped-属性的用途和原理"}},[t._v("#")]),t._v(" style 加 scoped 属性的用途和原理")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5cb8c385e51d456e2e656d3b")]),t._v(" "),a("h3",{attrs:{id:"delete-和-vue-delete-删除数组的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-和-vue-delete-删除数组的区别"}},[t._v("#")]),t._v(" delete 和 Vue.delete 删除数组的区别")]),t._v(" "),a("p",[t._v("delete 只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。"),a("br"),t._v("\nVue.delete 直接删除了数组 改变了数组的键值。")]),t._v(" "),a("h3",{attrs:{id:"面向对象-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象-2"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),a("p",[t._v("面向对象三大特性：封装,继承,多态。")]),t._v(" "),a("h3",{attrs:{id:"preload-vs-prefetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preload-vs-prefetch"}},[t._v("#")]),t._v(" preload vs prefetch")]),t._v(" "),a("p",[t._v("preload 加载资源一般是当前页面需要的，prefetch 一般是其它页面有可能用到的资源")]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("p",[t._v("图片 webP 两倍图 三倍图")]),t._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),a("p",[t._v("todo")]),t._v(" "),a("p",[t._v("https://mp.weixin.qq.com/s?__biz=Mzg5MTA4Mzg5NA==&mid=2247483924&idx=1&sn=111f9018fec802f9ae50649a6c9c9da2&chksm=cfd38f0df8a4061bdeea970a2acb4e22110943aa143dcb6c767633bdec98e93961cbb37031c0&xtrack=1&scene=90&subscene=93&sessionid=1561083883&clicktime=1561")]),t._v(" "),a("p",[t._v("见闻 docker")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d197e4fe51d45775b419c27")]),t._v(" "),a("p",[t._v("https://github.com/amandakelake/blog/issues/55"),a("br"),t._v("\nhttps://github.com/amandakelake/blog/issues/47"),a("br"),t._v("\nhttps://github.com/amandakelake/blog/issues/35"),a("br"),t._v("\nhttps://github.com/amandakelake/blog/issues/64")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/67858932"),a("br"),t._v("\nhttp2 工程化"),a("br"),t._v("\nhttps://hit-alibaba.github.io/interview/basic/")]),t._v(" "),a("p",[t._v("https://ppt.geekbang.org/list/gmtcbj2019")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d0878aaf265da1b83338f74")]),t._v(" "),a("p",[t._v("https://www.infoq.cn/article/Xxyy8WZrWLwUlIF0*IxR")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5958bac35188250d892f5c91")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5958bac35188250d892f5c91")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5b65a7fdf265da0fa00a3999")]),t._v(" "),a("p",[t._v("https://github.com/LeuisKen/leuisken.github.io/issues/2")]),t._v(" "),a("p",[t._v("https://hit-alibaba.github.io/interview/basic/network/HTTPS.html")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/33843378")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5b5dcfb46fb9a04f8f37afbb"),a("br"),t._v("\nhttps://juejin.im/post/5d136700f265da1b7c6128db"),a("br"),t._v("\nhttps://relign.github.io/Animation/animation-optimize/"),a("br"),t._v("\nhttps://juejin.im/post/5d138889e51d4510a37bac2d"),a("br"),t._v("\nhttps://juejin.im/post/5d141c166fb9a07f0870a6b8")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d18b089f265da1b8b2b7470"),a("br"),t._v("\nhttps://juejin.im/post/5d187b81e51d4550a629b2c5")]),t._v(" "),a("p",[t._v("https://mp.weixin.qq.com/s/CvrbpDE55upLgjjujI7KMA")]),t._v(" "),a("p",[t._v("https://www.infoq.cn/article/NAau0-Z7U1B2rKEZcWc8")]),t._v(" "),a("p",[t._v("https://www.infoq.cn/article/bLJfJg5_Eq2yOlW5VBaP")]),t._v(" "),a("p",[t._v("https://coolshell.cn/articles/19464.html")]),t._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),a("p",[t._v("尾递归"),a("br"),t._v("\npromise"),a("br"),t._v("\nproxy"),a("br"),t._v("\nJS 继承"),a("br"),t._v("\n性能优化总结"),a("br"),t._v("\n浏览器渲染原理及流程"),a("br"),t._v("\n微前端"),a("br"),t._v("\n回流和重绘"),a("br"),t._v("\nsso oauth"),a("br"),t._v("\nReact 的 Dom 的 diff 算")]),t._v(" "),a("p",[t._v("web worker"),a("br"),t._v("\njwt")]),t._v(" "),a("p",[t._v("webpack 热更新"),a("br"),t._v("\nhttps://github.com/sorrycc/blog/issues/80")]),t._v(" "),a("p",[t._v("工程化"),a("br"),t._v("\nhttps://www.yuque.com/robinson/fe-pro")]),t._v(" "),a("p",[t._v("vue 依赖收集")]),t._v(" "),a("p",[t._v("redis https://zhuanlan.zhihu.com/p/48080173")]),t._v(" "),a("h3",{attrs:{id:"监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控"}},[t._v("#")]),t._v(" 监控")]),t._v(" "),a("p",[t._v("Prometheus+grafana+zabbix+influxdb+Zipkin")]),t._v(" "),a("ul",[a("li",[t._v("错误监控")])]),t._v(" "),a("ol",[a("li",[t._v("框架层面的 errorHandler")]),t._v(" "),a("li",[t._v("addEventListener error 捕获资源加载错误")]),t._v(" "),a("li",[t._v("api 请求错误")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/31979395",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端代码异常监控实战"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("监控可复现")]),t._v(" "),a("ul",[a("li",[t._v("信息上报"),a("br"),t._v("\n当前的网络状态"),a("br"),t._v("\n运营商"),a("br"),t._v("\n地理位置"),a("br"),t._v("\n访问时间"),a("br"),t._v("\n客户端的版本(如果是通过客户端访问)"),a("br"),t._v("\n系统版本"),a("br"),t._v("\n浏览器信息"),a("br"),t._v("\n设备分辨率"),a("br"),t._v("\n页面的来源"),a("br"),t._v("\n用户的账号信息"),a("br"),t._v("\n通过 performance API 收集用户各个页面访问流程所消耗的时间，看错误出现在什么环节"),a("br"),t._v("\n收集用户 js 代码报错的信息")])]),t._v(" "),a("h3",{attrs:{id:"polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfill"}},[t._v("#")]),t._v(" polyfill")]),t._v(" "),a("p",[t._v("babel/preset-env 是更好的选择，可以指定版本"),a("br"),t._v("\nuseBuiltIns: 'usage'/'entry'")]),t._v(" "),a("p",[t._v("polyfill-service")]),t._v(" "),a("p",[t._v("关于补丁方案的未来，我觉得按需特性探测 + 在线补丁才是终极方案。")]),t._v(" "),a("p",[t._v("按需特性探测保证特性的最小集；在线补丁做按需下载")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sorrycc/blog/issues/80",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polyfill 方案的过去、现在和未来"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29058936",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel polyfill 知多少"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),a("p",[t._v("Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。.")]),t._v(" "),a("h3",{attrs:{id:"反爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反爬虫"}},[t._v("#")]),t._v(" 反爬虫")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imweb.io/topic/595b7161d6ca6b4f0ac71f05",target:"_blank",rel:"noopener noreferrer"}},[t._v("反击爬虫，前端工程师的脑洞可以有多大？"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"service-workers-vs-web-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-workers-vs-web-workers"}},[t._v("#")]),t._v(" Service Workers vs Web Workers")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/wopelo/article/details/78607879"),a("br"),t._v("\nhttps://juejin.im/entry/5c50f22ef265da616b1115a3")]),t._v(" "),a("h3",{attrs:{id:"工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[t._v("#")]),t._v(" 工程化")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5cea1f705188250640005472",target:"_blank",rel:"noopener noreferrer"}},[t._v("大型项目前端架构浅谈（8000 字原创）"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"ci-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-docker"}},[t._v("#")]),t._v(" CI Docker")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d197e4fe51d45775b419c27",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于 GitLab CI/CD 的前端自动化构建、发布实践"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("docker 最大的好处的是快速回滚。")]),t._v(" "),a("h3",{attrs:{id:"拓展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Daily-Interview-Question"),a("OutboundLink")],1),t._v(" 10 分推荐")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 深入系列"),a("OutboundLink")],1),t._v(" 10 分推荐")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/RayJune/Elegant-JavaScript-Sorting-Algorithms",target:"_blank",rel:"noopener noreferrer"}},[t._v("优雅的 JavaScript 排序算法（ES6）"),a("OutboundLink")],1),t._v(" 10 分推荐 学习基本的几种排序手段")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c9c3989e51d454e3a3902b6",target:"_blank",rel:"noopener noreferrer"}},[t._v("「中高级前端面试」JavaScript 手写代码无敌秘籍"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 简介"),a("OutboundLink")],1),t._v(" 学习 ES6 只推荐阮老师的教程")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012925872#articleHeader13",target:"_blank",rel:"noopener noreferrer"}},[t._v("从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5d2ee123e51d4577614761f8",target:"_blank",rel:"noopener noreferrer"}},[t._v("20 道 JS 原理题助你面试一臂之力！"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5d387f696fb9a07eeb13ea60",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个合格(优秀)的前端都应该阅读这些文章"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5befeb5051882511a8527dbe",target:"_blank",rel:"noopener noreferrer"}},[t._v("一年半经验，百度、有赞、阿里前端面试总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://blog.poetries.top/FE-Interview-Questions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试题整理"),a("OutboundLink")],1),t._v(" 整理的还算全")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c64d15d6fb9a049d37f9c20",target:"_blank",rel:"noopener noreferrer"}},[t._v("中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);