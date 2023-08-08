const copyToClipBoard = (item) => {
    var copyText = $(item).parents('.copy-clipboard').find('.content a').text();
    navigator.clipboard.writeText(copyText);
    $(item).parents('.copy-clipboard').addClass("copied");
    setTimeout(() => {
        $(item).parents('.copy-clipboard').removeClass("copied");
    }, 2000);
};

let init_slider = false;
const servicesSliderMobile = (init) => {
    if(init && !init_slider){
        $('.services .boxes').slick({
            infinite: true,
            slidesToShow: 1,
            variableWidth: true
        });
        init_slider = true;
    }else if(!init && init_slider){
        $('.services .boxes').slick('unslick');
        init_slider = false;
    }
}

const mobileMenu = () => {
    if($('body').hasClass('mobile-menu-open')){
        $('body').removeClass('mobile-menu-open')
    }else{
        $('body').addClass('mobile-menu-open')
    }
}

const pageNavigation = (hash) => {
    if(hash != '' && $(`.${hash}`).length > 0){
        $("html, body").animate({ scrollTop:  $(`.${hash}`).offset().top});
    }
}

(function ($) {
    $(() => {
        pageNavigation(window.location.hash.replace('#', ''));
        servicesSliderMobile($(window).width() <= 992 ? true : false);
    });
    
    $('.site-nav').on('click', function(){
        pageNavigation($(this).attr('href').replace('#', ''));
    });
    
    $(window).on('resize', () => {
        servicesSliderMobile($(window).width() <= 992 ? true : false);
    });
})(jQuery);
