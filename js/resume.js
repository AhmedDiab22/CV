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

 $("html").niceScroll(({
     cursorcolor:"#039be5 ",
     cursorwidth : '10px',
     
}));



$('#container').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});
$('.sec__content ul li').click(function () {
    $('.sec__content ul li').removeClass('selected');
    $(this).addClass('selected');

    var selector = $(this).attr("data-filter");

    $('#container').isotope({
        filter : selector
    });
    return false
  })
