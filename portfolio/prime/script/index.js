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

// ================================================ 베스트셀러
// 전체보기
const contentSwiper = new Swiper('.all .i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .all .progress .swiper-scrollbar",
    },
});
// 마데카프라임
const primeSwiper = new Swiper('.madeca .i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .madeca .progress .swiper-scrollbar",
    },
});
// 순환탄력
const circleSwiper = new Swiper('.circulation .i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .circulation .progress .swiper-scrollbar",
    },
});
// 흡수탄력
const absorpSwiper = new Swiper('.absorption .i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .absorption .progress .swiper-scrollbar",
    },
});
// 탄력초음파
const elasticSwiper = new Swiper('.elasticity .i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .elasticity .progress .swiper-scrollbar",
    },
});
// 앰플
const ampouleSwiper = new Swiper('.ampoule .i_slide1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .ampoule .progress .swiper-scrollbar",
    },
});
// 베스트셀러 탭 내용 바꾸기
// [1]. 초기세팅
//  1. "tapC" 탭내용 모두 숨기기 => 함수생성 "tabCHide"
//  2. 탭내용 1 보이기
//  3. 탭제목 클래스 초기화 => 함수생성 "tabClsReset"
//  4. 탭제목 1 클래스 적용
const tabC = document.querySelectorAll('.row1 .tab_container > div');
const tabT = document.querySelectorAll('.row1 .t_btm a');
console.log(tabC, tabT);

function tabCHide (){ /* 탭내용 모두 숨기기용 함수 : 생성 */
    for(let i of tabC) i.style.display = 'none';
}

function tabClsReset(){/* 클래스 초기화 함수 : 생성 */
    for(let i of tabT) i.classList.remove('active');
}

tabCHide();
tabClsReset();

tabC[0].style.display = 'block';
tabT[0].classList.add('active');

//[2]. "tabT" 탭 제목을 클릭했을 때(1,2,3,4 모두 가능)    
//  1. 탭제목 클래스 초기화 
//  2. 탭제목 클래스 적용(현재 이벤트 대상) 
//  3. 탭내용 모두 숨기기 
//  4. 탭내용 보이기 (탭제목 현재 이벤트 대상의 내용의 인덱스)
tabT.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        tabClsReset();
        target.classList.add('active');

        tabCHide();
        tabC[index].style.display = 'block';

        e.preventDefault();
    });
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
const skinSwiper = new Swiper('.skin .i_slide4',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .skin .progress .swiper-scrollbar",
    },
});

//앰플
const amSwiper = new Swiper('.ampoules .i_slide4',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .ampoules .progress .swiper-scrollbar",
    },
});

//크림
const creamSwiper = new Swiper('.cream .i_slide4',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .cream .progress .swiper-scrollbar",
    },
});

//토너
const tonorSwiper = new Swiper('.tonor .i_slide4',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .tonor .progress .swiper-scrollbar",
    },
});


// 스킨케어 탭 내용 바꾸기
// [1]. 초기세팅
//  1. "tapC" 탭내용 모두 숨기기 => 함수생성 "tabCHide"
//  2. 탭내용 1 보이기
//  3. 탭제목 클래스 초기화 => 함수생성 "tabClsReset"
//  4. 탭제목 1 클래스 적용
const tabC2 = document.querySelectorAll('.row5 .tab_container > div');
const tabT2 = document.querySelectorAll('.row5 .title_btm a');
console.log(tabC2, tabT2);

function tabCHide2 (){ /* 탭내용 모두 숨기기용 함수 : 생성 */
    for(let i of tabC2) i.style.display = 'none';
}

function tabClsReset2(){/* 클래스 초기화 함수 : 생성 */
    for(let i of tabT2) i.classList.remove('active');
}

tabCHide2();
tabClsReset2();

tabC2[0].style.display = 'block';
tabT2[0].classList.add('active');

//[2]. "tabT" 탭 제목을 클릭했을 때(1,2,3,4 모두 가능)    
//  1. 탭제목 클래스 초기화 
//  2. 탭제목 클래스 적용(현재 이벤트 대상) 
//  3. 탭내용 모두 숨기기 
//  4. 탭내용 보이기 (탭제목 현재 이벤트 대상의 내용의 인덱스)
tabT2.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        tabClsReset2();
        target.classList.add('active');

        tabCHide2();
        tabC2[index].style.display = 'block';

        e.preventDefault();
    });
});
