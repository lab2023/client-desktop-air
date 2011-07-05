/*!
 * Enhanced ExtJS Adapter for Adobe(r) AIR(r)
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 * 
 * @version 3.2.2
 * [For Use with ExtJS 3.1.0 to ExtJS 3.2.2]
 */
/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/*
 * Ukrainian translations for ExtJS (UTF-8 encoding)
 *
 * Original translation by zlatko
 * 3 October 2007
 *
 * Updated by dev.ashevchuk@gmail.com
 * 01.09.2009
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Завантаженн�?...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "<Порожньо>";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} обраних р�?дків";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Закрити цю вкладку";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Хибне значенн�?";
}

if(Ext.LoadMask){
   Ext.LoadMask.prototype.msg = "Завантаженн�?...";
}

Date.monthNames = [
   "Січень",
   "Лютий",
   "Березень",
   "Квітень",
   "Травень",
   "Червень",
   "Липень",
   "Серпень",
   "Вере�?ень",
   "Жовтень",
   "Ли�?топад",
   "Грудень"
];

Date.dayNames = [
   "�?еділ�?",
   "Понеділок",
   "Вівторок",
   "Середа",
   "Четвер",
   "П’�?тниц�?",
   "Субота"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Відміна",
      yes    : "Так",
      no     : "�?і"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "d.m.Y");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "Сьогодні",
      minText           : "Ц�? дата меньша за мінімальну допу�?тиму дату",
      maxText           : "Ц�? дата більша за мак�?имальну допу�?тиму дату",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : '�?а�?тупний мі�?�?ць (Control+Вправо)',
      prevText          : 'Попередній мі�?�?ць (Control+Вліво)',
      monthYearText     : 'Вибір мі�?�?ц�? (Control+Вверх/Вниз дл�? вибору року)',
      todayTip          : "{0} (Пробіл)",
      format            : "d.m.y",
      okText            : "&#160;OK&#160;",
      cancelText        : "Відміна",
      startDay          : 1
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Сторінка",
      afterPageText  : "з {0}",
      firstText      : "Перша �?торінка",
      prevText       : "Попередн�? �?торінка",
      nextText       : "�?а�?тупна �?торінка",
      lastText       : "О�?танн�? �?торінка",
      refreshText    : "О�?віжити",
      displayMsg     : "Відображенн�? запи�?ів з {0} по {1}, в�?ього {2}",
      emptyMsg       : 'Дані дл�? відображенн�? від�?утні'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "Мінімальна довжина цього пол�? {0}",
      maxLengthText : "Мак�?имальна довжина цього пол�? {0}",
      blankText     : "Це поле є обов’�?зковим дл�? заповненн�?",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "Значенн�? у цьому полі не може бути меньше {0}",
      maxText : "Значенн�? у цьому полі не може бути більше {0}",
      nanText : "{0} не є чи�?лом"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "�?е до�?тупно",
      disabledDatesText : "�?е до�?тупно",
      minText           : "Дата у цьому полі повинна бути більша {0}",
      maxText           : "Дата у цьому полі повинна бути меньша {0}",
      invalidText       : "{0} хибна дата - дата повинна бути вказана у форматі {1}",
      format            : "d.m.y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "Завантаженн�?...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Це поле повинно мі�?тити адре�?у електронної пошти у форматі "user@example.com"',
      urlText      : 'Це поле повинно мі�?тити URL у форматі "http:/'+'/www.example.com"',
      alphaText    : 'Це поле повинно мі�?тити виключно латин�?ькі літери та �?имвол підкре�?ленн�? "_"',
      alphanumText : 'Це поле повинно мі�?тити виключно латин�?ькі літери, цифри та �?имвол підкре�?ленн�? "_"'
   });
}

if(Ext.form.HtmlEditor){
   Ext.apply(Ext.form.HtmlEditor.prototype, {
     createLinkText : 'Будь-ла�?ка введіть адре�?у:',
     buttonTips : {
            bold : {
               title: '�?апівжирний (Ctrl+B)',
               text: 'Зробити напівжирним виділений тек�?т.',
               cls: 'x-html-editor-tip'
            },
            italic : {
               title: 'Кур�?ив (Ctrl+I)',
               text: 'Зробити кур�?ивом виділений тек�?т.',
               cls: 'x-html-editor-tip'
            },
            underline : {
               title: 'Підкре�?лений (Ctrl+U)',
               text: 'Зробити підкре�?леним виділений тек�?т.',
               cls: 'x-html-editor-tip'
           },
           increasefontsize : {
               title: 'Збільшити розмір',
               text: 'Збільшити розмір шрифта.',
               cls: 'x-html-editor-tip'
           },
           decreasefontsize : {
               title: 'Зменьшити розмір',
               text: 'Зменьшити розмір шрифта.',
               cls: 'x-html-editor-tip'
           },
           backcolor : {
               title: 'Заливка',
               text: 'Змінити колір фону дл�? виділеного тек�?ту або абзацу.',
               cls: 'x-html-editor-tip'
           },
           forecolor : {
               title: 'Колір тек�?ту',
               text: 'Змінити колір виділеного тек�?ту або абзацу.',
               cls: 'x-html-editor-tip'
           },
           justifyleft : {
               title: 'Вирівн�?ти тек�?т по лівому полю',
               text: 'Вирівнюванн�? тек�?ту по лівому полю.',
               cls: 'x-html-editor-tip'
           },
           justifycenter : {
               title: 'Вирівн�?ти тек�?т по центру',
               text: 'Вирівнюванн�? тек�?ту по центру.',
               cls: 'x-html-editor-tip'
           },
           justifyright : {
               title: 'Вирівн�?ти тек�?т по правому полю',
               text: 'Вирівнюванн�? тек�?ту по правому полю.',
               cls: 'x-html-editor-tip'
           },
           insertunorderedlist : {
               title: 'Маркери',
               text: 'Почати маркований �?пи�?ок.',
               cls: 'x-html-editor-tip'
           },
           insertorderedlist : {
               title: '�?умераці�?',
               text: 'Почати нумернований �?пи�?ок.',
               cls: 'x-html-editor-tip'
           },
           createlink : {
               title: 'В�?тавити гіперпо�?иланн�?',
               text: 'Створенн�? по�?иланн�? із виділеного тек�?ту.',
               cls: 'x-html-editor-tip'
           },
           sourceedit : {
               title: 'Джерельний код',
               text: 'Режим редагуванн�? джерельного коду.',
               cls: 'x-html-editor-tip'
           }
        }
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Сортувати по зро�?танню",
      sortDescText : "Сортувати по �?паданню",
      lockText     : "Закріпити �?товпець",
      unlockText   : "Відкріпити �?товпець",
      columnsText  : "Стовпці"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "�?азва",
      valueText  : "Значенн�?",
      dateFormat : "j.m.Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Т�?гніть дл�? зміни розміру.",
      collapsibleSplitTip : "Т�?гніть дл�? зміни розміру. Подвійний клік �?ховає панель."
   });
}

