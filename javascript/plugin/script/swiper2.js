//const 변수명 = new Swiper('사용자정의클래스명',{속성:값, 속성:값},)
//const 변수명 = new Swiper('사용자정의클래스명',{속성:{속성:값, 속성:값},})
const bestSwiper = new Swiper('.best_swiper',{
    //속성:값 (숫자일 때), <= 형식의 문법으로 작성
    //속성:'값' (문자일 때),
    effect:'fade', // 제자리에서 배너 이미지 변경하는 스와이퍼 효과
    autoplay:{
        delay:2000, // 실제 배너 5~7초 많이 사용
    },
});