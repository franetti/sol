const swiperCards = new Swiper('.swiper-responsive-programs', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
    effect: "cards",
    cardsEffect:{
        slideShadows:false
    }
});      

var swiperAutoplay = new Swiper(".swiper-autoplay", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,    
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true
    });

const swiperComunnity = new Swiper('.swiper-comunnity', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,                        
        },
        992: {
            slidesPerView: 2,
            
        },            
        1400: {
            slidesPerView: 3,  
            spaceBetween:5             
        },
        1700: {
            slidesPerView: 4,            
        }

    },
});          