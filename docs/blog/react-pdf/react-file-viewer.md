## react-file-viewer

React-file-viewer是一个可扩展的文件查看器，用于Web应用程序，支持PDF、图片、csv、xslx和docx。

这个库提供了一个名为FileViewer的组件，用来显示内容，它接受几个props:

   - fileType String: 要显示的资源类型。如果你使用一个不支持的文件类型，将出现一个不支持的文件类型通知。
   - filePath String: FileViewer将显示的资源的URL。
   - onError Function [optional]:如果文件查看器无法获取或呈现所请求的资源，该函数将被调用。在这里你可以指定一个日志工具的回调。
   - errorComponent react element [optional]: 一个在发生错误时渲染的组件，而不是 react-file-viewer 默认的错误组件。
   - unsupported Component react element [Optional]:在文件格式不被支持的情况下要呈现的组件。

除此以外，它还有一些特殊的功能，比如:

   - 用Jest或Enzyme进行测试。
   - 通过使用make lint运行linter，在我们运行代码之前发现错误，从而节省时间。
   - 可扩展性--添加支持的文件类型很容易。

##### 注意：这个库在React 16以上版本中功能良好。如果你使用React< 16版本，你很可能需要安装React-file-viewer 0.5版本。

### 例子
```
    // MyApp.js 
    import React, { Component } from 'react'; 
    import logger from 'logging-library'; 
    import FileViewer from 'react-file-viewer'; 
    import { CustomErrorComponent } from 'custom-error'; 
     
    const file = 'http://mysite.com/sampledoc.pdf' 
    const type = 'pdf' 
     
    class MyDocComponent extends Component { 
      render() { 
        return ( 
          <FileViewer 
            fileType={type} 
            filePath={file} 
            errorComponent={CustomErrorComponent} 
            onError={this.onError}/> 
        ); 
      } 
     
      onError(e) { 
        logger.logError(e, 'error in file-viewer'); 
      } 
    } 
```
