$(document).ready(function() {
    $(this).scrollTop(0);
    var getTop = $('.box').offset().top;
    $('.box').hide();
    $(document).scroll(function() {
        console.log($('.box').offset());
        if (getTop == $('.box').offset().top) {
            $('.box').css('display', 'none');
        } else {
            $('.box').css('display', 'block');
        }
    });
    $(document).scroll(function() {
        if (window.pageYOffset > 10) {
            $('.navbar').css('background-color', '#fff');
            $('.navbar').css('padding', '15px 0');
            $('.navbar').css('box-shadow', '0 .125rem .25rem rgba(0, 0, 0, .075)');
        } else {
            $('.navbar').css('background-color', 'transparent');
            $('.navbar').css('padding', '18px 0');
            $('.navbar').css('box-shadow', 'none');
        }
    });
});