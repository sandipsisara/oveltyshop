$(document).ready(function(){

    $('#fullscreen-banner').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav:true,
        navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

            $('#slide-arrow-2').owlCarousel({
                loop: true,
                margin: 20,
                dots: false,
                nav:true,
                navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right'></i>"],
                autoplay: true,
                autoplayTimeout: 1500,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items:2 
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });

            $('#product').owlCarousel({
                loop: true,
                margin: 30,
                dots: true,
                nav:false,
                autoplay: true,
                autoplayTimeout: 1500,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items:2 
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                   
                }
            });

            $('#slide-arrow-4').owlCarousel({
                loop: true,
                margin: 20,
                dots: false,
                nav:true,
                navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right'></i>"],
                autoplay: true,
                autoplayTimeout: 1500,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items:2 
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });

            
            $('#testimonial').owlCarousel({
                loop: true,
                margin: 10,
                dots: false,
                nav:false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items:1 
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            

        $('#seller').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav:true,
            navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right'></i>"],
            autoplay: true,
            autoplayTimeout: 1500,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items:2 
                },
                1000: {
                    items: 3
                }
            }
        });

        

        $('#client-logo').owlCarousel({
            loop: true,
            rewind: true,
            margin: 30,
            dots: false,
            nav:false,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items:3 
                },
                1000: {
                    items: 6
                }
            }
        });
        $(window).scroll(function(){
            var sticky = $('.sticky'),
                  scroll = $(window).scrollTop();
    
            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
            });

       

       
        $('.bottom_top').click(function () {
            $("html, body").animate({
                scrollTop: '0px'
            }, 500);
            return false;
        });
    
        $('.bottom_top').hide();
    
       $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('.bottom_top').fadeIn();
        }
        else {
            $('.bottom_top').fadeOut();
        }
       });
        
       setTimeout(function () {
        $('.loaderes').fadeOut();
    }, 3000)

    
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            infinite: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            asNavFor: '.slider-for',
            focusOnSelect: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            vertical: false,
            verticalSwiping: true,
            margin: 10,
        });
    

        
            
        
        
})