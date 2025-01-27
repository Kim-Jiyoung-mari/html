// const newSlide = new Swiper('.new_slide_wrap'); // 가장 기본 형태
const newSlide = new Swiper('.new_slide_wrap',{
    // 속성: 값, => ,(콤마) 주의
    autoplay:{
        delay:2000, //다음슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행
    }, //수직페이지 전환시에는 autoplay x
    loop:true, //무한반복설정 : 페이지 넘어갈 때 무한으로 루프x
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용
    slidesPerView:3, //한번에 표시되는 슬라이드 개수 
    // ↑ 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야 한다(비율로 자동처리 되기 때문에 swiper-slide에 너비설정 X)
    spaceBetween:20, // px 기준
    /* slidesPerGroup:3,  */// 한 번에 3장 넘기기
    breakpoints:{
        1200: {slidesPerView:3,}, //1200 이상일 때 3개 보이기
        800: {slidesPerView:2,}, //800 이상일 때 2개
        320: {slidesPerView:1,}, //320 이상일 때 1개
    },
});
