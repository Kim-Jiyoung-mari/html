// 카테고리 스크롤업
// 1.탭 내용
const tabCon = document.querySelectorAll('.menu-list');

//2. 탭 버튼
const tabBtn = document.querySelectorAll('.category-list .list-btn');

console.log(tabCon);
console.log(tabBtn);

//탭 CSS 클래스 초기화
function tabClass(){
    for(let i of tabBtn) i.classList.remove('css_absole');
}
tabClass();

tabBtn[0].classList.add('css_absole');

//클릭이벤트
tabBtn.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        console.log(target);
        window.scrollTo({
            top:tabCon[index].offsetTop,
            behavior: 'smooth',
        })
        tabClass();
        tabBtn[index].classList.add('css_absole')
    })
})

// 스크롤 이벤트
// tabCon
// tabBtn
// 스크롤 내릴때 tabCon의 스크롤 상단 위치를 인식해서 그 위치에 따라 tabBtn 클래스(css_absole)변경
// 1. 의류 (초기값 클래스 미리 설정)
// 2. 가방 (스크롤 움직이자마자 바로 가방 클래스 설정)
// 3~8. 스크롤 위치에 따라 메뉴 동작하게 하기 
tabBtn[0].classList.add('css_absole');  //1. 의류 (초기값 클래스 미리 설정)
const body = document.querySelector('body,html')
window.addEventListener('scroll',function(){
    // console.log('scroll start')
    // console.log(body.scrollTop)
    // if(tabCon[1].offsetTop == 360) console.log(true)

    /* for(let i of tabCon){
        if(body.scrollTop >= i.offsetTop + 300) {tabClass(); i.classList.add('css_absole');}
    } */
    tabCon.forEach(function(t,i){
        console.log(t)
        if(body.scrollTop >= t.offsetTop) {console.log(i, t); tabClass(); tabBtn[i].classList.add('css_absole');}
    })
})
