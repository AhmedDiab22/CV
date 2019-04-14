$(function () {

    $('.collapse ul li a , i').click(function () {
        $('html , body').animate({
            scrollTop : $('#'+ $(this).data('value')).offset().top
            },1000);
    });

    $('.collapse ul li a').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
      })
 });
