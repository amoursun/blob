(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{590:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"为什么前端监控要用-gif-打点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么前端监控要用-gif-打点"}},[s._v("#")]),s._v(" 为什么前端监控要用 GIF 打点")]),s._v(" "),a("blockquote",[a("p",[s._v("2018-12-25")])]),s._v(" "),a("p",[s._v("目前主流的前端监控数据上报都是采用 GIF 的上报方式，(百度统计/友盟/谷歌统计）都是这样实现的。但为什么一定要使用 GIF 呢？不能发 post 请求或者通过 script 标签的形式么？")]),s._v(" "),a("p",[s._v("当然你也可以使用一些黑科技的方式上报，用纯 css 来实现。但这种方案并没有什么特别的好处。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".track-xx:active:after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("track.php?xxxx=foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"主要原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要原因"}},[s._v("#")]),s._v(" 主要原因")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("没有跨域问题")])]),s._v(" "),a("li",[a("p",[s._v("不会阻塞页面加载，影响用户体验")])]),s._v(" "),a("li",[a("p",[s._v("在所有图片中体积最小，相较 BMP/PNG，可以节约 41%/35%的网络资源")])])]),s._v(" "),a("p",[s._v("详情见 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw",target:"_blank",rel:"noopener noreferrer"}},[s._v("为什么前端监控要用 GIF 打点"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),a("p",[s._v("但建议不要按如下方法使用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://foo.com/bar.gif?t=xxxx&b=1'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这段代码的问题是这个 new Image()是一个没有引用的临时变量，随时可能被浏览器的垃圾回收机制回收。如果这个图片的 HTTP 请求尚未建立，那么在被回收时这个请求就会被取消，导致打点并没有真正发出。如果打点所在的页面比较复杂，浏览器垃圾回收机制可能会被频繁触发，那么这种方式打点的丢失率可能会高达 10%以上。")]),s._v(" "),a("p",[s._v("解决方法很简单，将这个图片赋值给一个全局变量即可，例如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加一个时间戳，防止图片被浏览器缓存了，不再发送请求")]),s._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img\n\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onabort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// img标签加载完成、错误或终止时，解除事件绑定，销毁相关对象")]),s._v("\n  img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onabort "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("?t=key")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"其它方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它方案"}},[s._v("#")]),s._v(" 其它方案")]),s._v(" "),a("p",[a("code",[s._v("Beacon API")])]),s._v(" "),a("ul",[a("li",[s._v("在空闲的时候异步发送统计，不影响页面诸如 JS、CSS Animation 等执行")]),s._v(" "),a("li",[s._v("即使页面在 unload 状态下，也会异步发送统计，不影响页面过渡/跳转到下跳页")]),s._v(" "),a("li",[s._v("能够被客户端优化发送，尤其在 Mobile 环境下，可以将 Beacon 请求合并到其他请求上，一同处理")])]),s._v(" "),a("p",[a("code",[s._v('navigator.sendBeacon("/log", analyticsData);')])])])}),[],!1,null,null,null);t.default=e.exports}}]);