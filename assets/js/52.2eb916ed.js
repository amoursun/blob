(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{545:function(e,s,a){"use strict";a.r(s);var n=a(30),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-pdf-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-pdf-库"}},[e._v("#")]),e._v(" React PDF 库")]),e._v(" "),a("p",[e._v("主要介绍下面5个库：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("- react-pdf/renderer\n- react-pdf\n- @phuocng/react-pdf-viewer\n- react-file-viewer\n- @mikecousins/react-pdf\n")])])]),e._v(" "),a("h2",{attrs:{id:"react-pdf-renderer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-pdf-renderer"}},[e._v("#")]),e._v(" React-pdf/renderer")]),e._v(" "),a("p",[e._v("专门用于渲染和创建PDF。")]),e._v(" "),a("p",[e._v("React-pdf/renderer是一个广泛使用的库，用于在浏览器和服务器上创建PDF文件。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@react-pdf/renderer",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),a("OutboundLink")],1),e._v("：https://www.npmjs.com/package/@react-pdf/renderer")]),e._v(" "),a("h3",{attrs:{id:"设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[e._v("#")]),e._v(" 设计")]),e._v(" "),a("ul",[a("li",[e._v("Document: 这是match一个PDF文件的根。")]),e._v(" "),a("li",[e._v("Page: 单页是由这个标签描述的。它需要有一定的尺寸(如A4)。")]),e._v(" "),a("li",[e._v("View: 一个通用的容器，用于样式和格式化PDF。你可以使用StyleSheet.create() API，用Flexbox和CSS属性的全部功能来设计你的视图，以布局PDF，类似于它在React Native中的使用方式。")]),e._v(" "),a("li",[e._v("Text: 用于显示文本。")]),e._v(" "),a("li",[e._v("Image: 可用于在PDF文档中插入图片。")]),e._v(" "),a("li",[e._v("Link: 可用于生成超链接注释。")])]),e._v(" "),a("h3",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[e._v("#")]),e._v(" 功能")]),e._v(" "),a("ul",[a("li",[e._v("支持各种样式和CSS属性。")]),e._v(" "),a("li",[e._v("通过usePDF hook API对文档进行更多控制。")]),e._v(" "),a("li",[e._v("提供一个Node API。")]),e._v(" "),a("li",[e._v("快速和高效。")]),e._v(" "),a("li",[e._v("高度可定制&易于使用。/.bin/mocha")])]),e._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    import React from 'react'; \n    import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'; \n     \n    // Create styles \n    const styles = StyleSheet.create({ \n      page: { \n        flexDirection: 'row', \n        backgroundColor: '#C0C0C0' \n      }, \n      section: { \n        margin: 10, \n        padding: 10, \n        flexGrow: 1 \n      } \n    }); \n     \n    // Create Pdf Component \n    const MyPdf = () => ( \n      <Document> \n        <Page size=\"A4\" style={styles.page}> \n          <View style={styles.section}> \n            <Text>Heading #1</Text> \n          </View> \n          <View style={styles.section}> \n            <Text>Heading #2</Text> \n          </View> \n        </Page> \n      </Document> \n    ); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br")])]),a("h2",{attrs:{id:"react-pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-pdf"}},[e._v("#")]),e._v(" react-pdf")]),e._v(" "),a("blockquote",[a("p",[e._v("2021.10.12")])]),e._v(" "),a("p",[e._v("像显示图片一样显示PDF。React-pdf/renderer是专门用于创建PDF的。React-pdf是一个只显示PDF的库。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/react-pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),a("OutboundLink")],1),e._v("：https://www.npmjs.com/package/react-pdf")]),e._v(" "),a("p",[e._v("React-pdf提供了一个React组件API，允许打开PDF文件并使用PDF.js渲染。虽然这是一个专门用于查看PDF的简单库，但它有一些惊人的功能")]),e._v(" "),a("ul",[a("li",[e._v("易于使用 - 插入Document组件并给它一个文件道具。React-pdf会把它整理出来，不管它是一个URL，一个文件，还是base64。")]),e._v(" "),a("li",[e._v("支持自定义事件。")]),e._v(" "),a("li",[e._v("多种渲染方法。")]),e._v(" "),a("li",[e._v("支持文本选择和注释。")]),e._v(" "),a("li",[e._v("跨浏览器兼容性。")]),e._v(" "),a("li",[e._v("可访问性 - React-pdf不仅将PDF渲染成图像。还可以作为屏幕阅读器可以掌握的可见文本层，使你的内容对视力障碍者来说更可用。")]),e._v(" "),a("li",[e._v("免费和开源。")])]),e._v(" "),a("h3",{attrs:{id:"例子-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-2"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    import React, { useState } from 'react'; \n    import { Document, Page } from 'react-pdf'; \n     \n    function MyPdf() { \n      const [numPages, setNumPages] = useState(null); \n      const [pageNumber, setPageNumber] = useState(1); \n     \n      function onDocumentLoadSuccess({ numPages }) { \n        setNumPages(numPages); \n      } \n     \n      return ( \n        <div> \n          <Document \n            file=\"myfile.pdf\" \n            onLoadSuccess={onDocumentLoadSuccess} \n          > \n            <Page pageNumber={pageNumber} /> \n          </Document> \n          <p>Page {pageNumber} of {numPages}</p> \n        </div> \n      ); \n    } \n    export default MyPdf; \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])]),a("h2",{attrs:{id:"phuocng-react-pdf-viewer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phuocng-react-pdf-viewer"}},[e._v("#")]),e._v(" @phuocng/react-pdf-viewer")]),e._v(" "),a("blockquote",[a("p",[e._v("2021.10.12")])]),e._v(" "),a("p",[e._v("React-pdf-viewer是一个完全由React钩子驱动的React组件，用TypeScript编写。")]),e._v(" "),a("p",[e._v("尽管是新的，React-pdf-viewer功能如下：")]),e._v(" "),a("ul",[a("li",[e._v("支持受密码保护的文件。")]),e._v(" "),a("li",[e._v("缩放：支持自定义级别，如实际尺寸、页面合适和页面宽度。")]),e._v(" "),a("li",[e._v("页面之间的导航。")]),e._v(" "),a("li",[e._v("搜索文本。")]),e._v(" "),a("li",[e._v("预览页面缩略图。")]),e._v(" "),a("li",[e._v("查看和浏览目录。")]),e._v(" "),a("li",[e._v("列出和下载附件。")]),e._v(" "),a("li",[e._v("旋转和许多滚动模式。文本选择和手动工具模式。")]),e._v(" "),a("li",[e._v("全屏模式。")]),e._v(" "),a("li",[e._v("可以打开本地文件(例如，拖放一个本地文件来查看它。")]),e._v(" "),a("li",[e._v("下载文件和打印。")]),e._v(" "),a("li",[e._v("查看文件属性。")]),e._v(" "),a("li",[e._v("支持SSR。")])]),e._v(" "),a("p",[e._v("另外，它的插件集合是完全可定制的，并以优秀的文档帮助用户。")]),e._v(" "),a("h5",{attrs:{id:"注意-你需要有react-16-8以上版本和typescript-3-8以上版本才能使用react-pdf-viewer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-你需要有react-16-8以上版本和typescript-3-8以上版本才能使用react-pdf-viewer"}},[e._v("#")]),e._v(" 注意：你需要有React 16.8以上版本和TypeScript 3.8以上版本才能使用React-pdf-viewer")]),e._v(" "),a("h3",{attrs:{id:"例子-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-3"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    // Core viewer \n    import { Viewer } from '@react-pdf-viewer/core'; \n     \n    // Plugins \n    import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; \n     \n    // Import styles \n    import '@react-pdf-viewer/core/lib/styles/index.css'; \n    import '@react-pdf-viewer/default-layout/lib/styles/index.css'; \n     \n    // Create new plugin instance \n    const defaultLayoutPluginInstance = defaultLayoutPlugin(); \n     \n    <Viewer \n        fileUrl='/my Documents/sample_doc.pdf' \n        plugins={[ \n            // Register plugins \n            defaultLayoutPluginInstance, \n            ... \n        ]} \n    /> \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("h2",{attrs:{id:"react-file-viewer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-file-viewer"}},[e._v("#")]),e._v(" react-file-viewer")]),e._v(" "),a("p",[e._v("React-file-viewer是一个可扩展的文件查看器，用于Web应用程序，支持PDF、图片、csv、xslx和docx。")]),e._v(" "),a("p",[e._v("这个库提供了一个名为FileViewer的组件，用来显示内容，它接受几个props:")]),e._v(" "),a("ul",[a("li",[e._v("fileType String: 要显示的资源类型。如果你使用一个不支持的文件类型，将出现一个不支持的文件类型通知。")]),e._v(" "),a("li",[e._v("filePath String: FileViewer将显示的资源的URL。")]),e._v(" "),a("li",[e._v("onError Function [optional]:如果文件查看器无法获取或呈现所请求的资源，该函数将被调用。在这里你可以指定一个日志工具的回调。")]),e._v(" "),a("li",[e._v("errorComponent react element [optional]: 一个在发生错误时渲染的组件，而不是 react-file-viewer 默认的错误组件。")]),e._v(" "),a("li",[e._v("unsupported Component react element [Optional]:在文件格式不被支持的情况下要呈现的组件。")])]),e._v(" "),a("p",[e._v("除此以外，它还有一些特殊的功能，比如:")]),e._v(" "),a("ul",[a("li",[e._v("用Jest或Enzyme进行测试。")]),e._v(" "),a("li",[e._v("通过使用make lint运行linter，在我们运行代码之前发现错误，从而节省时间。")]),e._v(" "),a("li",[e._v("可扩展性--添加支持的文件类型很容易。")])]),e._v(" "),a("h5",{attrs:{id:"注意-这个库在react-16以上版本中功能良好。如果你使用react-16版本-你很可能需要安装react-file-viewer-0-5版本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-这个库在react-16以上版本中功能良好。如果你使用react-16版本-你很可能需要安装react-file-viewer-0-5版本。"}},[e._v("#")]),e._v(" 注意：这个库在React 16以上版本中功能良好。如果你使用React< 16版本，你很可能需要安装React-file-viewer 0.5版本。")]),e._v(" "),a("h3",{attrs:{id:"例子-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-4"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    // MyApp.js \n    import React, { Component } from 'react'; \n    import logger from 'logging-library'; \n    import FileViewer from 'react-file-viewer'; \n    import { CustomErrorComponent } from 'custom-error'; \n     \n    const file = 'http://mysite.com/sampledoc.pdf' \n    const type = 'pdf' \n     \n    class MyDocComponent extends Component { \n      render() { \n        return ( \n          <FileViewer \n            fileType={type} \n            filePath={file} \n            errorComponent={CustomErrorComponent} \n            onError={this.onError}/> \n        ); \n      } \n     \n      onError(e) { \n        logger.logError(e, 'error in file-viewer'); \n      } \n    } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])]),a("h2",{attrs:{id:"mikecousins-react-pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mikecousins-react-pdf"}},[e._v("#")]),e._v(" @mikecousins/react-pdf")]),e._v(" "),a("p",[e._v("@mikecousins/react-pdf是一个使用PDF.js来渲染PDF文档的组件。")]),e._v(" "),a("p",[e._v("这个库使用一个叫做usePdf的Hook来渲染PDF，我们需要用这个Hook传递几个props:")]),e._v(" "),a("ul",[a("li",[e._v("file:PDF文件的URL。")]),e._v(" "),a("li",[e._v("Page: 表示你要显示的页面。默认=1。")]),e._v(" "),a("li",[e._v("scal：允许你对PDF进行缩放。默认=1。")]),e._v(" "),a("li",[e._v("onDocumentLoadSuccess：你可以定义一个回调函数，在PDF文档数据被完全加载后被调用。")]),e._v(" "),a("li",[e._v("onDocumentLoadFail：让你定义一个回调函数，当发生PDF文档数据加载错误时被调用。")]),e._v(" "),a("li",[e._v("onPageLoadSuccess：让你定义一个回调，它将在PDF页面数据加载完毕后被调用。")]),e._v(" "),a("li",[e._v("onPageRenderSuccess：让你定义一个回调，在PDF页面被完全渲染到DOM后执行。")])]),e._v(" "),a("h3",{attrs:{id:"例子-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-5"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    import React, { useState } from 'react'; \n    import Pdf from '@mikecousins/react-pdf'; \n      \n    const MyPdfViewer = () => { \n      const [page, setPage] = useState(1); \n      \n      return <Pdf file=\"sampledoc.pdf\" page={page} />; \n    }; \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),e._v(" "),a("h4",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmtrends.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载量 Source "),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmtrends.com/@mikecousins/react-pdf-vs-@phuocng/react-pdf-viewer-vs-react-file-viewer-vs-react-pdf-vs-@react-pdf/renderer",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF 下载量 Source 图"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("对比功能、流行度、安全问题和社区支持后，React-pdf相对更好;"),a("br"),e._v("\n考虑到发布版本的模式、软件库活动和其他相关数据，React-pdf的维护状况远远领先于其他所有库。")])])}),[],!1,null,null,null);s.default=t.exports}}]);