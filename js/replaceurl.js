// jQuery( "http://urchin.dev" ).replaceAll($et_site_url);
(function($) {  // if loaded in footer use this jquery wrapper

    
	
	// $ Works! You can test it with next line if you like
    // console.log($);
    var strURI = 'urchin.dev';
    var strNewURI = $(location).attr('hostname');
    $(document).ready(function() {
            var strNewString = $('img').html().replace(/urchin.dev(.*?)/g, strNewURI+"$1");
            $('img').html(strNewString);
        });
	
})( jQuery );

// jQuery(document).ready(function( $ ) { // if loaded in header use this jquery wrapper
	
// 	// $ Works! You can test it with next line if you like
//     // console.log($);
//     var strURI = 'urchin.dev';
//     var strNewURI = $(location).attr('hostname');
//     $(document).ready(function() {
//             var strNewString = $('html').html().replace(/urchin.dev(.*?)/g, strNewURI+"$1");
//             $('html').html(strNewString);
//         });
	
// });

// var strURI = 'urchin.dev';
// var strNewURI = et_site_url;
// $(document).ready(function() {
// 	    var strNewString = $('html').html().replace(/urchin.dev(.*?)/g, strNewURI+"$1");
// 	    $('html').html(strNewString);
// 	});