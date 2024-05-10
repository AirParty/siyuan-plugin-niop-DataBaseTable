# 注意 notice

[custom1.webm](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/db53ae2a-46b8-4943-a20a-592e25d0449b)


数据库的文本单元格现在(v3.0.13)还不能正常编辑html标签内容.官方已修复,v3.0.14发布后就可以用了.

Text cells in the database are currently((v3.0.13)) unable to edit HTML-tagged content properly. This issue has been addressed by the official team, and it will be usable once version 3.0.14 is released.

# 示例 sample
[sample 1.sy.zip](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/files/15259162/sy.zip)
1. 下载这个压缩包
2. 在siyuan中导入.
3. 复制新数据库的块ID.
4. alt+左键点击卡片,在插件菜单输入数据库块ID.点击渲染.
   
1. Download this compressed file.
2. Import it into Siyuan.
3. Copy the block ID of the new database.
4. Alt + left-click on the card, input the database block ID in the plugin menu, and click render.

# 教程 tutorial

## 新建数据库 creat DataBase

![image-20240505200941-1fwaq4a](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/36d346af-e81e-47fd-9d29-33e50dced9d9)

## 新建表格并打开插件菜单,输入数据库ID,选择渲染模式 Creat a Table,open plugin menu

![image-20240505201610-7xiuo62](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/ac01f58d-a358-41ce-8a9a-6005b72a798c)
<img width="257" alt="image-20240505201308-ec01jcw" src="https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/fa24dce5-ebe7-4c35-a367-19e831db26a0">


## 编辑 editor html and css

之后会显示新的编辑界面.

按照如图输入一个卡片的基本信息.每一个div都对应一个css.如图中用不同颜色标注的部分

background(在这里作为卡片本体)不能输入`Position:absolute`属性.其他元素则必须包含`position:absolute`, `left` `top` `width` `height`属性用来指定对应div具体放置的位置和大小.font-size在这里能指定字体大小.

点击保存

The new editing interface will be displayed afterwards.

Enter the basic information of a card as shown in the figure. Each div corresponds to a CSS. The parts marked with different colors in the figure.

background(or any other you want as card body) be must have none `Position:absolute`.others be must have `position:absolute` `left` `top` `width` `height` . font-size just adjust text size.

click save

![html&css](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/3c2ecfcc-e482-4f29-a1ac-ddafc18f0cde)
![qiannianzhilv](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/a6cdc37e-697e-4605-b9f6-cdecfba01e67)

# 其他示例 ohters sample

[CustomTest2.sy.zip](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/files/15270944/CustomTest2.sy.zip)
[custom2.webm](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/ed01c5f3-59ae-435a-8c05-32085ef93348)
