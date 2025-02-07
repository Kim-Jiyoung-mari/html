const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    pagination:{
        el:'.main_swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
});

const contentSwiper = new Swiper('.c_swiper',{
    autoplay:{
        delay:6000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: ".m_row .progress .swiper-scrollbar",
    },
});