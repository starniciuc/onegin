$(document).ready(function () {
    $('.footerSlider').iosSlider({
        scrollbar: true,
        snapToChildren: true,
        desktopClickDrag: false,
        scrollbarLocation: 'top',
        scrollbarMargin: '10px 10px 0 10px',
        scrollbarBorderRadius: '0',
        responsiveSlideWidth: true,
        infiniteSlider: true,
        startAtSlide: '2',
        navPrevSelector: $('.prevButtonF'),
        navNextSelector: $('.nextButtonF')
    });

    $('.fotoSlider').iosSlider({
        scrollbar: true,
        snapToChildren: true,
        desktopClickDrag: false,
        scrollbarLocation: 'top',
        scrollbarMargin: '10px 10px 0 10px',
        scrollbarBorderRadius: '0',
        responsiveSlideWidth: true,
        infiniteSlider: true,
        startAtSlide: '2',
        navSlideSelector: $('.iosSliderButtons .button'),
        onSlideChange: slideContentChange,
        onSlideComplete: slideContentComplete,
        onSliderLoaded: slideContentLoaded,
        navPrevSelector: $('.nextButton'),
        navNextSelector: $('.prevButton')
    });

    function slideContentChange(args) {

        /* indicator */
        $(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
        $(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
    }

    function slideContentComplete(args) {

        if (!args.slideChanged)
            return false;

        /* animation */
        $(args.sliderObject).find('.text1, .text2').attr('style', '');

        $(args.currentSlideObject).children('.text1').animate({
            right: '100px',
            opacity: '1'
        }, 400, 'easeOutQuint');

        $(args.currentSlideObject).children('.text2').delay(200).animate({
            right: '50px',
            opacity: '1'
        }, 400, 'easeOutQuint');

    }

    function slideContentLoaded(args) {

        /* animation */
        $(args.sliderObject).find('.text1, .text2').attr('style', '');

        $(args.currentSlideObject).children('.text1').animate({
            right: '100px',
            opacity: '1'
        }, 400, 'easeOutQuint');

        $(args.currentSlideObject).children('.text2').delay(200).animate({
            right: '50px',
            opacity: '1'
        }, 400, 'easeOutQuint');

        /* indicator */
        $(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
        $(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

    }

});
$(".dropdown-menu li a").click(function () {

    $(".btn:first-child").text($(this).text());
    $(".btn:first-child").val($(this).text());

});
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

var navigation = responsiveNav(".nav-collapse", {
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 284, // Integer: Speed of the transition, in milliseconds
    label: "Menu", // String: Label for the navigation toggle
    insert: "after", // String: Insert the toggle before or after the navigation
    customToggle: "", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to <html> element
    init: function () {
    }, // Function: Init callback
    open: function () {
    }, // Function: Open callback
    close: function () {
    }               // Function: Close callback
});

$(document).ready(function () {
    var $menu = $("#menu");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 199 && $menu.hasClass("default")) {

            $menu.removeClass("default").addClass("fixed");
            //$(".iosSlider").css("margin-top", '66px');
            //$(".hideMenu").css("margin-top", '56px');
        } else if ($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
            //$(".iosSlider").css("margin-top", '20px');
            //$(".hideMenu").css("margin-top", '10px');
        }
    });//scroll
});
$(document).ready(function () {
    if ($('#slider-service').length > 0) {
        $('#slider-service').slick({
            centerMode: true,
            slidesToShow: 7,
            variableWidth: true
        });

        var $nextCenter = $(".slick-center").next();
        var $next = $nextCenter.next();
        $nextCenter.addClass("tree");
        $next.addClass("two");

        var $prevCenter = $(".slick-center").prev();
        var $prev = $prevCenter.prev();
        $prevCenter.addClass("tree");
        $prev.addClass("two");

        $("#slider-service").click(function () {
            $(".slick-slide").removeClass("tree");
            $(".slick-slide").removeClass("two");
            var $nextCenter = $(".slick-center").next();
            var $next = $nextCenter.next();
            $nextCenter.addClass("tree");
            $next.addClass("two");

            var $prevCenter = $(".slick-center").prev();
            var $prev = $prevCenter.prev();
            $prevCenter.addClass("tree");
            $prev.addClass("two");
        });
    }
});