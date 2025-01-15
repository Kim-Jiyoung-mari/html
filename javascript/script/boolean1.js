// 논리데이터 확인 true or false
// true (1) 과 동일하게 인식
// false (0) 과 동일하게 인식
// 논리데이터(boolean)을 다른 숫자 데이터와 연결하면 1,0으로 연산처리하여 계산한다.
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(true+10); // 11
console.log(typeof (false+5)); // number = 0+5와 동일한 결과 출력
//==========================불린함수활용 falsy or trythy 값 구분
// 괄호 안에 값을 변수로 사용했을 때 참 거짓 확인하는 용도로 사용
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); 
console.log(Boolean(0));
console.log(Boolean('')); //=========== falsy 모든 거짓 값
console.log(Boolean('JS'));
console.log(Boolean(123));
console.log(Boolean(-123));
console.log(Boolean({})); // 
console.log(Boolean([])); // ============truthy로 나오는 모든 값
//==========================비교연산자
// 1. 일치(동등)연산자 : 좌우의 값이 같은가? 같으면 참, 다르면 거짓
// 엄격한 비교연산자 (===)를 사용하는 것을 권장한다
console.log('4' == 4); // true
console.log('4' === 4); // false ; 데이터 타입이 다르기 때문에
console.log('4' === '4'); // true ; 데이터 타입까지 같기 때문에
// 2. 부등(불일치)연산자 : 좌우의 값이 다른가? 다르면 참, 같으면 거짓 (일치연산자와 반대)
console.log(10 != '10'); // false ; 안에 내용만 인식해서 거짓
console.log(10 !== '10'); // true ; 숫자 10, 문자 10 데이터 타입이 달라서 참
console.log(10 !== 10); // false
// 3. 대소 비교 연산자 : 작다, 크다, 크거나 같다, 작거나 같다
let x = 5;
let y = 7;
console.log(x < y); // true
console.log(x > y); // false
console.log(x >= y); // false
console.log(x <= y); // true
console.log(x === y); // false '5와 7은 다르다'
console.log(5 == 5); // true
console.log('======================================')
/* 논리연산자 AND(&&) OR(||) NOT(!) */
function print(value){ // 매개변수 : 함수를 호출 할 때마다 해당 매개변수를 호출하겠다 
    const message = value || 'web';
    return console.log(message);
}
print(1);
print(0);
print([]);

function bool(data){
    const text = !data;
    return console.log(text);
}
bool('a'); // 참 => 반전되서 '거짓'
bool(0); // 거짓 => 반전되서 '참'
bool('[]'); // 참 => 반전되서 '거짓'

console.log('======================================');
let a = 5;
let b = a+10;
let total = a > b ? 'a는 b보다 크다':'a는 b보다 작다';// 실제로 결론을 저장하는 변수를 많이 쓴다
// 거짓이기 때문에 뒤의 결과가 출력되는 것.
console.log(total);

// // 나이에 따라 성인과 미성년자를 구분하는 JS
// let age = prompt('몇 살인가요?');
// // 사용자가 대답한 값에 따라서 '성인' '미성년자' 콘솔 출력 => 18세 이상 기준
// total = age > 18 ? '성인' : '미성년자';
// console.log(total);

// ========================================
// 1. "textarea" 사용자 리뷰 작성
// 2. "reviewBtn" 리뷰 등록하기 버튼 클릭
// 3. "result" (리뷰 100자 이상인 경우) '등록완료됐습니다' 팝업출력
// 4. (리뷰 100자 미안인 경우) '100자 이상 작성하셔야 합니다' 팝업출력

const textarea = document.querySelector('#review');
const reviewBtn = document.querySelector('#reviewBtn');
let result = '';
console.log(textarea)
console.log(reviewBtn, result)
reviewBtn.addEventListener('click',()=>{
    //textarea 글자 수 인식 콘솔 로그
    console.log(textarea.value.length);
    result = textarea.value.length >= 100 ? '등록이완료됐습니다' : '100자 이상 작성하셔야 합니다';
    alert(result);
})
// ======================================== 삼항조건 때문에 최대, 최저 구매수량 제한
// 0. 초기값 1개당 12500원, 재고 10개 제한
// 1. 사용자가 + 버튼 클릭시 수량이 1씩 증가한다
// 1-1. 사용자가 -버튼 클릭시 수량이 1씩 감소한다
// 2. 증가 수량에 따라 가격이 증가한다.
// 2-1. 감소 수량에 따라 가격이 감소한다.
// 3. 구입수량이 10개 이상이면 +버튼 클릭 시 '최대 구매수량입니다' 출력
// 4. 구입수량이 1개 미만이면 -버튼 클릭 시 '최소 구매수량입니다' 출력

const productNum = document.querySelector('#num');// 수량표시 DOM
const plusBtn = document.querySelector('#plus');//수량증가버튼 DOM
const minusBtn = document.querySelector('#minus');//수량감소버튼 DOM
const orderPrice = document.querySelector('.price span');// 주문 금액 표시
let price = 12500; // 초기 주문 금액
let stock = 10; // 재고
let number = 1; //초기 주문 수량
let result_num; // 삼항조건식 결과 담는 변수

productNum.value = number;
orderPrice.innerText = price;
/* 
innerText
textcontent : 순수하게 글자만 인식한다. 속도가 더 빠르다  
*/

// plus버튼 클릭시 수량 증가 + 금액 증가
plusBtn.addEventListener('click',()=>{
    // 조건결과를담는변수 = 조건식? 조건이참일때결과 : 조건이거짓일때결과
    result_num = number >= 10 ? alert('최대구매수량입니다') : number++ /* 거짓 조건 : 10 이상일 때 */
    productNum.value = number;
    orderPrice.innerText = (price * number).toLocaleString('ko-kr');
})

minusBtn.addEventListener('click',()=>{
    result_num = number <= 1 ? alert('최소구매수량입니다') : number-- /* 거짓 조건 : 1미만일 때 */
    productNum.value = number;
    orderPrice.innerText = (price * number).toLocaleString('ko-kr');
})
console.log('=================================if조건문');
let box1 = 10;
let box2 = 20;

//if(조건식){조건결과가 참일때 실행결과}else{조건결과가 거짓일때 실행}
if(box1 === box2) { console.log('참') };

//상황1. 관리자만 접속 가능한 페이지
//관리자 ID : admin

const userId = document.querySelector('#user_id');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click',()=>{
    console.log(userId.value === 'admin');

    if(userId.value === 'admin'){
        alert('관리자님 어서오세요');
    };
})

//나머지 연산자 %
console.log(2%4);//2
console.log(4%2);//0
//자바스크립트 나머지 연산자 0 또는 1(=양수의 대표개념) 짝수,홀수 구분 목적
//true+5 = 6
//false+5 = 5
//falsy 거짓으로 인식하는 값 = 0
//truthy 참으로 인식하는 값 = 0이 아닌 모든 값
//심리테스트 결과 함수
const testNum = document.querySelector('#test_num');
const testBtn = document.querySelector('#testBtn');
const testResult = document.querySelector('.testResult');

testBtn.addEventListener('click',()=>{
    //홀수
    if(testNum.value%2 == 1){
        testResult.innerText = testFunc(testNum.value, '홀');
    }else{//위 if조건식이 거짓일 경우 자동실행
        testResult.innerText = testFunc(testNum.value, '짝')
    }
    //짝수
/*     if(testNum.value%2 == 0){
        testResult.innerText = testFunc(testNum.value, '짝')}; */
})

function testFunc(data1, data2){
    let txt = `당신이 선택한 숫자 ${data1}는 ${data2}수입니다🧚‍♀️`; 
    txt += `${data2}수를 좋아하는 사람은 다정하고 따뜻한 성격을 가지고 있는 사람입니다🙌`;
    return txt;
}