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

        var on_mobile_browser = '';
        
        if (navigator.userAgent.match( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/ ) || $('body').hasClass('et_mobile_device')) {
            on_mobile_browser = true;
        }
        if (on_mobile_browser) {
            // $( '#main-header' ).removeClass('invisible');
            // $( '#main-header' ).css( { 'transform': 'translateY(0)', 'opacity': '0' } );
            // $('page-container').css({ 'padding-top': '0' });
            // $body.removeClass( 'et_hide_nav_disabled' );
            // $body.addClass( 'et_hide_nav' );


            $( '#main-header' ).addClass('invisible');
            $('#page-container').addClass('invisible');
            $( 'article section:first-child' ).css( { 'padding-top' : padding_value, 'padding-bottom' : padding_value } );
            
         }
         

        $( 'footer' ).before( "<nav id=\"updown-hamburger-toggle\" class=\"updown-hamburger hide-updown-hamburger\"><button class=\"c-hamburger c-hamburger--rot\"><span>toggle menu</span></button></nav>" );
        $(".c-hamburger").click(function () {
            var new_header_height = parseInt(document.getElementById( 'main-header' ).attributes.getNamedItem("data-height-onload").nodeValue); //get data-height
            $(this).toggleClass('is-active');
            // $body.toggleClass( 'et_hide_nav' );
            // $body.toggleClass( 'et_hide_nav_disabled' );
            $( '#main-header' ).toggleClass('expanded');
            $( '#main-header' ).toggleClass('detached');
            $( '#main-header' ).toggleClass('et-fixed-header');
            // $body.toggleClass( 'et_fixed_nav' );
            if ($(this).hasClass('is-active')) {
                if (on_mobile_browser) {
                    // hide the hamburger
                    if (!$('#updown-hamburger-toggle').hasClass('hide-updown-hamburger')) {
                    $('#updown-hamburger-toggle').addClass('hide-updown-hamburger');
                    }
                    // open up the menu
                    if ( !$( '.mobile_nav' ).hasClass( 'opened' ) ) {
                        if ( $('.mobile_nav').hasClass( 'closed' ) ) {
                            $( '.mobile_nav' ).removeClass( 'closed' );
                        }
                        $( '.mobile_nav' ).addClass( 'opened' )
                        if (!$( '#mobile_menu' ).css('display', 'block')) {
                            $( '#mobile_menu' ).css('display', 'block');
                        }
                    }
                }
            } else {
                if (on_mobile_browser) {
                    // close the menu
                    if ( $( '.mobile_nav' ).hasClass( 'opened' ) ) {
                        $( '.mobile_nav' ).removeClass( 'opened' );
                        if ( !$('.mobile_nav').hasClass( 'closed' ) ) {
                            $('.mobile_nav').addClass( 'closed' );
                        }
                        if (!$( '#mobile_menu' ).css('display', 'none')) {
                            $( '#mobile_menu' ).css('display', 'none');
                        }
                        // show the hamburger
                        if ($('#updown-hamburger-toggle').hasClass('hide-updown-hamburger')) { 
                            $('#updown-hamburger-toggle').removeClass('hide-updown-hamburger');
                        }
                    }
                }
            }
            /*
            $( '#main-header' ).css( { 'transform': 'translateY(0)', 'opacity': '1' } );
            $('#page-container').css( { 'padding-top': '0', 'margin-top': '-1' } );
            // $body.css( { 'margin-top': header_height, } );
            // $('div.header-content-container').css( { 'margin-top': '-' + header_height, } );
            */
            // console.log(new_header_height);

        });

         /**
         * Show menu if hidden when scrolled back to top
         */
        function showHideNavMenu() {
            $( '#main-header' ).removeClass('invisible');
            $( '#main-header' ).css( { 'transform': 'translateY(0)', 'opacity': '1' } );
            $('#top-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
            $body.removeClass( 'et_hide_nav' );
            $body.addClass( 'et_hide_nav_disabled' );
        }
        /**
         * Hide navigation on mobile device
         */
        function hideHideNavMenu() {
            $( '#main-header' ).removeClass('invisible');
            $( '#main-header' ).css( { 'transform': 'translateY(0)', 'opacity': '0' } );
            $('#top-header').css( { 'transform': 'translateY(0)', 'opacity': '0' } );
            $body.removeClass( 'et_hide_nav_disabled' );
            $body.addClass( 'et_hide_nav' );                    
        }


    $(window).scroll(function () {

        if (!$( '#main-header' ).hasClass('expanded')) {
            var currentScroll = $(this).scrollTop(), // gets current scroll position
                scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling

            // if scrolled past menu
            if (currentScroll > menuOffset) {
                // if scrolled past detach point add class to fix menu
                if (currentScroll > detachPoint) {
                    if (!$( '#main-header' ).hasClass('detached'))
                        $( '#main-header' ).addClass('detached');
                    // hideHideNavMenu();
                }

                // if scrolling faster than hideShowOffset hide/show menu
                if (scrollDifference >= hideShowOffset) {
                    if (currentScroll > previousScroll) {
                        // scrolling down; hide menu
                        if (!$( '#main-header' ).hasClass('invisible'))
                            $( '#main-header' ).addClass('invisible');
                    } else {
                        // scrolling up; show menu
                        if ($( '#main-header' ).hasClass('invisible'))
                            $( '#main-header' ).removeClass('invisible');
                    }
                }
            } else {
                // only remove “detached” class if user is at the top of document (menu jump fix)
                // if (currentScroll <= 0) { 
                if (currentScroll <= 0) {
                    $( '#main-header' ).removeClass();
                    // $( '#main-header' ).addClass('invisible');
                    // setTimeout(showHideNavMenu, showHideNavTimer);
                    // updown-hamburger-toggle
                    if ($('#updown-hamburger-toggle').hasClass('hide-updown-hamburger'))
                        $('#updown-hamburger-toggle').removeClass('hide-updown-hamburger');
                        hideHideNavMenu();
                } else {
                    if (!$('#updown-hamburger-toggle').hasClass('hide-updown-hamburger'))
                        $('#updown-hamburger-toggle').addClass('hide-updown-hamburger');
                }
                // hideHideNavMenu();
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