## @mikecousins/react-pdf

@mikecousins/react-pdf是一个使用PDF.js来渲染PDF文档的组件。

这个库使用一个叫做usePdf的Hook来渲染PDF，我们需要用这个Hook传递几个props:

   - file:PDF文件的URL。
   - Page: 表示你要显示的页面。默认=1。
   - scal：允许你对PDF进行缩放。默认=1。
   - onDocumentLoadSuccess：你可以定义一个回调函数，在PDF文档数据被完全加载后被调用。
   - onDocumentLoadFail：让你定义一个回调函数，当发生PDF文档数据加载错误时被调用。
   - onPageLoadSuccess：让你定义一个回调，它将在PDF页面数据加载完毕后被调用。
   - onPageRenderSuccess：让你定义一个回调，在PDF页面被完全渲染到DOM后执行。
   
   
### 例子
```
    import React, { useState } from 'react'; 
    import Pdf from '@mikecousins/react-pdf'; 
      
    const MyPdfViewer = () => { 
      const [page, setPage] = useState(1); 
      
      return <Pdf file="sampledoc.pdf" page={page} />; 
    }; 
```