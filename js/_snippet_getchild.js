jQuery(document).ready(function ($) { // if loaded in header use this jquery wrapper
   
    $( "div p:first-of-type" ).css( "font-size: 10px" );
    $( "article div:nth-child(2)" ).removeClass('bg-yellow');
    $( "article div:nth-child(2)" ).addClass('bg-purple');

    // })(jQuery); // if loaded in footer use this jquery wrapper
    }); // if loaded in header use this jquery wrapper


$(document).ready(function(){
    $("article section:first-child").css("background-color", "orange"); // works
    $( "article div:nth-child(2)" ).addClass( "purple-bg");
    // does not work  $(".main-content div:first-child").css("background-color", "red");
    $( "section.yellow-bg div:nth-child(2)" ).addClass("purple-bg"); 

    
});