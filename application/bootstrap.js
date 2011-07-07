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

Ext.namespace(
    'KebabAIR.application.configs',
    'KebabAIR.application.controllers',
    'KebabAIR.application.layouts',
    'KebabAIR.application.models',
    'KebabAIR.application.views'
);

/**
 * KebabAIR bootstrap Class
 *
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
Bootstrap = Ext.extend(Ext.util.Observable, {

    createApplication : function(){

        // Default layout
        this.layout = new KebabAIR.application.layouts.Layout({
            bootstrap: this
        });

        // Default controlller
        this.controller = new KebabAIR.application.controllers.Index({
            bootstrap: this
        });

        // Create window
        new Ext.air.Window({
            win: window.nativeWindow,
            items: this.layout,
            border:false,
            layout:'fit'
        });
    }
});