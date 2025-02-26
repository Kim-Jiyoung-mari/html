// 메인 스와이퍼
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

// 카운트 효과
gsap.registerPlugin(ScrollTrigger);

function countUp(element) {
    let target = parseFloat(element.getAttribute("data-count")); // 목표 숫자
    gsap.fromTo(element,
        { innerHTML: 0 }, 
        { 
            innerHTML: target, 
            duration: 1.9, // 2초 동안 증가
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // 화면의 80% 지점에서 시작
                toggleActions: "play reverse restart reverse"
            },
            snap: { innerHTML: 1 }, // 1씩 증가하도록 스냅 설정
            onUpdate: function () {
                element.innerHTML = (this.targets()[0].innerHTML * 1).toFixed(1); // 소수점 한 자리까지 표시
            }
        }
    );
}
document.querySelectorAll("#percentValue").forEach(countUp);