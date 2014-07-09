/**
    JQuery StyleSwither Plugin
=========================================================================*/

jQuery.styleSwither = function(){

    var panel = jQuery('.style-switcher');

    jQuery('.style-switcher-btn').click(function () {
        jQuery('.style-switcher').show();
    });

    jQuery('.theme-close').click(function () {
        jQuery('.style-switcher').hide();
    });
    
    jQuery('li', panel).click(function () {
        var color = jQuery(this).attr("data-style");
        var data_header = jQuery(this).attr("data-header");
        setColor(color, data_header);
        jQuery('.list-unstyled li', panel).removeClass("theme-active");
        jQuery(this).addClass("theme-active");
    });

    var setColor = function (color, data_header) {
        jQuery('#style_color').attr("href", "styles/themes/" + color + ".css");
        if(data_header == 'light'){
            jQuery('#style_color-header-1').attr("href", "styles/themes/headers/header1-" + color + ".css");
            jQuery('#logo-header').attr("src", "images/logo1-" + color + ".png");
            jQuery('#logo-footer').attr("src", "images/logo2-" + color + ".png");
        } else if(data_header == 'dark'){
            jQuery('#style_color-header-2').attr("href", "styles/themes/headers/header2-" + color + ".css");
            jQuery('#logo-header').attr("src", "images/logo1-" + color + ".png");
            jQuery('#logo-footer').attr("src", "images/logo2-" + color + ".png");
        }
    }
};
