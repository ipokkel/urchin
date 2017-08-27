(function ($) { // if loaded in footer use this jquery wrapper
/**
 * NOTES:
 * #DESKTOP
 * when back at top add to body style margin-top: -(#main-header:data-height-onload)px  
 * <div class="header-content-container center" style="margin-top: -(#main-header:data-height-onload)px;">
 */
$(document).ready(function () {

    /**
     * Menu Hide
     */
   
    // for Divi the only part if the script you may want to change is the menuOffset, detachPoint and hideShowOffset
    var previousScroll = 0, // previous scroll position. (default = 0)
        menuOffset = 80, // height of menu (once scroll passed it, menu is hidden). (default = 60)
        detachPoint = 650, // point of detach (after scroll passed it, menu is fixed). (default = 650)
        hideShowOffset = 6, // scrolling value after which triggers hide/show menu. (default= 6)
        header_height = parseInt(document.getElementById( 'main-header' ).attributes.getNamedItem("data-height-onload").nodeValue), //get data-height
        padding_value = Math.round(header_height / 2), // divide data-height in half
        $body = $( 'body' ),
        showHideNavTimer = 3000; // ms  

        var on_mobile_browser = (navigator.userAgent.match( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/ ) || $('body').hasClass('et_mobile_device'));
        if (on_mobile_browser) {
            // detachPoint = 200;
        }
        
        // if (on_mobile_browser) {
             $( '#main-header' ).addClass('invisible et-fixed-header XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
            $('#page-container').addClass('invisible XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
            $( 'article section:first-child' ).css( { 'padding-top' : padding_value, 'padding-bottom' : padding_value } );
            // .hide-this-element
        //  }

    $(window).scroll(function () {

        if (!$( '#main-header' ).hasClass('expanded')) {
            var currentScroll = $(this).scrollTop(), // gets current scroll position
                scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling

            // if scrolled past menu
            if (currentScroll > menuOffset) {
                // if scrolled past detach point add class to fix menu
                if (currentScroll > detachPoint) {
                    if (!$( '#main-header' ).hasClass('detached')){
                        $( '#main-header' ).addClass('detached');
                    // hideHideNavMenu();
                    // hideMobileNavigation();
                }
                }

                // if scrolling faster than hideShowOffset hide/show menu
                if (scrollDifference >= hideShowOffset) {
                    if (currentScroll > previousScroll) {
                        // scrolling down; hide menu
                        if (!$( '#main-header' ).hasClass('invisible'))
                            $( '#main-header' ).addClass('invisible et-fixed-header');
                    } else {
                        // scrolling up; show menu
                        if ($( '#main-header' ).hasClass('invisible'))
                            $( '#main-header' ).removeClass('invisible');
                    }
                }
            } else {
                // only remove “detached” class if user is at the top of document (menu jump fix)
                if (currentScroll <= 0) {
                    $( '#main-header' ).removeClass();
                    $( '#main-header' ).addClass('invisible et-fixed-header');

                        // hideHideNavMenu();
                } 
            }

            // if user is at the bottom of document show menu
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // $( '#main-header' ).removeClass('invisible');
            }

            // replace previous scroll position with new one
            previousScroll = currentScroll;
        }
    })
    
    });
})(jQuery);