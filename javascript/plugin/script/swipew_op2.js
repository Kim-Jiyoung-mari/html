// const newSlide = new Swiper('.new_slide_wrap'); // 가장 기본 형태
const newSlide = new Swiper('.new_slide_wrap',{
    // 속성: 값, => ,(콤마) 주의
    autoplay:{
        delay:0, //다음슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행
    }, //수직페이지 전환시에는 autoplay x
    loop:true, //무한반복설정 : 페이지 넘어갈 때 무한으로 루프x
    speed:3000, //전환될 때의 시간
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용
    // direction:'vertical',
    effect:'fade',
});
