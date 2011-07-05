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
﻿/*
 * Traditional Chinese translation
 * By hata1234
 * 09 April 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">讀�?�中...</div>';

if(Ext.View){
    Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
    Ext.grid.GridPanel.prototype.ddText = "�?�擇了 {0} 行";
}

if(Ext.TabPanelItem){
    Ext.TabPanelItem.prototype.closeText = "關閉此標籤";
}

if(Ext.form.Field){
    Ext.form.Field.prototype.invalidText = "數值�?符�?�欄�?�?定";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "讀�?�中...";
}

Date.monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "�?月",
    "�??月",
    "�??一月",
    "�??二月"
];

Date.dayNames = [
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六"
];

if(Ext.MessageBox){
    Ext.MessageBox.buttonText = {
        ok : "確定",
        cancel : "�?�消",
        yes : "是",
        no : "�?�"
    };
}

if(Ext.util.Format){
    Ext.util.Format.date = function(v, format){
       if(!v) return "";
       if(!(v instanceof Date)) v = new Date(Date.parse(v));
       return v.dateFormat(format || "Y/m/d");
    };
}

if(Ext.DatePicker){
    Ext.apply(Ext.DatePicker.prototype, {
       todayText         : "今天",
       minText           : "日期必須大於最�?容許日期",
       maxText           : "日期必須�?於最大容許日期",
       disabledDaysText  : "",
       disabledDatesText : "",
       monthNames        : Date.monthNames,
       dayNames          : Date.dayNames,
       nextText          : "下個月 (Ctrl+�?�方�?��?�)",
       prevText          : "上個月 (Ctrl+左方�?��?�)",
       monthYearText     : "�?�擇月份 (Ctrl+上/下方�?��?��?�擇年份)",
       todayTip          : "{0} (空白�?�)",
       format            : "y/m/d",
       okText            : "确定",
       cancelText        : "�?�消"
    });
}

if(Ext.PagingToolbar){
    Ext.apply(Ext.PagingToolbar.prototype, {
       beforePageText : "第",
       afterPageText  : "�?，共{0}�?",
       firstText      : "第一�?",
       prevText       : "上一�?",
       nextText       : "下一�?",
       lastText       : "最後�?",
       refreshText    : "�?新整�?�",
       displayMsg     : "顯示{0} - {1}筆,共{2}筆",
       emptyMsg       : '沒有任何資料'
    });
}

if(Ext.form.TextField){
    Ext.apply(Ext.form.TextField.prototype, {
       minLengthText : "此欄�?最少�?輸入 {0} 個字",
       maxLengthText : "此欄�?最多輸入 {0} 個字",
       blankText     : "此欄�?為必填",
       regexText     : "",
       emptyText     : null
    });
}

if(Ext.form.NumberField){
    Ext.apply(Ext.form.NumberField.prototype, {
       minText : "此欄�?之數值必須大於 {0}",
       maxText : "此欄�?之數值必須�?於 {0}",
       nanText : "{0} �?是�?�法的數字"
    });
}

if(Ext.form.DateField){
    Ext.apply(Ext.form.DateField.prototype, {
       disabledDaysText  : "無法使用",
       disabledDatesText : "無法使用",
       minText           : "此欄�?之日期必須在 {0} 之後",
       maxText           : "此欄�?之日期必須在 {0} 之�?",
       invalidText       : "{0} �?是正確的日期格�? - 必須�?是 「 {1} �? 這樣的格�?",
       format            : "Y/m/d"
    });
}

if(Ext.form.ComboBox){
    Ext.apply(Ext.form.ComboBox.prototype, {
       loadingText       : "讀�?�中 ...",
       valueNotFoundText : undefined
    });
}

if(Ext.form.VTypes){
    Ext.apply(Ext.form.VTypes, {
       emailText    : '此欄�?必須輸入�? "user@example.com" 之E-Mail格�?',
       urlText      : '此欄�?必須輸入�? "http:/'+'/www.example.com" 之網�?�格�?',
       alphaText    : '此欄�?僅能輸入�?�形英文字�?�?�底線( _ )符號',
       alphanumText : '此欄�?僅能輸入�?�形英文字�?�?數字�?�底線( _ )符號'
    });
}

if(Ext.grid.GridView){
    Ext.apply(Ext.grid.GridView.prototype, {
       sortAscText  : "正�?�排�?",
       sortDescText : "�??�?�排�?",
       lockText     : "鎖定欄�?",
       unlockText   : "解開欄�?鎖定",
       columnsText  : "欄�?"
    });
}

if(Ext.grid.PropertyColumnModel){
    Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
       nameText   : "�??稱",
       valueText  : "數值",
       dateFormat : "Y/m/d"
    });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
    Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
       splitTip            : "拖曳縮放大�?.",
       collapsibleSplitTip : "拖曳縮放大�?. 滑鼠雙擊隱�?."
    });
}
