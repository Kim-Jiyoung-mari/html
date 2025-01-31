const eventTotal = document.querySelector('.total');
const eventCurrent = document.querySelector('.current');
const eventSlide = document.querySelectorAll('.event-swiper .swiper-slide');

console.log(eventTotal,eventSlide,eventCurrent);
eventTotal.textContent = eventSlide.length;
const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    on:{
        // 슬라이드 체인지 함수가 체인지 될 때 마다 current 대상의 내용이 인덱스로 변하게 한다
        slideChange:function(){
            eventCurrent.textContent = this.realIndex+1;
        }
    },
});
