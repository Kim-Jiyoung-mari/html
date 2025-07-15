//메인배너
const pageAll = document.querySelector('.all_page')
const pageCurrent = document.querySelector('.current_page');
const pageSlide = document.querySelectorAll('.main_swiper .slide_css');

pageAll.textContent = pageSlide.length;
const mainBnr = new Swiper('.main_swiper',{
    autoplay:{delay:4000,},
    loop:true,
    on:{
        slideChange:function(){
            pageCurrent.textContent = this.realIndex+1;
        }
    },
})

// 첫구매 혜택 슬라이드
const beneFit = new Swiper('.benefit_swiper',{
    slidesPerView:'auto',
    spaceBetween:3,
})