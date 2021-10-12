## react-pdf

> 2021.10.12

像显示图片一样显示PDF。React-pdf/renderer是专门用于创建PDF的。React-pdf是一个只显示PDF的库。

[地址](https://www.npmjs.com/package/react-pdf)：https://www.npmjs.com/package/react-pdf

React-pdf提供了一个React组件API，允许打开PDF文件并使用PDF.js渲染。虽然这是一个专门用于查看PDF的简单库，但它有一些惊人的功能

   - 易于使用 - 插入Document组件并给它一个文件道具。React-pdf会把它整理出来，不管它是一个URL，一个文件，还是base64。
   - 支持自定义事件。
   - 多种渲染方法。
   - 支持文本选择和注释。
   - 跨浏览器兼容性。
   - 可访问性 - React-pdf不仅将PDF渲染成图像。还可以作为屏幕阅读器可以掌握的可见文本层，使你的内容对视力障碍者来说更可用。
   - 免费和开源。
### 例子
```
    import React, { useState } from 'react'; 
    import { Document, Page } from 'react-pdf'; 
     
    function MyPdf() { 
      const [numPages, setNumPages] = useState(null); 
      const [pageNumber, setPageNumber] = useState(1); 
     
      function onDocumentLoadSuccess({ numPages }) { 
        setNumPages(numPages); 
      } 
     
      return ( 
        <div> 
          <Document 
            file="myfile.pdf" 
            onLoadSuccess={onDocumentLoadSuccess} 
          > 
            <Page pageNumber={pageNumber} /> 
          </Document> 
          <p>Page {pageNumber} of {numPages}</p> 
        </div> 
      ); 
    } 
    export default MyPdf; 
```