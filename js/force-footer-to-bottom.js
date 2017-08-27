jQuery(document).ready(function () {
    var maincontent_height = jQuery("#main-content").height();
    var window_height = jQuery(window).height();
    if (maincontent_height < window_height) {
        jQuery('#main-footer').css({
            "position": "fixed",
            "bottom": "0px",
            "width": "100%"
        });
        jQuery('body').css({
            "overflow": "hidden"
        });
    }
});