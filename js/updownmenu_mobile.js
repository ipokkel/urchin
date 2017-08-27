(function ($) { // if loaded in footer use this jquery wrapper
    
        $(document).ready(function () {
    
            // alert("This is: " + et_header_height);
            // data-height-onload
            var header_height = parseInt(document.getElementById("main-header").attributes.getNamedItem("data-height-onload").nodeValue),
                padding_value = Math.round(header_height / 2);
            console.log(padding_value);
                       
            /**
             * Menu Hide
             */
    
            // for Divi the only part if the script you may want to change is the menuOffset, detachPoint and hideShowOffset
            var previousScroll = 0, // previous scroll position. (default = 0)
                menuOffset = 80, // height of menu (once scroll passed it, menu is hidden). (default = 60)
                detachPoint = 650, // point of detach (after scroll passed it, menu is fixed). (default = 650)
                hideShowOffset = 6, // scrolling value after which triggers hide/show menu. (default= 6)
                $body = $( 'body' ),
                showHideNavTimer = 3500; // ms                 

            var on_mobile_browser = '';
            
            if (navigator.userAgent.match( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/ ) || $('body').hasClass('et_mobile_device')) {
                on_mobile_browser = true;
            }
    
                /**
                 * Show menu if hidden when scrolled back to top
                 */
                function showHideNavMenu() {
                    $('#main-header').removeClass('invisible');
                    $('#main-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
                    $('#top-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
                    $body.removeClass( 'et_hide_nav' );
                    $body.addClass( 'et_hide_nav_disabled' );
                }
                /**
                 * Hide navigation on mobile device
                 */
                function hideHideNavMenu() {
                    $('#main-header').removeClass('invisible');
                    $('#main-header').css( { 'transform': 'translateY(0)', 'opacity': '0' } );
                    $('#top-header').css( { 'transform': 'translateY(0)', 'opacity': '0' } );
                    $body.removeClass( 'et_hide_nav_disabled' );
                    $body.addClass( 'et_hide_nav' );                    
                }

                /**
                 * Check for mobile and hide menu
                 */
                if (on_mobile_browser) {
                    // $('#main-header').removeClass('invisible');
                    // $('#main-header').css( { 'transform': 'translateY(0)', 'opacity': '0' } );
                    // $('page-container').css({ 'padding-top': '0' });
                    // $body.removeClass( 'et_hide_nav_disabled' );
                    // $body.addClass( 'et_hide_nav' );


                    $('#main-header').addClass('invisible');
                    $('#page-container').addClass('invisible');
                    $("article section:first-child").css( { 'padding-top' : padding_value, 'padding-bottom' : padding_value } );
                    
                 }


                /**
             * on scroll hide/show menu
             */
            $(window).scroll(function () {
    
                if (!$('#main-header').hasClass('expanded')) {
                    var currentScroll = $(this).scrollTop(), // gets current scroll position
                        scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling
    
                    // if scrolled past menu
                    if (currentScroll > menuOffset) {
                        // if scrolled past detach point add class to fix menu
                        if (currentScroll > detachPoint) {
                            if (!$('#main-header').hasClass('detached'))
                                $('#main-header').addClass('detached');
                            $("article section:first-child").css( { 'margin-top' : header_height, 'padding-top' : '0px', 'padding-bottom' : '0px' } );
                        }
    
                        // if scrolling faster than hideShowOffset hide/show menu
                        if (scrollDifference >= hideShowOffset) {
                            if (currentScroll > previousScroll) {
                                // scrolling down; hide menu
                                if (!$('#main-header').hasClass('invisible'))
                                    $('#main-header').addClass('invisible');
                                // $('#top-header').addClass('invisible');
                            } else {
                                // scrolling up; show menu
                                if ($('#main-header').hasClass('invisible'))
                                    $('#main-header').removeClass('invisible');
                                // $('#top-header').removeClass('invisible');
                            }
                        }
                    } else {
                        // only remove “detached” class if user is at the top of document (menu jump fix)
                        // if (currentScroll <= 0) { 
                            if (currentScroll <= 0) { 
                            $('#main-header').removeClass();
                            setTimeout(showHideNavMenu, showHideNavTimer); // (perform function, delay time in ms)
                            // $('#top-header').removeClass();
                        }
                    }
    
                    // if user is at the bottom of document show menu
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                        $('#main-header').removeClass('invisible');
                        // $('#top-header').removeClass('invisible');
                    }
    
                    // replace previous scroll position with new one
                    previousScroll = currentScroll;
                }
            })
    
    
    
        });
    
})(jQuery); // if loaded in footer use this jquery wrapper
