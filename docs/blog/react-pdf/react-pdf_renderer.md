## React-pdf/renderer

专门用于渲染和创建PDF。

React-pdf/renderer是一个广泛使用的库，用于在浏览器和服务器上创建PDF文件。

[地址](https://www.npmjs.com/package/@react-pdf/renderer)：https://www.npmjs.com/package/@react-pdf/renderer

### 设计

   - Document: 这是match一个PDF文件的根。
   - Page: 单页是由这个标签描述的。它需要有一定的尺寸(如A4)。
   - View: 一个通用的容器，用于样式和格式化PDF。你可以使用StyleSheet.create() API，用Flexbox和CSS属性的全部功能来设计你的视图，以布局PDF，类似于它在React Native中的使用方式。
   - Text: 用于显示文本。
   - Image: 可用于在PDF文档中插入图片。
   - Link: 可用于生成超链接注释。

### 功能

   - 支持各种样式和CSS属性。
   - 通过usePDF hook API对文档进行更多控制。
   - 提供一个Node API。
   - 快速和高效。
   - 高度可定制&易于使用。/.bin/mocha

### 例子

```
    import React from 'react'; 
    import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'; 
     
    // Create styles 
    const styles = StyleSheet.create({ 
      page: { 
        flexDirection: 'row', 
        backgroundColor: '#C0C0C0' 
      }, 
      section: { 
        margin: 10, 
        padding: 10, 
        flexGrow: 1 
      } 
    }); 
     
    // Create Pdf Component 
    const MyPdf = () => ( 
      <Document> 
        <Page size="A4" style={styles.page}> 
          <View style={styles.section}> 
            <Text>Heading #1</Text> 
          </View> 
          <View style={styles.section}> 
            <Text>Heading #2</Text> 
          </View> 
        </Page> 
      </Document> 
    ); 
```

