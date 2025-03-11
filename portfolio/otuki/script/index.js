//메인배너
const mainBnr = new Swiper('.main_bnr',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: ".main_bnr .swiper-scrollbar",
    },
});

//신상
const newSwiper = new Swiper('.new',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".new_wrap .swiper-scrollbar",
    },
});

// 베스트
const bestSwiper = new Swiper('.best',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".best_wrap .swiper-scrollbar",
    },
});

// 베스트리뷰
const reviewSwiper = new Swiper('.review',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".review_wrap .swiper-scrollbar",
    },
});

// 오직 오뚜기몰
const onlySwiper = new Swiper('.only',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".only_wrap .swiper-scrollbar",
    },
});