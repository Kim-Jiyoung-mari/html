// const newSlide = new Swiper('.new_slide_wrap'); // 가장 기본 형태
const newSlide = new Swiper('.new_slide_wrap',{
    // 속성: 값, => ,(콤마) 주의
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용
});

const snsSlide = new Swiper ('.sns_portfolio',{
    autoplay:{
        delay:0,
        disableOnInteraction:false, 
    },
    loop:true,
    speed:3000,
    effect:'fade'
});
