let $array_1 = [],
    $array_2 = [],
    $position = 1.3,
    $classArray = [];

let header = $(".c-header"),
    offset = header.outerHeight(),
    offset_top = header.length > 0 ? header.offset().top : 0,
    hash_id = '';

let callback_finish = function () {
    let position = $(hash_id).offset().top;
    $("html,body").animate({ scrollTop: position - offset }, 1000);
};

let lazy = new LazyLoad({
    elements_selector: ".lazy",
    // load_delay: 200
    callback_finish: callback_finish
});

let parallax = new universalParallax().init({
    speed: 8.0
});

function slideMainvisual() {
    var swiper = new Swiper(".c-mainvisual .swiper .swiper-container", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 2000,
        pagination: {
            el: ".c-mainvisual .swiper .swiper-pagination",
            clickable: true,
        },
        // loop: true,
        // loopFillGroupWithBlank: true,
        effect: "fade",
        direction: 'horizontal',
        lazy: {
            loadPrevNext: true,
        },
        allowTouchMove: false
    });
}

function slideHistorys() {
    var swiper = new Swiper(".c-historys .swiper .swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.c-historys .swiper .swiper-button-next',
            prevEl: '.c-historys .swiper .swiper-button-prev',
        },
        pagination: {
            el: '.c-historys .swiper .swiper-pagination',
            type: 'fraction'
        },
        allowTouchMove: true
    });
}

function slide() {
    let slides = '.c-news2.sliders .swiper',
        slide_length = $(slides + ' .swiper-container .swiper-wrapper .swiper-slide').length;

    let slide = new Swiper(slides + ' .swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: slide_length <= 1 ? false : true,
        loopFillGroupWithBlank: false,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: slides + ' .swiper-button-next',
            prevEl: slides + ' .swiper-button-prev',
        },
        pagination: {
            el: slides + " .swiper-pagination",
            clickable: true,
        },
        allowTouchMove: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 40,
            },
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 40,
            },
            581: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 40,
            },
        },
    });
}

function slide2() {
    let slide = new Swiper('.c-products.sliders .swiper .swiper-container', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
        loop: false,
        loopFillGroupWithBlank: false,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.c-products.sliders .swiper .swiper-button-next',
            prevEl: '.c-products.sliders .swiper .swiper-button-prev',
        },
        pagination: {
            el: ".c-products.sliders .swiper .swiper-pagination",
            clickable: true,
        },
        allowTouchMove: true
    });
}

function slide3() {
    let slide = new Swiper('.c-renter__thumb .swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        loopFillGroupWithBlank: true,
        spaceBetween: 20,
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: ".c-renter__thumb .swiper .swiper-pagination",
            clickable: true,
        }
    });
}

function slide4() {
    let slide = new Swiper('.c-imgs3.swiper', {
        spaceBetween: 1,
        slidesPerView: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        spaceBetween: 10,
        centeredSlides: true,
        roundLengths: true,
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: ".c-imgs3.swiper .swiper-pagination",
            clickable: true,
        },
        // navigation: {
        //     nextEl: ".c-imgs3.swiper .swiper-button-next",
        //     prevEl: ".c-imgs3.swiper .swiper-button-prev",
        // },
    });
}

// function slide5() {
//     let slide = new Swiper('.c-products.sliders.c-products--special .swiper .swiper-container', {
//         slidesPerView: 3,
//         slidesPerGroup: 1,
//         spaceBetween: 70,
//         centeredSlides: true,
//         roundLengths: true,
//         loop: true,
//         loopFillGroupWithBlank: false,
//         loopAdditionalSlides: 30,
//         lazy: {
//             loadPrevNext: true,
//         },
//         navigation: {
//             nextEl: '.c-products.sliders.c-products--special .swiper .swiper-button-next',
//             prevEl: '.c-products.sliders.c-products--special .swiper .swiper-button-prev',
//         },
//         pagination: {
//             el: ".c-products.sliders.c-products--special .swiper .swiper-pagination",
//             clickable: true,
//         },
//         allowTouchMove: true,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false
//         },
//     });
// }

function slideGallery() {
    var thunbs = new Swiper(".c-slide-gallery .swiper-thumb", {
        spaceBetween: 2,
        slidesPerView: 5,
        freeMode: false,
        watchSlidesProgress: true,
    });
    var main = new Swiper(".c-slide-gallery .swiper-main", {
        spaceBetween: 10,
        thumbs: {
            swiper: thunbs,
        },
    });
}

function animation() {
    $classArray.push($(".p-fadeinup"));
    $(".p-fadeinup").css("visibility", "hidden");

    $classArray.push($(".p-fadein"));
    $(".p-fadein").css("visibility", "hidden");

    $classArray.push($(".p-width"));
    $(".p-width").css("visibility", "hidden");

    $classArray.push($(".p-fadeinblur"));
    $(".p-fadeinblur").css("visibility", "hidden");

    $classArray.push($(".p-fadeinscale"));
    $(".p-fadeinscale").css("visibility", "hidden");

    $classArray.push($(".p-height"));
    $(".p-height").css("visibility", "hidden");

    $classArray.push($(".p-fadeinleft"));
    $(".p-fadeinleft").css("visibility", "hidden");

    for (let i in $classArray) {
        $.each($classArray[i], function (index, element) {
            $array_1.push(element);
        });
        $array_2.push($array_1);
        $array_1 = [];
    }

    $(window).on("load scroll", function () {
        for (let i in $classArray) {

            $.each($classArray[i], function (index, element) {
                aniFunc($(this), index, i);
            });
        }

    });
}

function aniFunc($target, junban, type) {
    let windowHeight = $(window).height(),
        topWindow = $(window).scrollTop(),
        adjustHeight = (windowHeight / $position).toFixed(0),
        targetPosition;

    $target.each(function () {
        targetPosition = $target.offset().top;

        if (topWindow > targetPosition - adjustHeight) {
            if (type == 0) {
                $($array_2[type][junban]).addClass("p-ani-fadeInUp");
                if ($($array_2[type][junban]).hasClass('add-animations')) {
                    $($array_2[type][junban]).addClass('img-wrap');
                }
            } else if (type == 1) { $($array_2[type][junban]).addClass("p-ani-fadeIn"); } else if (type == 2) { $($array_2[type][junban]).addClass("p-ani-width"); } else if (type == 3) { $($array_2[type][junban]).addClass("p-ani-fadeInBlur"); } else if (type == 4) { $($array_2[type][junban]).addClass("p-ani-fadeInScale"); } else if (type == 5) { $($array_2[type][junban]).addClass("p-ani-height"); } else if (type == 6) { $($array_2[type][junban]).addClass("p-ani-fadeInLeft"); }

        }
    });
}

function stickyHeader() {
    let wp = $(window);

    if ($('main.p-top').length) {
        let offset_mainvisual = $('.c-mainvisual').height();
        let scroll = wp.scrollTop();
        let action = $('.c-action');

        if (scroll < offset_mainvisual) header.addClass('transparent');
        wp.scroll(function () {
            scroll = wp.scrollTop();
            if (scroll >= offset_mainvisual) header.removeClass('transparent');
            else header.addClass('transparent');
            // if (scroll >= offset_mainvisual) header.removeClass('transparent'), action.fadeOut();
            // else header.addClass('transparent'), action.fadeIn();
        });
    }

    // wp.scroll(function() {
    //     let scroll = wp.scrollTop();
    //     if (scroll >= 0) header.addClass('fixed');
    //     else header.removeClass('fixed');
    // });
}

function btnMenuToggle() {
    $('.btn-toggle').click(function () {
        let that = $(this);
        let header = $('.c-header');
        let menu = $('.c-menu');

        if (!that.hasClass('change')) {
            that.addClass('change');
            header.addClass('on');
            menu.addClass('is-show');
        } else {
            that.removeClass('change');
            header.removeClass('on');
            menu.removeClass('is-show');
        }
    })
}

function handleCollapsible() {
    $('.c-collapsible .header').click(function () {
        if (!$(this).parent().hasClass('unhide')) {
            $('.c-collapsible .header.show').removeClass('show');
            $(this).next('.content').slideToggle();
        }
    })
}

function scrollByHash() {
    let current_hash = window.location.hash;

    if (current_hash && $(current_hash).length) {
        let total_lazy = $(".lazy").length;
        let total_lazy_loaded = $(".lazy.loaded").length;

        if (total_lazy_loaded < total_lazy) {
            lazy.loadAll();
            hash_id = current_hash;
        } else {
            let position = $(current_hash).offset().top;
            $("html,body")
                .delay(500)
                .animate({ scrollTop: position - offset }, 1500);
        }
    }
}

function scrollToDiv() {
    $('a[href*="#"]').click(function (e) {
        let element = $(this);

        let current_hash = window.location.hash;
        let current_url = window.location.href.replace(current_hash, "");

        let href = element.attr("href");
        let href_path = href.replace(current_url, "");
        let href_hash = href_path.slice(href_path.indexOf("#"));
        let href_origin = href.replace(href_hash, "");

        // if (href_origin == current_url) {
        let total_lazy = $(".lazy").length;
        let total_lazy_loaded = $(".lazy.loaded").length;

        e.preventDefault();

        if (total_lazy_loaded < total_lazy) {
            lazy.loadAll();
            hash_id = href_hash;
        } else {
            let position = $(href_hash).offset().top;
            $("html,body").animate({ scrollTop: position - offset }, 1000);
        }
        // }
    });
}

function handleBeforePrint() {
    $(window).on('beforeprint', function () {
        for (let i in $classArray) {
            $.each($classArray[i], function (index, element) {
                $(this).addClass("p-ani-fadeIn");
            });
        }
        lazy.loadAll();
    });
}

$(function () {
    // stickyHeader();
    animation();
    btnMenuToggle();
    scrollToDiv();
    handleCollapsible();
    // handleBeforePrint();
});

$(window).on('load', function () {
    scrollByHash();
})