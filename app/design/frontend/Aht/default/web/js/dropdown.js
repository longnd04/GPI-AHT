/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
 
require([
    'jquery'
], function ($) {
    'use strict';
    $(document).ready(function () {
        $('.type').each(function() {
            $(this).click(function(){
                $('.value').toggleClass('active');
            })
        })
    });
    $(document).ready(function () {
        $('.product-section-title').each(function() {
            $(this).click(function(){
                $(this).closest('.page-main').next('.pagebuilder-attribute-wrapper').toggleClass('active');
            });
        });
    });
    
});
