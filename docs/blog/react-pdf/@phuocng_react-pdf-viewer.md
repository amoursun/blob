## @phuocng/react-pdf-viewer

> 2021.10.12

React-pdf-viewer是一个完全由React钩子驱动的React组件，用TypeScript编写。

尽管是新的，React-pdf-viewer功能如下：

   - 支持受密码保护的文件。
   - 缩放：支持自定义级别，如实际尺寸、页面合适和页面宽度。
   - 页面之间的导航。
   - 搜索文本。
   - 预览页面缩略图。
   - 查看和浏览目录。
   - 列出和下载附件。
   - 旋转和许多滚动模式。文本选择和手动工具模式。
   - 全屏模式。
   - 可以打开本地文件(例如，拖放一个本地文件来查看它。
   - 下载文件和打印。
   - 查看文件属性。
   - 支持SSR。

另外，它的插件集合是完全可定制的，并以优秀的文档帮助用户。

##### 注意：你需要有React 16.8以上版本和TypeScript 3.8以上版本才能使用React-pdf-viewer

### 例子
```
    // Core viewer 
    import { Viewer } from '@react-pdf-viewer/core'; 
     
    // Plugins 
    import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
     
    // Import styles 
    import '@react-pdf-viewer/core/lib/styles/index.css'; 
    import '@react-pdf-viewer/default-layout/lib/styles/index.css'; 
     
    // Create new plugin instance 
    const defaultLayoutPluginInstance = defaultLayoutPlugin(); 
     
    <Viewer 
        fileUrl='/my Documents/sample_doc.pdf' 
        plugins={[ 
            // Register plugins 
            defaultLayoutPluginInstance, 
            ... 
        ]} 
    /> 
```