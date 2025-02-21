const mainS = new Swiper('#main',{
    mousewheel:true,
    direction:'vertical',
    behavior:'smooth',
    on:{
        slideChangeTransitionEnd:function(){
            setTimeout(()=> ScrollTrigger.refresh() ,0)
        }
    },
});

// 위로 버튼 클릭시 스크롤 이동시키기
const topBtn = document.querySelector('.top');
const slide = document.querySelectorAll('.swiper-slide');
console.log(topBtn,slide);

topBtn.addEventListener('click',()=>{
    mainS.slideTo(0, 1000);
});
