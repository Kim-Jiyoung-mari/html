const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    /* (기본) 페이지 번호 */
    pagination:{
        el:'.event-swiper + .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true, //페이지 번호 크기 차이 주는 속성
    },
    navigation:{
        nextEl: '.event-swiper + .btn .next',
        prevEl: '.event-swiper + .btn .prev',
    },
});
