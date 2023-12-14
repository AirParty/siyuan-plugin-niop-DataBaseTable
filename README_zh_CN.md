# 作用
1. 将数据库中的数据渲染为卡片或者表格
2. 使用表格导入数据到数据库中
# 使用方法
## 渲染数据
[Render As Card](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/notice/renderAsCard.webm)
1. 复制数据库块ID
2. 在需要渲染的表格处使用"/"菜单或者块标菜单内->插件，选择数据表格
3. 输入数据库块ID，然后选渲染方,点击渲染
### 设定
1. 怎么读取数值？
使用..(数据名称)
2. 怎么设置宽度?
拖拽原始表格的宽度，生成视图的时候会匹配原始表格的宽度
3. 怎么设置高度？
在表格的第一列中输入..style(行样式内容),比如..style(height:120px)就是设置高度为120
4. 怎么设置颜色等？
..style()内可以输入任何想要的样式。颜色就是 `background-color: #333  ;`  这里的#333就是颜色。
## 导入数据
[Import tool](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/notice/importTool.webm)
1. 在设置中打开<导入工具>的开关
2. 使用 '/' 菜单打开<表格数据导入工具>
3. 输入表格块的ID和数据库块的ID，点击导入
### 注意！！！
1. 输入表格的第一列必须是和数据库的主键(也就是默认block)同名，（一定要同名！）不然会按照第一列的名称新建一大堆文档。
2. 暂时只有匹配了文本 数字 图片/资源 单选(没测试) 的导入
3. 导入的时候检测到没有的块会在当前文档下自动新建 日期/新数据块名称  然后再导入数据。
4. 一次导入新的块最好少于设置中`最大列出数量`,可能出bug