// 1. 작은 썸네일 이미지에 마우스를 올렸다
// 2. 위 1번 대상에만 테두리 적용 (다른 모든 요소에 테두리가 제거) classList
// 3. 위 1번 대상이 우측 큰 이미지에 나타남 
// DOM Node : 좌측 작은썸네일, 우측 이미지
// 속성 , 메서드 , 이벤트 : 마우스를 올렸다, 테두리 적용, 테두리가 제거, 나타남
const thumnail = document.querySelectorAll('.thumnail a img');
const bigImage = document.querySelector('.photo .big img');
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
    return bigImage.src = `./images/big${num}.jpg` // <2-3> 전달 받음
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

//==================상품 배송정보 JS
//0.변수 준비
const schedule = document.querySelector('.ship_schedule');
const scheduleOpen = document.querySelector('.schedule_open')

//1. (시작 전) 도착예정 정보 숨기기 (초기 세팅)
scheduleOpen.classList.add('hide'); // html에 세팅해놓은 hide 클래스 사용
//2. 도착예정 링크 클릭
// schedule.addEventListener('click',function(){
//     scheduleOpen.classList.remove('hide'); // hide를 지우면 보인다
// })
schedule.addEventListener('click',(e) => {
    e.preventDefault(); //a태그의 href 스크롤업 기능을 방지해주는 메서드
    // JS이벤트 대상으로 a태그 사용시 href='#'속성으로 인해 클릭시 자동 스크롤업 되는 문제점 발생. 
    // (위) 해결방안 : DOM객체 클릭시 발생하는 속성(a태그의 경우 href)는 이벤트 내 매개변수로 저장되는 특징이 있는데 이를 이용해 이벤트를 막아주는 메서드를 활용하면 위 문제를 해결할 수 있다.
    scheduleOpen.classList.toggle('hide');
})
//3. 도착예정정보 화면 보이기 <기본값>
//4. 도착예정 링크 클릭
//5. 도착예정 정보 숨기기 ; 작성해야할 태그는 숨기는 것
// * toggle클래스 사용 


// ================주문금액 + 주문수량 JS
// 초기값 : 주문수량(0) 주문금액(0원) 수량 1개당 39,900원
let price = 39900; // 초기 주문 금액
let number = 0; // 초기 주문 수량
let totalPrice = 0; // 최종 가격을 저장하는 변수
const product_num = document.querySelector('#product_num'); //수량표시 DOM
const plusBtn = document.querySelector('#plus');//수량증가버튼DOM
const minusBtn = document.querySelector('#minus');//수량감소버튼DOM
const orderPrice = document.querySelector('.order_price .price');//주문 금액 표시할 0원

// 0-1. 초기값 설정 (주문수량 0개 + 주문금액 0원) 표시
product_num.value = number; // input태그의 어떤 속성에 값을 넣을 건지?
orderPrice.innerText = price*number; // input태그가 아니기 때문에 값을 text로 처리해야한다.

console.log(price, number, product_num, plusBtn, minusBtn, orderPrice);
// 1. plus + 버튼 클릭시 : 표시되는 DOM과 데이터는 개별
plusBtn.addEventListener('click',()=>{
    // 2. 수량 1 증가 (최종 수량 1) ;
    number++; // 데이터 증가시킴
    product_num.value = number; // 표시DOM : 화면에 보내주기
    // 3. 수량에 따라 주문 금액 증가 39900*1
    totalPrice = price*number
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr'); 
    // ㄴ 수량*가격에 대한 결과를 innertext에 넣어주기
    // orderPrice.innerText = Number(price*number).toLocaleString('ko-kr');
})

// 1. - 버튼 클릭시 => 감소
minusBtn.addEventListener('click',()=>{
    // 2. 수량 1 감소 (최종 수량 2)
    number-- // 데이터 감소시킴
    product_num.value = number; // 표시DOM : 화면에 보내주기
    // 3. 수량에 따라 주문 금액 감소
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
})

//==========================장바구니 팝업 JS
// 1. 초기값 : 팝업 숨기기
// 2. 장바구니 버튼 클릭시 
// 3. 팝업 보이기
// 4. 팝업 내 '쇼핑 계속하기'클릭시 
// 5. 팝업 숨기기
const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_open_bg .link a:nth-child(1)');
console.log(cartPopup, cartBtn, shoppingBtn);

cartPopup.style.display = 'none'; // 팝업 숨기기 = css적으로 생각하기
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block'; // 팝업 보이기 = css적
    document.body.style.overflow = 'hidden'; // 팝업 동작되면 바디에 스크롤 없애기
})
shoppingBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto'; // 바디 스크롤 다시 생기기
})
/* 
[classList와 style속성 구분하여 적용하기]

1. 객채.classList 사용
* CSS 속성이 2~3개 이상 사용할 경우
* toggle, remove 교체, 삭제 등으로 다양한 경우에 사용할 경우

2. 객체.style 사용
* CSS속성 1~3개 적게 사용할 경우
* 객체에 CSS를 단순히 적영만 할 경우
*/