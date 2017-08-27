(function ($) { // if loaded in footer use this jquery wrapper

    $(document).ready(function () {

        /**
         * Menu Hide
         */
        // function et_hide_nav_transofrm( ) {
		// 	var $body = $( 'body' ),
		// 		$body_height = $( document ).height(),
		// 		$viewport_height = $( window ).height() + et_header_height + 200;

		// 	if ( $body.hasClass( 'et_hide_nav' ) ||  $body.hasClass( 'et_hide_nav_disabled' ) && ( $body.hasClass( 'et_fixed_nav' ) ) ) {
		// 		if ( $body_height > $viewport_height ) {
		// 			if ( $body.hasClass( 'et_hide_nav_disabled' ) ) {
		// 				$body.addClass( 'et_hide_nav' );
		// 				$body.removeClass( 'et_hide_nav_disabled' );
		// 			}
		// 			$('#main-header').css( 'transform', 'translateY(-' + et_header_height +'px)' );
		// 			$('#top-header').css( 'transform', 'translateY(-' + et_header_height +'px)' );
		// 		} else {
		// 			$('#main-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
		// 			$('#top-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
		// 			$body.removeClass( 'et_hide_nav' );
		// 			$body.addClass( 'et_hide_nav_disabled' );
		// 		}
		// 	}
        // }
        
        //  var $body = $('body'),
        //     $body_height = $(document).height(),
        //     $viewport_height = $(window).height() + 250;
        //     var $top_header = $( '#top-header' ),
        //     secondary_nav_height = $top_header.length && $top_header.is( ':visible' ) ? parseInt( $top_header.innerHeight() ) : 0,
        //     admin_bar_height     = $( '#wpadminbar' ).length ? parseInt( $( '#wpadminbar' ).innerHeight() ) : 0,
        //     $slide_menu_container = $( '.et_header_style_slide .et_slide_in_menu_container' );

        // et_header_height      = parseInt( $( '#main-header' ).innerHeight() ) + secondary_nav_height;
        // et_header_modifier    = et_header_height <= 90 ? et_header_height - 29 : et_header_height - 56;
        // et_header_offset      = et_header_modifier + admin_bar_height;

        // et_primary_header_top = secondary_nav_height + admin_bar_height;

        // if ( $slide_menu_container.length && ! $( 'body' ).hasClass( 'et_pb_slide_menu_active' ) ) {
        //     $slide_menu_container.css( { right: '-' + parseInt( $slide_menu_container.innerWidth() ) + 'px', 'display' : 'none' } );

        //     if ( $( 'body' ).hasClass( 'et_boxed_layout' ) ) {
        //         var page_container_margin = $main_container_wrapper.css( 'margin-left' );
        //         $main_header.css( { left : page_container_margin } );
        //     }
        // }
            

        // if ($body_height > $viewport_height) { 

            // $('#top-header').addClass('starthidden');
            $('#main-header').addClass('starthidden'); // ** IMPORTANT **  This only works if page is long enough to allow scroll
            $body.addClass( 'et_hide_nav' );
            $body.removeClass( 'et_hide_nav_disabled' );

            // $('#main-header').css( 'transform', 'translateY(-' + et_header_height +'px)', 'opacity: 0' );
            // $('#top-header').css( 'transform', 'translateY(-' + et_header_height +'px)' );
            // $('#main-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
        // }
 /* */       

        // for Divi the only part if the script you may want to change is the menuOffset, detachPoint and hideShowOffset
        var previousScroll = 0, // previous scroll position. (default = 0)
            menuOffset = 60, // height of menu (once scroll passed it, menu is hidden). (default = 60)
            detachPoint = 650, // point of detach (after scroll passed it, menu is fixed). (default = 650)
            hideShowOffset = 6; // scrolling value after which triggers hide/show menu. (default= 6)

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