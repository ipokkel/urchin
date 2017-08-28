(function ($) { // if loaded in footer use this jquery wrapper

        $(document).ready(function () {

            /**
             * Menu Hide
             */

            // for Divi the only part if the script you may want to change is the menuOffset, detachPoint and hideShowOffset
            var previousScroll = 0, // previous scroll position. (default = 0)
                menuOffset = 10, // height of menu (once scroll passed it, menu is hidden). (default = 60)
                detachPoint = 250, // point of detach (after scroll passed it, menu is fixed). (default = 650)
                hideShowOffset = 6, // scrolling value after which triggers hide/show menu. (default= 6)
                header_height = parseInt(document.getElementById( 'main-header' ).attributes.getNamedItem("data-height-onload").nodeValue), //get data-height
                padding_value = Math.round(header_height / 2), // divide data-height in half
                $body = $( 'body' ),
                showHideNavTimer = 3000; // ms

            // if (!$('#main-header').hasClass('invisible')) {
            //     $('#main-header').addClass('invisible');
            // }

            // $( 'article section:first-child' ).css( { 'padding-top' : padding_value, 'padding-bottom' : padding_value } );

            console.log(header_height);

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

    })(jQuery);