//  장바구니 클릭시 팝업 보이기
const cartPopup = document.querySelector('.cart_bg');
const cartBtn = document.querySelector('.cart');
const shoppingBtn = document.querySelector('.cart_container .link a:nth-child(1)');

cartPopup.style.display = 'none';

cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
shoppingBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})

//썸네일 변경
const thumnail = document.querySelectorAll('.thumnail a img');
const bigImage = document.querySelector('.left_img .big img');

function thum_remove(){
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
    thumnail[2].parentElement.classList.remove('active');
    thumnail[3].parentElement.classList.remove('active');
    thumnail[4].parentElement.classList.remove('active');
}
function bigSrc(num){
    return bigImage.src = `./images/big_${num}.jpg`
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
thumnail[5].addEventListener('mouseover',function(){
    bigSrc(6);
    thum_remove();
    thumnail[5].parentElement.classList = 'active';
});

// 주문수량 + 주문금액 JS
let price = 349000; // 초기 주문 금액
let number = 0; // 초기 주문 수량
let totalPrice = 0; // 최종 가격을 저장하는 변수
const product_num = document.querySelector('#product_num') ;
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const orderPrice = document.querySelector('.order_price .or_price');

product_num.value = number;
orderPrice.textContent = price*number;
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
// 옵션선택
const opBack = document.querySelector('.op_bg');
opBack.style.display = 'none'

const selectChoice = document.querySelector('#choice');
const opChoice = document.querySelector('#choice option');

const choiceOp = document.querySelector('.op .option_txt');
selectChoice.addEventListener('change',()=>{
    const itemOp = document.querySelector('#choice option:checked').value;
    console.log(itemOp)
    choiceOp.textContent = `${itemOp} `;
    opBack.style.display = 'block'
});

// 탭 내용 바꾸기

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