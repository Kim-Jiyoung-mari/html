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
    for(let i of tabT) i.classList.remove('active_info');
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
        target.classList.add('active_info');
        //누를 때 클래스를 옮기기
        tabCHide();
        tabC[index].style.display = 'block';
        e.preventDefault();
    })
})

// 주문수량 + 주문금액 JS
// 변수 설정 → 초기값 : 주문수량 = 0개 / 주문 금액 = 0원 => 개당 75,000원
let price = 75000; // 초기 주문 금액
let number = 0; // 초기 주문 수량
let totalPrice = 0; // 최종 가격을 저장하는 변수
const product_num = document.querySelector('#product_num') ; //수량표시 DOM
const plusBtn = document.querySelector('#plus'); //수량증가버튼 DOM
const minusBtn = document.querySelector('#minus'); //수량감소버튼 DOM
const orderPrice = document.querySelector('.order_price .or_price');

console.log(price, number, totalPrice, product_num, plusBtn, minusBtn, orderPrice);

//초기값 설정 : 주문수량 0개 + 주문금액 0원 표시
product_num.value = number;
orderPrice.textContent = price*number;
//금액 값에 단위구분 넣기
orderPrice.textContent = Number(price*number).toLocaleString('ko-kr');

//수량 증가버튼
plusBtn.addEventListener('click',()=>{
    number++;
    product_num.value = number;
    totalPrice = price*number;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr');
})

//수량 감소버튼
minusBtn.addEventListener('click',()=>{
    number <= 1 ? alert('최소구매수량입니다.') :number--;
    product_num.value = number;
    totalPrice = price*number;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr');
})

// ===================================================== 옵션선택
// 0. 초기값 display = none;
const opBack = document.querySelector('.op_bg');
opBack.style.display = 'none'
// 1-1. 선택 1 의 사이즈 선택
// 1-2. 선택 1 의 컬러 선택
// 1-3. 제품명 선택
const item = document.querySelector('.title_price h1');//제품명 = 제품명은 태그 선택하는거 아니고 그 안에 있는 내용을 선택 해야 하니까 innerText
const selectSize1 = document.querySelector('#size1');// 선택 1의 사이즈
const selectColor1 = document.querySelector('#color1');// 선택 1의 컬러
const opSize1 = document.querySelectorAll('#size1 option');
const opColor1 = document.querySelectorAll('#color1 option');
// 선택 1의 출력 위치 저장
const itemName = document.querySelector('.op1 .item_name');
const sizeOp1 = document.querySelector('.op1 .size_op1');
const colorOp1 = document.querySelector('.op1 .color_op1');
selectSize1.addEventListener('change',()=>{
    const size1 = document.querySelector('#size1 option:checked').value; // 저장할 변수
    itemName.textContent = item.innerText;
    sizeOp1.textContent = `${size1} , `;
});

selectColor1.addEventListener('change',()=>{
    const color1 = document.querySelector('#color1 option:checked').value;
    colorOp1.textContent = color1;
});

// 2-1. 선택 2 의 사이즈 선택
// 2-2. 선택 2 의 컬러 선택
const selectSize2 = document.querySelector('#size2');// 선택 1의 사이즈 셀렉트
const selectColor2 = document.querySelector('#color2');// 선택 1의 사이즈 셀렉트
const opSize2 = document.querySelectorAll('#size2 option');
const opColor2 = document.querySelectorAll('#color2 option');
//출력될 위치
const itemName2 = document.querySelector('.op2 .item_name');
const sizeOp2 = document.querySelector('.op2 .size_op2');
const colorOp2 = document.querySelector('.op2 .color_op2');
//셀렉트
selectSize2.addEventListener('change',()=>{
    const size2 = document.querySelector('#size2 option:checked').value;
    itemName2.textContent = item.innerText;
    sizeOp2.textContent = `${size2} , `;
});
selectColor2.addEventListener('change',()=>{
    const color2 = document.querySelector('#color2 option:checked').value;
    colorOp2.textContent = color2;
    opBack.style.display = 'block'
});