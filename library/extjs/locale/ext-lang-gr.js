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
/**
 * Greek (Old Version) Translations by Vagelis
 * 03-June-2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Öüñôùóç...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} åðéëåãì�?íç(åò) ãñáììÞ(�?ò)";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Êëåßóôå áõôÞ ôçí êáñô�?ëá";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Ç ôéìÞ óôï ðåäßï äåí åßíáé �?ãêõñç";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "Öüñôùóç...";
}

Date.monthNames = [
   "ÉáíïõÜñéïò",
   "ÖåâñïõÜñéïò",
   "ÌÜñôéïò",
   "�?ðñßëéïò",
   "ÌÜéïò",
   "Éïýíéïò",
   "Éïýëéïò",
   "�?ýãïõóôïò",
   "Óåðô�?ìâñéïò",
   "�?êôþâñéïò",
   "�?ï�?ìâñéïò",
   "Äåê�?ìâñéïò"
];

Date.dayNames = [
   "ÊõñéáêÞ",
   "Äåõô�?ñá",
   "Ôñßôç",
   "ÔåôÜñôç",
   "�?�?ìðôç",
   "�?áñáóêåõÞ",
   "ÓÜââáôï"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "ÅíôÜîåé",
      cancel : "�?êýñùóç",
      yes    : "�?áé",
      no     : "¼÷é"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "ì/ç/Å");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "ÓÞìåñá",
      minText           : "Ç çìåñïìçíßá áõôÞ åßíáé ðñéí ôçí ìéêñüôåñç çìåñïìçíßá",
      maxText           : "Ç çìåñïìçíßá áõôÞ åßíáé ìåôÜ ôçí ìåãáëýôåñç çìåñïìçíßá",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Åðüìåíïò ÌÞíáò (Control+Right)',
      prevText          : '�?ñïçãïýìåíïò ÌÞíáò (Control+Left)',
      monthYearText     : 'Åðéë�?îôå ÌÞíá (Control+Up/Down ãéá ìåôáêßíçóç óôá �?ôç)',
      todayTip          : "{0} (Spacebar)",
      format            : "ì/ç/Å"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Óåëßäá",
      afterPageText  : "áðü {0}",
      firstText      : "�?ñþôç óåëßäá",
      prevText       : "�?ñïçãïýìåíç óåëßäá",
      nextText       : "Åðüìåíç óåëßäá",
      lastText       : "Ôåëåõôáßá óåëßäá",
      refreshText    : "�?íáí�?ùóç",
      displayMsg     : "ÅìöÜíéóç {0} - {1} áðü {2}",
      emptyMsg       : 'Äåí âñ�?èçêáí åããñáö�?ò ãéá åìöÜíéóç'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "Ôï åëÜ÷éóôï ì�?ãåèïò ãéá áõôü ôï ðåäßï åßíáé {0}",
      maxLengthText : "Ôï ì�?ãéóôï ì�?ãåèïò ãéá áõôü ôï ðåäßï åßíáé {0}",
      blankText     : "Ôï ðåäßï áõôü åßíáé õðï÷ñåùôïêü",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "Ç åëÜ÷éóôç ôéìÞ ãéá áõôü ôï ðåäßï åßíáé {0}",
      maxText : "Ç ì�?ãéóôç ôéìÞ ãéá áõôü ôï ðåäßï åßíáé {0}",
      nanText : "{0} äåí åßíáé �?ãêõñïò áñéèìüò"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "�?ðåíåñãïðïéçì�?íï",
      disabledDatesText : "�?ðåíåñãïðïéçì�?íï",
      minText           : "Ç çìåñïìçíßá ó' áõôü ôï ðåäßï ðñ�?ðåé íá åßíáé ìåôÜ áðü {0}",
      maxText           : "Ç çìåñïìçíßá ó' áõôü ôï ðåäßï ðñ�?ðåé íá åßíáé ðñéí áðü {0}",
      invalidText       : "{0} äåí åßíáé �?ãêõñç çìåñïìçíßá - ðñ�?ðåé íá åßíáé ôçò ìïñöÞò {1}",
      format            : "ì/ç/Å"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "Öüñôùóç...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : '�?õôü ôï ðåäßï ðñ�?ðåé íá åßíáé e-mail address ôçò ìïñöÞò "user@example.com"',
      urlText      : '�?õôü ôï ðåäßï ðñ�?ðåé íá åßíáé ìéá äéåýèõíóç URL ôçò ìïñöÞò "http:/'+'/www.example.com"',
      alphaText    : '�?õôü ôï ðåäßï ðñ�?ðåé íá ðåñé�?÷åé ãñÜììáôá êáé _',
      alphanumText : '�?õôü ôï ðåäßï ðñ�?ðåé íá ðåñé�?÷åé ãñÜììáôá, áñéèìïýò êáé _'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "�?ýîïõóá Ôáîéíüìçóç",
      sortDescText : "Öèßíïõóá Ôáîéíüìçóç",
      lockText     : "Êëåßäùìá óôÞëçò",
      unlockText   : "Îåêëåßäùìá óôÞëçò",
      columnsText  : "ÓôÞëåò"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "¼íïìá",
      valueText  : "ÔéìÞ",
      dateFormat : "ì/ç/Å"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Óýñåôå ãéá áëëáãÞ ìåã�?èïõò.",
      collapsibleSplitTip : "Óýñåôå ãéá áëëáãÞ ìåã�?èïõò. Double click ãéá áðüêñõøç."
   });
}
