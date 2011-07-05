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
 * Japanese translation
 * By tyama
 * 04-08-2007, 05:49 AM
 *
 * update based on English Translations by Condor (8 Aug 2008)
 * By sakuro (30 Aug 2008)
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">読�?�込�?�中...</div>';

if(Ext.DataView){
  Ext.DataView.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} 行�?�択";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "読�?�込�?�中...";
}

Date.monthNames = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
];

Date.getShortMonthName = function(month) {
  return "" + (month + 1);
};

Date.monthNumbers = {
  "1" : 0,
  "2" : 1,
  "3" : 2,
  "4" : 3,
  "5" : 4,
  "6" : 5,
  "7" : 6,
  "8" : 7,
  "9" : 8,
  "10" : 9,
  "11" : 10,
  "12" : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, name.length - 1)];
  // or simply parseInt(name.substring(0, name.length - 1)) - 1
};

Date.dayNames = [
  "日曜日",
  "月曜日",
  "�?�曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 1); // just remove "曜日" suffix
};

Date.formatCodes.a = "(this.getHours() < 12 ? '�?��?' : '�?�後')";
Date.formatCodes.A = "(this.getHours() < 12 ? '�?��?' : '�?�後')"; // no case difference

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "キャンセル",
    yes    : "�?��?�",
    no     : "�?��?��?�"
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
    todayText         : "今日",
    minText           : "�?�択�?��?�日付�?�最�?値以下�?��?�。",
    maxText           : "�?�択�?��?�日付�?�最大値以上�?��?�。",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : '次月�?� (コントロール+�?�)',
    prevText          : '�?月�?� (コントロール+左)',
    monthYearText     : '月�?�択 (コントロール+上/下�?�年移動)',
    todayTip          : "{0} (スペースキー)",
    format            : "Y/m/d",
    okText            : "OK",
    cancelText        : "キャンセル",
    startDay          : 0
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "ページ",
    afterPageText  : "/ {0}",
    firstText      : "最�?�?�ページ",
    prevText       : "�?�?�ページ",
    nextText       : "次�?�ページ",
    lastText       : "最後�?�ページ",
    refreshText    : "更新",
    displayMsg     : "{2} 件中 {0} - {1} を表示",
    emptyMsg       : '表示�?�るデータ�?��?�り�?��?�ん。'
  });
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "フィールド�?�値�?��?正�?��?�。";
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "�?��?�フィールド�?�最�?値�?� {0} �?��?�。",
    maxLengthText : "�?��?�フィールド�?�最大値�?� {0} �?��?�。",
    blankText     : "必須項目�?��?�。",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    decimalSeparator : ".",
    decimalPrecision : 2,
    minText : "�?��?�フィールド�?�最�?値�?� {0} �?��?�。",
    maxText : "�?��?�フィールド�?�最大値�?� {0} �?��?�。",
    nanText : "{0} �?�数値�?��?��?�り�?��?�ん。"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "無効",
    disabledDatesText : "無効",
    minText           : "�?��?�フィールド�?�日付�?��? {0} 以�?�?�日付�?�設定�?��?��??�?��?��?�。",
    maxText           : "�?��?�フィールド�?�日付�?��? {0} 以�?�?�日付�?�設定�?��?��??�?��?��?�。",
    invalidText       : "{0} �?�間�?��?��?�日付入力�?��?�。 - 入力形�?�?�「{1}�?�?��?�。",
    format            : "Y/m/d",
    altFormats        : "y/m/d|m/d/y|m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "読�?�込�?�中...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : 'メールアドレスを"user@example.com"�?�形�?�?�入力�?��?��??�?��?��?�。',
    urlText      : 'URLを"http:/'+'/www.example.com"�?�形�?�?�入力�?��?��??�?��?��?�。',
    alphaText    : '�?�角英字�?�"_"�?��?��?��?�。',
    alphanumText : '�?�角英数�?�"_"�?��?��?��?�。'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'リンク�?�URLを入力�?��?��??�?��?��?�:',
    buttonTips : {
      bold : {
        title: '太字 (コントロール+B)',
        text: '�?�択テキストを太字�?��?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: '斜体 (コントロール+I)',
        text: '�?�択テキストを斜体�?��?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: '下線 (コントロール+U)',
        text: '�?�択テキスト�?�下線を引�??�?��?�。',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: '文字を大�??�??',
        text: 'フォントサイズを大�??�??�?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: '文字を�?�?��??',
        text: 'フォントサイズを�?�?��??�?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: '文字�?��?イライト',
        text: '�?�択テキスト�?�背景色を変更�?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: '文字�?�色',
        text: '�?�択テキスト�?�色を変更�?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: '左�?��?�',
        text: 'テキストを左�?��?��?��?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: '中央�?��?�',
        text: 'テキストを中央�?��?��?��?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: '�?��?��?�',
        text: 'テキストを�?��?��?��?��?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: '番�?��?��?�箇�?�書�??',
        text: '番�?��?��?�箇�?�書�??を開始�?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: '番�?�付�??箇�?�書�??',
        text: '番�?�付�??箇�?�書�??を開始�?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: '�?イパーリンク',
        text: '�?�択テキストを�?イパーリンク�?��?��?��?�。',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'ソース編集',
        text: 'ソース編集モード�?�切り替�?��?��?�。',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "昇順",
    sortDescText : "�?順",
    columnsText  : "カラム"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(�?��?�)',
    groupByText    : '�?��?�カラム�?�グルーピング',
    showGroupsText : 'グルーピング'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "�??称",
    valueText  : "値",
    dateFormat : "Y/m/d"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "ドラッグ�?�る�?�リサイズ�?��??�?��?�。",
    collapsibleSplitTip : "ドラッグ�?�リサイズ。 ダブルクリック�?�隠�?�。"
  });
}

if(Ext.form.TimeField){
  Ext.apply(Ext.form.TimeField.prototype, {
    minText : "�?��?�フィールド�?�時刻�?��? {0} 以�?�?�時刻�?�設定�?��?��??�?��?��?�。",
    maxText : "�?��?�フィールド�?�時刻�?��? {0} 以�?�?�時刻�?�設定�?��?��??�?��?��?�。",
    invalidText : "{0} �?�間�?��?��?�時刻入力�?��?�。",
    format : "g:i A",
    altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
  });
}

if(Ext.form.CheckboxGroup){
  Ext.apply(Ext.form.CheckboxGroup.prototype, {
    blankText : "�?��?�グループ�?�ら最低１�?��?�アイテムを�?�択�?��?��?�れ�?��?�り�?��?�ん。"
  });
}

if(Ext.form.RadioGroup){
  Ext.apply(Ext.form.RadioGroup.prototype, {
    blankText : "�?��?�グループ�?�ら１�?��?�アイテムを�?�択�?��?��?�れ�?��?�り�?��?�ん。"
  });
}
