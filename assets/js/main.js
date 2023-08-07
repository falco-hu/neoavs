const copyToClipBoard = (item) => {
    var copyText = item.querySelector('.content').innerHTML;
    navigator.clipboard.writeText(copyText);
    item.classList.add("copied");
    setTimeout(() => {
        item.classList.remove("copied");
    }, 2000);
};

let init_slider = false;
const servicesSliderMobile = (init) => {
    console.log(init, init_slider)
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

(function ($) {
    $(() => {
        servicesSliderMobile($(window).width() <= 992 ? true : false);
    });
    
    $(window).on('resize', () => {
        servicesSliderMobile($(window).width() <= 992 ? true : false);
    });
})(jQuery);
