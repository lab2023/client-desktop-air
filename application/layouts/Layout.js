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
 * KebabAIR layout Class
 *
 * @package     Application
 * @namespace   KebabAIR.application.layouts
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabAIR.application.layouts.Layout = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {
        // sign in form
        this.signIn = new KebabAIR.application.views.SignIn({
            bootstrap: this.bootstrap
        });
        
        var config = {
            layout:'fit',
            items : this.signIn,
            border:false
        }

        Ext.apply(this, config);

        KebabAIR.application.layouts.Layout.superclass.initComponent.call(this);
    }
});