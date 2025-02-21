/* 스크롤을 감지하는 이벤트 scroll, wheel(마우스휠만 동작=터치스크린, 키보드 x) */
/* 스크롤 이벤트 적용 객체는 가능한 window를 사용한다 */
window.addEventListener('scroll',function(){
    console.log(box[2].offsetTop); // 절대값
    console.log(box[2].getBoundingClientRect().y); // 값이 점점 작아짐
    if(window.scrollY > box[1].offsetTop-500) {
        topDiv.style.right = '50px'
    }else{
        topDiv.style.right = '-70px'
    }
})

const circle = document.querySelector('.circle');
window.addEventListener('mousemove',function(e){
    //console.log(e);
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

// 위로 클릭 시 스크롤 이동시키기
const topDiv = document.querySelector('.top');
const box = document.querySelectorAll('.box ');
topDiv.addEventListener('click',()=>{
    window.scrollTo({left:0, top:box[0].offsetTop, behavior:'smooth'})
    // window.scrollTo(0, 0)
    // window.scrollTo({left:0, top:0, behavior:'smooth'});
    // 버튼을 클릭하면 2번째 박스 위치로 가기
})