(function($){
    $('select').niceSelect();
    $(".back-btn").click(function(){
        $(".payment-form").css("opacity", "1");
        $(".payment-form").css("visibility", "visible");
        $(".payment-form").css("padding-top", "5%");
      });
    $(".form-btn.back").click(function(){
        $(".payment-form").css("opacity", "0");
        $(".payment-form").css("visibility", "hidden");
        $(".payment-form").css("padding-top", "0");
      });

})(jQuery);