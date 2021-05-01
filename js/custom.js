$(function () {
    // Padding Top Header
    $('.header').css("paddingTop", $('.navbar').innerHeight());
    // Add Class Navbar 
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    // Smooth Scroll To Section
    $('.header .header-info .navbar .navbar-nav .nav-item a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('filter')).offset().top - 50
        }, 1000);
    });
    // Add Class Active On Link
    $('.navbar .navbar-nav .nav-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});