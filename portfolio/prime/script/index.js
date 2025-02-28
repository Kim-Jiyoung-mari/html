//메인배너
const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: ".main_swiper .swiper-scrollbar",
    },
});

// 2행 베스트셀러
const contentSwiper = new Swiper('.i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .row1 .progress .swiper-scrollbar",
    },
});

// 3행 마데카 프라임
const madecaSwiper = new Swiper('.i_slide2',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .row3 .progress .swiper-scrollbar",
    },
});

// 4행 화이트펄
const whiteSwiper = new Swiper('.i_slide3',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .row4 .progress .swiper-scrollbar",
    },
});

// 5행 스킨케어
const skinSwiper = new Swiper('.i_slide4',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .row5 .progress .swiper-scrollbar",
    },
});
