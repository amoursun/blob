(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{516:function(s,t,n){"use strict";n.r(t);var a=n(30),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"console-log-的坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#console-log-的坑"}},[s._v("#")]),s._v(" console.log 的坑")]),s._v(" "),n("blockquote",[n("p",[s._v("2018-09-18")])]),s._v(" "),n("p",[s._v("console.log 应该是大部分程序员每天都没使用的函数，有时候觉得打断点太麻烦。但其实也是有一些小坑的。我们直接来举一个例子来看：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\na"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {test:1}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {test:1}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("大部分人会认为第一个输出的应该是一个空对象，是 a 对象的一个快照，但结果并不是这样的。\n两次输出都是"),n("code",[s._v("{test:1}")]),s._v("。")]),s._v(" "),n("p",[s._v("同理数组")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [1]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [1]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("这就很明显了，在"),n("code",[s._v("console.log")]),s._v("一些复杂数据类型的时候，浏览器只是保存了一个引用而已，并不是打印执行时的结果。所以当你在控制台查看的时候是这个值经过了多次操作后，当前最终结果。所以打印复杂类型值的时候要注意一下，打印出来的值是不一定准确的。")]),s._v(" "),n("p",[s._v("但部分情况是问题不大的，当真遇到时就很蛋疼了，最简单的方法序列化一下"),n("code",[s._v("console.log(JSON.parse(JSON.stringify(obj)))")]),s._v("。其实就是深拷贝一下。")])])}),[],!1,null,null,null);t.default=e.exports}}]);