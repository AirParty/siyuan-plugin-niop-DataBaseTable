[中文](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/README_zh_CN.md)
# Purpose
1. Render data from the database as cards or tables.
2. Import data into the database using tables.

# Usage
## Rendering Data
[Render As Card](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/notice/renderAsCard.webm)
1. Copy the database block ID.
2. Use the `/` menu at the table where rendering is needed, or use the block tag menu -> plugin to select the data table.
3. Enter the database block ID, choose the rendering method, and click render.
### Settings
1. How to read values?
    Use ..(data name).
2. How to set width?
    Drag the width of the original table; when generating the view, it will match the width of the original table.
3. How to set height?
    Enter ..style(row style content) in the first column of the table, e.g., ..style(height:120px) sets the height to 120.
4. How to set color of row, etc.?
    Anything can be entered in ..style(). For example, the color is `background-color: #333;` where #333 is the color.

## Importing Data
[Import Tool](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/notice/importTool.webm)
1. Turn on the switch for <Import Tool> in the settings.
2. Use the `/` menu to open <Table Data Import Tool>.
3. Enter the table block ID and the database block ID, then click import.
### Caution!!!
1. The first column of the input table must have the same name as the primary key of the database (i.e., the default block) (must be the same!), otherwise, it will create a bunch of documents based on the name of the first column.
2. Currently, only text, numbers, images/resources, and possibly single-choice options are supported for import.
3. When importing, if a block is not detected, it will automatically create a new one under the current document with the name date/new data block name and then import the data.
4. It is recommended to import fewer new blocks at a time than the "Maximum Number to List" set in the settings to avoid potential bugs.