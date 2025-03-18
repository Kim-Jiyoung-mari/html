//메인배너
const pageAll = document.querySelector('.allpage')
const pageCurrent = document.querySelector('.current_page');
const pageSlide = document.querySelectorAll('.swiper-horizontal .swiper-slide');
console.log(pageAll,pageCurrent,pageSlide)

pageAll.textContent = pageSlide.length;
const mainBnr = new Swiper('.swiper-horizontal',{
    autoplay:{delay:3000,},
    loop:true,
    on:{
        slideChange:function(){
            pageCurrent.textContent = this.realIndex+1;
        }
    },
})

// 첫구매 혜택 슬라이드
const beneFit = new Swiper('.benefit_horizontal',{
    slidesPerView:3,
    spaceBetween:3,
})