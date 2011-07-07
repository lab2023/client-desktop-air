/* -----------------------------------------------------------------------------
 Kebab AIR
 http://kebab-project.com
 Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com

    * LICENSE
    *
    * This source file is subject to the  Dual Licensing Model that is bundled
    * with this package in the file LICENSE.txt.
    * It is also available through the world-wide-web at this URL:
    * http://www.kebab-project.com/cms/licensing
    * If you did not receive a copy of the license and are unable to
    * obtain it through the world-wide-web, please send an email
    * to info@lab2023.com so we can send you a copy immediately.
----------------------------------------------------------------------------- */

/**
 * KebabAIR sign-in view Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabAIR.application.views
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabAIR.application.views.SignIn = Ext.extend(Ext.form.FormPanel, {
	initComponent: function() {

		this.items = [{
			xtype: 'textfield',
			name: 'userName',
            emptyText:'Kullanıcı Adı'
		},{
			xtype: 'textfield',
			name: 'password',
            emptyText:'Şifre'
		}];
        var config = {
            border:false
        }

        Ext.apply(this, Ext.apply(this.initialConfig, config));
		KebabAIR.application.views.SignIn.superclass.initComponent.call(this);
	}
});