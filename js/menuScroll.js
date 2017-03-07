$(window).bind('scroll', function () {
    if ($(window).scrollTop()) {
        $('#menuTop').addClass('fixedMenu');
        $('#contentRight').addClass('fixedContent');
    } else {
        $('#menuTop').removeClass('fixedMenu');
        $('#contentRight').removeClass('fixedContent');
    }
});
