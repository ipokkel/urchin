(function ($) { // if loaded in footer use this jquery wrapper

    // DOUBLE TAP
    var timer = 0;
    $(document).on("click" , "#target" , function() {
        if(timer == 0) {
            timer = 1;
            timer = setTimeout(function(){ timer = 0; }, 600);
        }
        else { alert("double tap"); timer = 0; }
    });


})(jQuery);