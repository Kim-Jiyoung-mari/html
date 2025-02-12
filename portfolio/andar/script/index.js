// const aClick = document.querySelectorAll('nav a');
// console.log(aClick)
// aClick.addEventListener('click',(e) => {
//     
// })

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

// 2행 에어쿨링
const contentSwiper = new Swiper('.c_swiper',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row2 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row2 .s_btn .next",
        prevEl: ".row2 .s_btn .prev",
    }
});

// 3행 신상
const contentSwiper2 = new Swiper('.c_swiper2',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row3 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row3 .s_btn .next",
        prevEl: ".row3 .s_btn .prev",
    }
});

//베스트셀러
const contentSwiper3 = new Swiper('.c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row4 .s_btn .next",
        prevEl: ".row4 .s_btn .prev",
    }
});

