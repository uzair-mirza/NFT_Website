!function(e){"use strict";jQuery(document).ready((function(e){(e("#mobile-menu").slicknav({prependTo:"#mobile-menu-wrap",duration:500,label:""}),e(".wow").length)&&new WOW({boxClass:"wow",animateClass:"animated",offset:250,mobile:!0,live:!0}).init();e(".newest-item-slider-wrapper").slick({infinite:!0,margin:50,slidesToShow:2,slidesToScroll:2,arrows:!0,prevArrow:'<span class="prev"><i class="fa fa-chevron-left"></i></span>',nextArrow:'<span class="next"><i class="fa fa-chevron-right"></i></span>',responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".related-products-slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:2,arrows:!0,prevArrow:'<span class="prev"><i class="fa fa-chevron-left"></i></span>',nextArrow:'<span class="next"><i class="fa fa-chevron-right"></i></span>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]}),jQuery(window).scroll((function e(){var s=jQuery(".company-details-number");if(s.length){var i=s.offset().top,o=jQuery(".company-details-number").outerHeight(),n=jQuery(window).height();jQuery(window).scrollTop()>i+o-n&&(jQuery(window).off("scroll",e),jQuery(".c-d-n").each((function(){var e=jQuery(this);jQuery({Counter:0}).animate({Counter:e.text()},{duration:6e3,easing:"swing",step:function(){e.text(Math.ceil(this.Counter))}})})))}}))}))}(jQuery);