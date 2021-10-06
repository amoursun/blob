(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{501:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vue-前后端分离的正确方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-前后端分离的正确方式"}},[s._v("#")]),s._v(" Vue 前后端分离的正确方式")]),s._v(" "),e("p",[s._v("在之前我一直在想 Vue 的前后端分离怎么那么麻烦，让人头大。后来才发现原来我是个小丑，实际上特别简单。本文只是用来记录方法，没有科普的意思，可能此刻的"),e("em",[s._v("你")]),s._v("已经知道了这一切。本文中的"),e("strong",[s._v("前后端分离")]),s._v("指的是以 Vue 等框架作为前端技术栈，与后端形成分离，通过 XHR 进行交流的粗略概念，并没有深究的必要。")]),s._v(" "),e("h2",{attrs:{id:"先前的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先前的方式"}},[s._v("#")]),s._v(" 先前的方式")]),s._v(" "),e("p",[s._v("一般情况下，后端会位于一个单独的目录里面，里面就是各种各样的 "),e("code",[s._v(".php")]),s._v("、"),e("code",[s._v(".py")]),s._v(" 等等。要开始使用，就要想办法让前端能够 post 到他们。然而对于 Vue 来说，打开的 dev server 是仅限于 Vue 的，所有的请求都会给 Vue 自己；而对于后端来说，比如 PHP 的 "),e("code",[s._v("php -S")]),s._v("、Python 的 "),e("code",[s._v("python -m")]),s._v(" 或者 flask 的 "),e("code",[s._v("python ./App.py")]),s._v(" 等，也都只是开的自己的 dev server，这就让开发过程很难访问到后端。每一个 dev server 会占用一个独立的端口，这就让它们彻底独立了。")]),s._v(" "),e("p",[s._v("然后，这种确实是从一开始就有解决方式的，那就是借助前端一个叫做代理（这里的代理不是前文的 Proxy）的东西。比如 Vue 里面就是在 "),e("code",[s._v("vue.config.js")]),s._v(" 里")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    proxy"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8081"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("设置好了以后，按照官方文档的说法，会把一切无法识别的请求（也就是那些跟前端没有关系的请求）代理到这个地址，而这个地址就可以直接指向后端服务器的地址，比如 "),e("code",[s._v("http://127.0.0.1:5000")]),s._v(" 等。不过这个地方曾经让我无语过很多次，因为实际上你写成 "),e("code",[s._v("http://localhost:XXXX")]),s._v("、"),e("code",[s._v("http://localhost:XXXX/")]),s._v("、"),e("code",[s._v("http://127.0.0.1:XXXX")]),s._v("、"),e("code",[s._v("http://127.0.0.1:XXXX/")]),s._v(" 的结果，有的时候是不一样的，还会导致一些类似于 "),e("code",[s._v("ECONNREFUSED")]),s._v(" 或者无法代理等迷惑问题。PHP 也是，当执行 "),e("code",[s._v("php -S")]),s._v(" 时，后面如果跟的是 "),e("code",[s._v(".")]),s._v("（当前目录）也会引起一些莫名其妙的错误，对于 PHP 来说，"),e("code",[s._v("localhost")]),s._v(" 和 "),e("code",[s._v("127.0.0.1")]),s._v(" 的效果也并不完全相同。这实在是太坑了，可我也没有时间去了解原理，麻烦懂的大佬给我发个邮件讲讲！")]),s._v(" "),e("p",[s._v("OK，这是开发阶段，我们解决了，使用起来没有任何问题。然而遇到生产环境就怂了。那么接下来就是一种很 low 的解决方式——子域名。")]),s._v(" "),e("p",[s._v("很多时候我觉得没必要这么大费周章开个子域名出来挂给后端，然而我又"),e("a",{attrs:{href:"https://api.sotap.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("这样做了"),e("OutboundLink")],1),s._v("，想想都后悔。因为这样首先会再费一张 SSL 证书，其次还会多一个配置文件，然后让整个主机配置都变得臃肿（虽然实际上没有这么严重但让我很不爽）。在解决了司马 CORS 以后就能正常使用了，而这跟直接去 post 另一个"),e("em",[s._v("属于你自己的")]),s._v("网站无异。")]),s._v(" "),e("h2",{attrs:{id:"现在的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现在的方式"}},[s._v("#")]),s._v(" 现在的方式")]),s._v(" "),e("p",[s._v("现在我终于知道 "),e("code",[s._v(".htaccess")]),s._v(" 能够把我的请求从 Vue 手中解离出来。因为实际上，用子域名就是为了彻底逃脱当前网站里 Vue 对请求的劫持，因为只要开了一个新的站点，那么它就是个全新的根目录，里面的环境也都是全新的了。")]),s._v(" "),e("p",[s._v("那么该如何解离呢，请看")]),s._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mod_rewrite.c")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  RewriteEngine On\n  RewriteBase /\n  RewriteCond %{REQUEST_URI} !/api/\n  RewriteRule ^index\\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /index.html [L]\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("哦，原来可以直接在 "),e("code",[s._v(".htaccess")]),s._v(" 里面指定一个 "),e("code",[s._v("RewriteCond")]),s._v(" 来限制它的重写操作。而且实际上，Vue 对链接的劫持是由 Apache 或 Nginx 帮助完成的，我怎么这么久都没想到呢（啪）！那么在这个地方我们加上的一行 "),e("code",[s._v("RewriteCond %{REQUEST_URI} !/api/")]),s._v(" 意思是不让对 "),e("code",[s._v("/api")]),s._v(" 目录的请求进行重写。那么这个时候对我们来说唯一的要求就是要让所有的后端请求都发往这个地址。当然处理方法不止这一种，而这一种是最简洁的。其实也有想过把 "),e("code",[s._v("*.php")]),s._v(" 取消重写，但是不知道怎么写，这里的正则都太迷惑了，动不动就是个 500。")]),s._v(" "),e("p",[s._v("接下来就只需要把所有的后端文件都装在这个文件夹里，然后在 "),e("code",[s._v("build")]),s._v(" 的时候一起放到 "),e("code",[s._v("dist")]),s._v(" 里面（因为 "),e("code",[s._v("dist")]),s._v(" 是网站根目录，"),e("code",[s._v(".htaccess")]),s._v(" 也在里面）就完了。而这也很简单，在 "),e("code",[s._v("package.json")]),s._v(" 里面加上这样一句就可。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"... && cp -r /path/to/api dist"')]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);