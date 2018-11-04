$(document).ready(function () {
    console.log(1);
   $('.menu').children('li').click(function(){
       $('.menu').children('li').removeClass('active');
       $(this).addClass('active');
       console.log(2)
   });

   $('.searching-form').click(function () {
       $('.searching-form').toggleClass('active');
   });
});