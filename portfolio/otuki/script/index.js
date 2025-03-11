//메인배너
const mainBnr = new Swiper('.main_bnr',{
    // autoplay:{
    //     delay:5000, // 실제 배너 5~7초 많이 사용
    // },
    loop:true,
    scrollbar: {
        el: ".main_bnr .swiper-scrollbar",
    },
});

//신상 업데이트
const newSwiper = new Swiper('.row1',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
});