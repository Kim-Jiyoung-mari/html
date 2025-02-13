//썸네일 변경
const thumnail = document.querySelectorAll('.thumnail a img');
const bigImage = document.querySelector('.left_img .big img');
console.log(thumnail, bigImage);
console.log(thumnail[0].parentElement);

//두번째 썸네일에 마우스 올렸을 때 큰 이미지 big2.jpg변경
// thumnail[1].addEventListner('mouseover',()=>{});
function thum_remove(){
    // 1,2,3,4,5를 다 제거하고 <1-1>
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
    thumnail[2].parentElement.classList.remove('active');
    thumnail[3].parentElement.classList.remove('active');
    thumnail[4].parentElement.classList.remove('active');
}
function bigSrc(num){ //<2-1> 매개변수 생성
    return bigImage.src = `./images/big_thum${num}.jpg` // <2-3> 전달 받음
}
thumnail[0].addEventListener('mouseover',function(){
    bigSrc(1);// <2-2> 매개변수 호출
    thum_remove(); // 함수 호출 : 모두 제거한 후에 <1-2>
    thumnail[0].parentElement.classList = 'active'; // 원하는 거만 활성화가 실행한다 <1-3>
});
thumnail[1].addEventListener('mouseover',function(){
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
});
thumnail[2].addEventListener('mouseover',function(){
    bigSrc(3);
    thum_remove();
    thumnail[2].parentElement.classList = 'active';
});
thumnail[3].addEventListener('mouseover',function(){
    bigSrc(4);
    thum_remove();
    thumnail[3].parentElement.classList = 'active';
});
thumnail[4].addEventListener('mouseover',function(){
    bigSrc(5);
    thum_remove();
    thumnail[4].parentElement.classList = 'active';
});

//  장바구니 클릭시 팝업 보이기
//    1. 초기값 : 팝업 숨기기
//    2. 장바구니 버튼 클릭시 
//    3. 팝업 보이기
//    4. 팝업 내 '쇼핑 계속하기'클릭시 
//    5. 팝업 숨기기
const cartPopup = document.querySelector('.cart_bg');
const cartBtn = document.querySelector('.cart');
const shoppingBtn = document.querySelector('.cart_container .link a:nth-child(1)');
console.log(cartPopup, cartBtn, shoppingBtn);

cartPopup.style.display = 'none';
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
shoppingBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto'; // 바디 스크롤 다시 생기기
})

// 탭 내용 바꾸기

//  1.  (초기세팅)
//    1. "tapC" 탭내용 모두 숨기기 => 함수생성 "tabCHide"
//    2. 탭내용 1 보이기
//    3. 탭제목 클래스 초기화 => 함수생성 "tabClsReset"
//    4. 탭제목 1 클래스 적용
const tabC = document.querySelectorAll('.tab_contents > div');
const tabT = document.querySelectorAll('.tab a');
console.log(tabC, tabT);
for(let i of tabC){
    function tabCHide (){ /* 탭내용 모두 숨기기용 함수 : 생성 */
        for(let i of tabC) i.style.display = 'none';
    }
}
function tabClsReset(){/* 클래스 초기화 함수 : 생성 */
    for(let i of tabT) i.classList.remove('active');
}
tabCHide();
tabClsReset();

tabC[0].style.display = 'block';
tabT[0].classList.add('active');

// 2. "tabT" 탭 제목을 클릭했을 때(1,2,3,4 모두 가능)
//     1. 탭제목 클래스 초기화 
//     2. 탭제목 클래스 적용(현재 이벤트 대상) 
//     3. 탭내용 모두 숨기기 
//     4. 탭내용 보이기 (탭제목 현재 이벤트 대상의 내용의 인덱스)
tabT.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        tabClsReset();
        target.classList.add('active');
        //누를 때 클래스를 옮기기
        tabCHide();
        tabC[index].style.display = 'block';
        e.preventDefault();
    })
})