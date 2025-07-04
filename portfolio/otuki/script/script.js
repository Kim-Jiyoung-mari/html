//썸네일 변경
const thumnail = document.querySelectorAll('.thumnail a img');
const bigImg = document.querySelector('.big_img img');
console.log(thumnail,bigImg);
console.log(thumnail[0].parentElement);

//두번째 썸네일에 마우스 올렸을 때 큰 이미지 bigthum_002.jpg 변경
//클래스명 제거
function thum_remove(){
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
};

function bigSrc(num){
    return bigImg.src = `./images/bigthum_${num}.jpg`
}

thumnail[0].addEventListener('mouseover',function(){
    bigSrc(1);
    thum_remove();
    thumnail[0].parentElement.classList = 'active';
});
thumnail[1].addEventListener('mouseover',function(){
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
});

//주문수량 + 주문 금액
// 초기값 | 주문수량 = 1개 , 주문금액 = 3980원
let price = 3980; //초기 주문 금액
let number = 1; //초기 주문 수량
let totalPrice = 3980; //최종 가격을 저장하는 변수

const item_num = document.querySelector('#amount_num');//수량표시 DOM
const plus = document.querySelector('#plus'); //수량증가버튼 DOM
const minus = document.querySelector('#minus'); //수량감소버튼 DOM
const orderPrice = document.querySelector('.order_price .or_price'); 

console.log(price, number, totalPrice, item_num, plus, minus, orderPrice);

//초기값 설정 : 주문수량 1개 + 주문금액 3980원표시
item_num.value = number;
orderPrice.textContent = price*number;
orderPrice.textContent = Number(price*number).toLocaleString('ko-kr');

//수량 증가버튼 설정
plus.addEventListener('click',()=>{
    number++;
    item_num.value = number;
    totalPrice = price*number;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr');
})

//수량 감소버튼 설정
// 1개 이하 '최소구매수량입니다'
minus.addEventListener('click',()=>{
    number <= 1 ? alert('최소 구매 수량입니다.') :number--;
    item_num.value = number;
    totalPrice = price*number;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr');
})
