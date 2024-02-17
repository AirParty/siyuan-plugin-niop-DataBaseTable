[中文](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/blob/main/README_zh_CN.md)

# Purpose

1. Render data from the database as cards or tables.
2. Import data into the database using tables.
3. you can edit database in card.

# reason of updata

* v0.9.2 Added settings: `Show Empty Data`, `Show Add Button`, `sync tables`, `..reload()`

  * Show Add Button: Adds a button that, when clicked, inserts a new record at the top of the database. The data table then reloads the data.
  * Show Empty Data
  * sync tables: If multiple tables on the same page use the same data source and have 'Sync Tables' enabled, then refreshing one will refresh the others.
  * ..reload(): Cell setting, allows for the database to reload when data in this cell is modified.
  * Fixed some bugs
  * v0.9.2.1 Fix bug on importing image when the link contains () or other special characters.
  * v0.9.2.2 fixes the issue where the `number` import failed due to API changes.
* v0.9.0 `EditableCards` After opening the option, you can edit the content of the cards and write back to the database.

  * Method to select an image inside the card: Click and drag the mouse over the image, then quickly release the mouse to cancel the drag. At this point, using the delete or backspace key can remove the image.
  * Multiple images and multiple selections are not supported due to the lack of a good interaction method.
  * Instructions for use, see the editable cards in <Function Demonstration>.
  * v0.9.0.1 EditableCards also trigger auto-refresh;
* v0.8.7 You can now specify the style of each cell in the cards using `..tdstyle()`, which works similarly to ..style and can be used in any cell.
* v0.8.6 Added an option for auto-refresh. Currently, there's only the 'Switch Window' option available. Clicking it turns it green and makes it usable. When auto-refresh is checked, if there are changes in the database, the information will be re-read and the table regenerated upon page change or refresh.

  * This can achieve an effect similar to a to-do list.
  * Bug: Modifications to date-type values and the deletion of data rows do not trigger a re-render.
  * 0.8.6.1 Temporarily fixed an issue where only one table refreshes when there are multiple data tables on a page.
* v0.8.5 Do not create new files during import. Import the content in the original table order. Import now supports dates in the format yyyy-mm-dd. You can input two dates separated by a comma, representing the start and end times, respectively.
* v0.8.4 `alt + mouse click` has been configured for the DatabaseTable, You can open the settings menu with it.right and below rendering now supports single row and single column.
* v0.8.3 now truly supports both multiple choice and single choice options, with enhanced detection of special characters in newly created filenames. There have been improvements in the parsing of table contents to avoid situations where parsing might fail. Additionally several bugs.
* V0.8.2 fix error of siyuan 2.11 api updata

# Usage

## Rendering Data

[renderAsCard](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/112f9f2b-bb60-48df-bc0c-fa160874a16b)

1. Copy the database block ID.
2. Use the `/` menu at the table where rendering is needed, or use the block tag menu -> plugin to select the data table.
3. Enter the database block ID, choose the rendering method, and click render.
4. You can open the settings menu with `alt + mouse click` afterward.

### Settings

#### How to read values?

Use ..(data name).

#### How to set width?

Drag the width of the original table; when generating the view, it will match the width of the original table.

#### How to set height?

Card mode only: Enter `..style`(row style content) in the first column of the table, e.g., ..style(height:120px) sets the height to 120.

#### How to set color of row, etc.?

Anything can be entered in ..style(). For example, the color is `background-color: #333;` where #333 is the color.

## Importing Data

[importTool](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/22d25560-0acf-4575-8e2a-831ec7204625)

1. Turn on the switch for <Import Tool> in the settings.
2. It may be necessary to close and reopen the plugin once.
3. Use the `/` menu to open <DateBaseImport>.
4. Enter the table block ID and the database block ID, then click import.

### ！！！ Caution for Importing Data

1. The first column of the input table must have the same name as the primary key of the database (i.e., the default block) (must be the same!), otherwise, it will create a bunch of data based on the name of the first column.
2. Currently, only text, numbers, images/resources, and possibly single-choice options are supported for import.
3. Special characters within primary keys will be removed during import, as document names do not support most special characters.
4. When importing multiple choice options, use ',' as the delimiter. For example, importing "Guitar, Bass, Piano" will be recognized as three separate options.
5. To import single and multiple choice options, they must have been previously set up within the database.

## Miscellaneous

1. "below rendering" requires that the data columns from the original table be placed in the bottom row. Similarly, for "right-side rendering," all data should be placed on the right side.
2. The rendered table remains editable; however, if you click on "Edit" in the plugin menu, the table will revert to its original form. Therefore, avoid editing the generated table. You can return to a regular table by removing the "nioptable" custom attribute.
3. When importing data, you can significantly increase the calculation speed by closing the page where the database is located while the backend is performing calculations.

## Function demonstration

* reloadAfterSwitchTab

  * ![reloadAfterSwitchTab](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/c9897082-ed8e-41cd-8e2f-0a2df8bb6d74)
* EditableCards

  * ![SyncAdd.webm](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/c6ac50de-29ee-42f3-ae0a-a70fd8470761)
  * ![editableCardPreview](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/222488c3-86c7-46bf-865e-58ebc008b23d)
  * ![EditableCards](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/ef590759-ca43-4d0d-854e-c2ba175dad87)
* tdstyleTest

  * ![tdstyleTest](https://github.com/AirParty/siyuan-plugin-niop-DataBaseTable/assets/7642279/0063e6fe-5349-4b6d-ae43-ef8b145dbda3)