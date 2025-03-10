# 作用

1. 将数据库中的数据渲染为卡片或者表格
2. 使用表格导入数据到数据库中
3. 卡片视图可编辑数据库中数据

# 更新原因

* v0.9.6 添加了新的生成方式"自定义",教程请点击这个[链接](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/notice/customHtml.md)查看.

  * V0.9.6.2 修复`SiYuan v3.1.0`版本API变动导致导入工具失效的情况
* v0.9.5 使用 `..style(height:120px)`设置高度的单元格将严格按照单元格高度显示.溢出内容将被隐藏.鼠标在该单元格上时可以使用滚轮查看溢出内容.
* v0.9.2 添加设置 `显示空数据行` `新建按钮` `同步表格` `..reload()`

  * 新建按钮:会添加一个按钮,点击之后会在数据库顶部写入一条新的数据.数据表格会重新加载数据.
  * 显示空数据行
  * 同步表格:同一个页面的复数表格假如使用同一个数据源,且都设置了同步表格,那么当一个触发刷新的时候,其他表格会一起刷新
  * ..reload():单元格设置, 可以设定此单元格中数据修改的时候重新加载数据库
  * 修复一些bug
  * v0.9.2.1 修复导入图片时,假如链接中有()导致地址解析错误的情况
  * v0.9.2.2 修复因API变动,导致`数字`导入失败
* v0.9.0 `可编辑卡片` 打开选项后,可以编辑卡片内容,并会写回数据库中.

  * 选中卡片内图片的方法:在图片上按住鼠标拖动,并快速松开鼠标以取消拖动.此时使用del或者退格按键可以删除图片.
  * 不支持多图片和多选.因为没想到好的交互方式.
  * 说用说明,查看<功能演示>的可编辑卡片
  * v0.9.0.1 可编辑表格自带换页刷新
* v0.8.7 可以指定卡片中每一个格子的样式了 使用`..tdstyle()`,具体使用方式和..style类似,可以使用在任何格子.
* v0.8.6 添加一个选项,自动刷新,现在只有`切换窗口`的选项,点击显示绿色就能用.当自动刷新勾选时,,假如数据库的数据有变动,再页面更换或者刷新的时候会重新读取数据库信息生成表格.

  * 可以实现 类似`todo`的效果.
  * bug,日期类型的值的修改,和数据行的删除不会唤起重新渲染,原因是数据库中这部分数据修改不会刷新刷剧库所在块的最后修改时间.
  * 0.8.6.1 临时修复一个页面有多个数据表格时只有一个刷新的问题
* v0.8.5 导入不再新建文件,导入内容按照原表格顺序,导入,现在支持日期,格式yyyy-mm-dd,可以输入两个日期用逗号分隔,分别表示开始时间和结束时间.
* v0.8.4  `alt+鼠标点击`设置过DatabaseTable的表格，可以打开设置菜单.右侧和下侧渲染支持`单行`和`单列`了
* v0.8.3 真支持多选和单选了,增加新建文件名的特殊符号检测。表格内容解析改进.避免之前有概率没解析的情况。还有几个忘记记录的bug。
* v0.8.2 修复思源2.11 api更新导致数据库默认只读取100个，新建文件多线程->单线程避免报错。

# 使用方法

## 渲染数据

[MD不支持预览，可以点开网页看演示](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/112f9f2b-bb60-48df-bc0c-fa160874a16b)

1. 复制数据库块ID
2. 在需要渲染的表格处使用"/"菜单或者块标菜单内->插件，选择数据表格
3. 输入数据库块ID，然后选渲染方,点击渲染
4. 之后可以使用`alt+鼠标点击`快速打开设置菜单

### 设定

1. 怎么读取数值？
    使用..(数据名称)
2. 怎么设置宽度?
    拖拽原始表格的宽度，生成视图的时候会匹配原始表格的宽度
3. 怎么设置高度？
    Card模式下 在表格的第一列中输入`..style`(行样式内容),比如..style(height:120px)就是设置高度为120
4. 怎么设置颜色等？
    ..style()内可以输入任何想要的样式。颜色就是 `background-color: #333  ;`  这里的#333就是颜色。

## 导入数据

[importTool](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/22d25560-0acf-4575-8e2a-831ec7204625)

1. 在设置中打开<导入工具>的开关
2. 可能需要关闭再打开一次插件。
3. 使用 '/' 菜单打开<表格数据导入工具>
4. 输入表格块的ID和数据库块的ID，点击导入

### ！！！ 导入数据工具的`注意事项`

1. 输入表格的第一列必须是和数据库的主键(也就是默认block)同名，（一定要同名！）不然会按照第一列的名称新建一大堆数据行。
2. 暂时只有匹配了文本 数字 图片/资源 单选 多选
3. 主键里面的特殊符号在导入的时候会被删除，因为文档名不支持大多数特殊符号。
4. 导入`多选`的时候使用`,`作为分隔符。例如 吉他,贝斯,钢琴 会被识别为3个选项
5. 单选和多选必须在数据库内设置过有该选项的才能导入。

## 其他零碎

1. 向下渲染要求原始表格中的数据栏都放在最下一行，同理右侧渲染要求全部都放在右边。
2. 表格渲染的结果依然是表格可以编辑，但是假如你点了插件菜单中的编辑，那么表格会变回去原始表格。所以不要用生成的表格编辑，你可以删除自定义属性中的“nioptable”就变回普通表格了。
3. 导入数据时,当后台在计算的时候,可以关闭数据库所在页面,能大幅度提高计算速度.
4. 思源笔记v3.0.11之后假如希望使用可编辑卡片,请在设置内打开`允许执行 HTML 块内脚本`

## 功能演示

* 切换页面后重新加载

  * ![reloadAfterSwitchTab](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/c9897082-ed8e-41cd-8e2f-0a2df8bb6d74)
* 可编辑卡片

  * ![SyncAdd.webm](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/c6ac50de-29ee-42f3-ae0a-a70fd8470761)
  * ![EditableCardsPreview](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/222488c3-86c7-46bf-865e-58ebc008b23d)
  * ![EditableCards](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/ef590759-ca43-4d0d-854e-c2ba175dad87)
* tdstyle测试

  * ![tdstyle](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/0063e6fe-5349-4b6d-ae43-ef8b145dbda3)

* 自定义模式

 * ![html&css](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/3c2ecfcc-e482-4f29-a1ac-ddafc18f0cde)
 * ![qiannianzhilv](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/a6cdc37e-697e-4605-b9f6-cdecfba01e67)