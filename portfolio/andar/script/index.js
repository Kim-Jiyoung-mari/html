const mainSwiper = new Swiper('.swiper',{
    /* effect:'fade',  */// 제자리에서 배너 이미지 변경하는 스와이퍼 효과
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    pagination:{
        el:'.main_swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true, //페이지 번호 크기 차이 주는 속성
    },
});

const contentSwiper = new Swiper('.swiper',{
    /* effect:'fade',  */// 제자리에서 배너 이미지 변경하는 스와이퍼 효과
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: ".m_row .progress .swiper-scrollbar",
    },
});