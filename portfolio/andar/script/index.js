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
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row2 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".s_btn .next",
        prevEl: ".s_btn .prev",
    }
});

const contentSwiper2 = new Swiper('.c_swiper2',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row3 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".s_btn .next",
        prevEl: ".s_btn .prev",
    }
});

const contentSwiper3 = new Swiper('.c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".s_btn .next",
        prevEl: ".s_btn .prev",
    }
});
