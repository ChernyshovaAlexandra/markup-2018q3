$(document).ready(function () {
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
    });
    $(window).scroll(function () {
        if($(this).scrollTop() > 1) {
            $('.header-inner').css({
                'position': 'fixed',
                'background-color': 'rgba(0,0,0, 0.2)'
            });
        }
    });
   $('.menu').children('li').click(function(){
       $('.menu').children('li').removeClass('active');
       $(this).addClass('active');
   });

   $('.searching-form').click(function () {
       $('.searching-form').toggleClass('active');
   });
});