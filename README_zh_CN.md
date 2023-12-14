# 作用

1. 指定一个按钮，点击后可以折叠其他块
    ![useage](https://github.com/AirParty/siyuan-plugin-fold-button/blob/main/useage.gif)
    预览图有点大，放在github，插件页面看不到推荐打开左侧github地址看
2. 双击折叠列表
    有序列表和无序列表都可以使用,兼容更改了List渲染方式的插件和主题，如Dark+。
    ![listuseage](https://github.com/AirParty/siyuan-plugin-fold-button/blob/main/preview_list.png)

# 使用方法

## 折叠邻接的下一块

点击键盘`/`，在菜单中选择`折叠下一块`.

点击设置过`折叠下一块`的按钮，将会触发下一个内容块的折叠操作，包括多行文本,嵌入块，超级块和列表

## 通用方式

1. 复制需要折叠块的`ID`。
2. 在需要用作按钮的块`属性`->`自定义`添加新的属性`fold`，输入之前复制的ID。
    ![howToUse](https://github.com/AirParty/siyuan-plugin-fold-button/blob/main/howToUse.gif)

## 双击折叠列表

1. 双击任意List成员的文字或者空白位置即可。

# 更新历史

* v0.1
  新增

  * v0.1.1
    更新网址
  * v0.1.2
    点击时高亮按钮
  * v0.1.3
    双击折叠列表

    * v0.1.3.2
      修复版本更新bug.
* V0.2
  新增`/`菜单选项`折叠下一块`，现在折叠操作能直接控制下一个内容块