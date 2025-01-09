// 연결연산자와 더하기 연산자
let data1 = 'hello'+'js'; // 문자+문자 = 연결연산자
let data2 = '1'+ 2; //문자+숫자 = 연결연산자
let data3 = (1+1)+'number'; //(숫자+숫자)+문자 = 왼쪽 '+' 더하기연산자 | 오늘쪽 '+' 연결연산자
let data4 = 'num'+(2-2)+'ber'; //문자+(숫자-숫자)+문자 = 괄호먼저 계산!
console.log(data1, typeof data1); // string | 변수값확인, 변수데이터종류확인 - 확인하는 습관 들이기
console.log(data2, typeof data2); // string
console.log(data3, typeof data3); // string ; 앞에 숫자가 있어도 하나라도 문자가 연결되면 문자가 된다.
console.log(data4, typeof data4); // num0ber string

let data5 = 4;
let data6 = 2; // 변수를 구성할 때 재료 변수와 결과 변수를 따로 만든다.
let result = data5+data6; // 재료를 이용한 결과를 담는 변수
console.log(result); //더하기 출력 결과
result = data5 - data6;
console.log(result); // 자바스크립트는 무조건 순차적으로 보여주기 때문에 더하기 결과를 먼저 보여준 후에 빼기 결과를 보여주고 싶으면 그 아랫줄에 작성한다.
result = data5 * data6;
console.log(result);
result = data5 / data6;
console.log(result);
result = data5 % data6;
console.log(result);

// 나누기와 나머지 연산자
let data7 = 10;
let data8 = 3;
let result2 = data7 / data8;
let data9 = 5;
let data10 = data9 + 10; // 일회성 처리인 경우 변수를 만들지 않고 바로 선언해도 된다.
let result3 = data10;

console.log(result3);
console.log(result2); // 3.333333
result2 = data7 % data8; // 나머지 연산자 결과값 = 1
console.log(result2);

//===============================이항 연산자 활용 더하기만 되는 계산기 만들기
// 1. val1 값을 담는 input | "firstinput" / 값 인식속성 value 
// 2. val2 값을 담는 input | "secondinput" / 값 인식속성 value
// 3. 위 1번, 2번을 인식하는 결정 버튼 | "btn" / 이벤트 click
// 4. 3번의 버튼 조건을 달성하면 1,2번의 값을 담는 결과 변수 | "total" / 더하기(+)
// 5. 4번의 결과 변수를 p에 출력하는 명령어 | "totalP" / innerHTML 속성 ; 대소문자 지켜야함 - 상호작용을 안하는 일방적인 태그 "쓰기용=HTML에 삽입한다."
const firstInput = document.querySelector('#val1');
const secondInput = document.querySelector('#val2');
const btn = document.querySelector('#btn');
const totalP = document.querySelector('#result'); //생성값

// console.log(firstInput, secondInput, btn, totalP);
// console.log(total);

btn.addEventListener('click',inputFunc);
function inputFunc(){
    let total = Number(firstInput.value) + Number(secondInput.value);
    console.log(typeof(firstInput.value)); //string
    totalP.innerHTML = total;
}

// ============================증감연산자
let x = 5;
let y = x++; //x++ 증가연산자 ; 무조건 1씩 증가한다. = 후위연산자 '+가 뒤에 붙어있는 연산자' / ++x : x를 먼저 증가시켜 보내고, y를 대입해라.
console.log(x,y); // x=6 , y=5 > x를 증가하기 전에 먼저 y에 x를 대입해라.
y = x++; // x는 이미 6이 되어 있는 상태 = y , x를 y에 보낸 후에 +1 하기
console.log(x,y);
x = ++y // y에 +1 한 후에 +1된 y의 값을 x에 대입 = 7 7
console.log(x,y);
x++; //대입과 관계없이 바로 자신을 증가시켜 증감연산실행 = 8
console.log(x);

// ============================증감연산자 문제
let a = 10;
let b = 20;
let c = 30;
let d = 40;
console.log(a,b,c,d)
//============================a,b,c,d 값은? // 정답:10/20/30/40
a++;
b--;
c++;
d--;
console.log(a,b,c,d)
//============================a,b,c,d 값은? // 정답: 11/19/31/39
a = ++b; // 20 20
b = a++; // 20 21 - a를 증가하기 전에 b에 보내
console.log(a,b,c,d)
//============================a,b,c,d 값은? // 정답: 21/20/31/39
c = a+b; // 41 = 21+20
d = ++c; // 42 42
console.log(a,b,c,d)
//============================a,b,c,d 값은? // 정답: 21/20/42/42
a = ++c+10; // 53 = 43+10
b = --d+1;  // 41
console.log(a,b,c,d)
//============================a,b,c,d 값은? // 정답: 53/42/43/41

//============================복합대입 연산자
let number = 10;
// number = number + 5; // 15
number += 5; //기존 number에 5를 더해서 대입하라.
console.log(number); // 15
// number = number - 5; 
number -= 5; //기존 number에 5를 빼서 대입하라.
console.log(number); // 10
// number = number * 5;
number *= 5; //기존 number에 5를 곱해서 대입하라.
console.log(number); // 50
// number = number / 5;
number /= 5 ; //기존 number에 5를 나눠서 대입하라.
console.log(number); // 10
// number = number % 5;
number %= 5; //기존 number에 5를 나눈 나머지 값을 대입하라.
console.log(number); // 0

//=============================== 가계부 계산기 만들기
// 1. 교통비를 담는 input | "trafficPay" / 값 인식속성 value 
// 2. 식비를 담는 input | "foodPay" / 값 인식속성 value
// 3. 커피를 담는 input | "coffeePay" / 값 인식속성 value
// 4. 위 1번, 2번, 3번을 인식하는 결정 버튼 | "totalBtn" / 이벤트 click
// 5. 4번의 버튼 조건을 달성하면 1,2,3번의 값을 담는 결과 변수 | "totalPrice" / 더하기(+)
// 6. 5번의 결과 변수를 span에 출력하는 명령 | "todayResult" / innerHTML 속성 
const trafficPay = document.querySelector('#money1');
const foodPay = document.querySelector('#money2');
const coffeePay = document.querySelector('#money3');
const totalBtn = document.querySelector('#totalBtn');
const todayResult = document.querySelector('.todayResult span');

// console.log(trafficPay,foodPay,coffeePay,totalBtn,totalPrice);
// console.log(todayResult);

// 버튼을 클릭했을 때 함수가 실행된다
totalBtn.addEventListener('click',todayFunc);
function todayFunc(){
    let totalPrice = Number(trafficPay.value) + Number(foodPay.value) + Number(coffeePay.value);
    todayResult.innerHTML = totalPrice.toLocaleString('ko-kr')
};
//=============================== 입금 시 1000원 주는 자바스크립트 은행 +1,000
//복합연산자 사용
//* 입금금액 | "bankInput" + input 금액 입력 시 해당 값 인식 = value - 입금액
//* 총 잔액 표시 | "bankTotal" > total잔액 변수가 보이게 출력 -총 잔액
//* 입금하기 버튼+이벤트 | "depositbtn" + click - 입금하기 버튼 클릭
//* 총 잔액 데이터 | "total" 총 잔액 데이터의초기값 0 - 총 잔액 표시 1,5
//* 1번 입금금액에 추가되는 이자 | "deposit" - 이자가 더해진다.
//1. "total" 총 잔액 표시 
//2. "bankInput" 입금액 입력 ; 사용자 행위 > 입금하기 위한 전제조건
//3. "depositBtn" 입금하기 버튼 클릭 ; 버튼 누르는 것 부터 인식
//4. "deposit" 입금액 인식하고 이자가 더해진다. 
//5. "total" 총 잔액에 포함된다. 
//6. "bankTotal" 총 잔액에 표시된다.
let total = 0; // 초기값설정
const bankInput = document.querySelector('#bank_input');
const depositBtn = document.querySelector('#deposit_btn');
const bankTotal = document.querySelector('#bank_total');

// depositBtn.addEventListener('click',bankFunc);
// function bankFunc(){
//     let deposit = Number(bankInput.value) + 1000;
//     total += deposit; // 기존값에 더해서 대입한다.
//     bankInput.value = 0;
//     // bankInput.value = '';
//     bankTotal.value = total.toLocaleString('ko-kr');
// };

// 매개변수가 달라지는 버전 ; 이자가 매번 달라짐
depositBtn.addEventListener('click',function(){
    bankFunc(Number(bankInput.value) * 0.1);
});
function bankFunc(deposit_num){
    let deposit = Number(bankInput.value) + deposit_num;
    total += deposit; // 기존값에 더해서 대입한다.
    bankInput.value = 0;
    // bankInput.value = '';
    bankTotal.value = total.toLocaleString('ko-kr');
};

//=============================== 함수의 변경되는 데이터 매개변수 공부
//function 함수명(매개변수){함수실행값} // 함수선언식(선언만으로 결과는 출력 안됌)
//함수명(매개변수); //함수호출식 (함수 선언 후 호출은 위, 아래 어디든 작성가능)
const func_btn = document.querySelector('#func_btn');
const func_result = document.querySelector('#func_result');
let user_num = 5;
let user_menu = '카페라떼';

// 매개변수가 없는 경우;데이터가 무조건 고정 ; 카페 키오스크는 아메리카노만 주문 가능, 수량도 무조건 1잔만 주문 가능
// 출력예) 아메리카노 1잔 나왔습니다.
// function kiosk(){
//     func_result.innerHTML = '아메리카노 1잔 나왔습니다.'
// }

// 매개변수가 있는 경우1(수량만 변경 가능)
// function kiosk(num){
//     func_result.innerHTML = `아메리카노 ${num}잔 나왔습니다.`; //호출할 때 매개변수를 대입한다.
// }

// 매개변수가 있는 경우2(메뉴와 수량 변경 가능-매개변수 자리에 하나 더 추가 )
// func_btn.addEventListener('click',kiosk) // 클릭했을 때 키오스크 실행하라
func_btn.addEventListener('click',function(){kiosk(user_menu, user_num);})
function kiosk(menu,num){
    func_result.innerHTML = `${menu} ${num}잔 나왔습니다.`; //호출할 때 매개변수를 대입한다.
}

//=============================== 함수의 return(외부반환값) 공부
// function 함수명(매개변수명){return 실행; 함수 외부로 보낼 반환값} ; 함수선언식(선언만으로 결과는 출력 안됌)
// 함수명(매개변수) ; 함수호출식 (함수 선언 후 호출은 위, 아래 어디든 작성가능)

function func1 (x, y){ // 한번 사용한 매개변수 이름은 함수에 내장된 이름으로 다르게 인식하기 때문에 동일하게 써도 된다
    //console.log(x + y);
    console.log('test');
    return x+y; //실행 메서드를 포함하지 않고 외부에서 필요한 결과값만 반환한다.
    console.log('test'); // 리턴은 함수 밖으로 결과를 보여주기 때문에 바로 아래에 있는 결과값은 안 보여준다.
}
// func1(1,2);
console.log(func1(1,2)); //실행식을 함수 호출 값을 가진채로 작성한다.
// alert(func1(2,3));

let num1 = 10;
let num2 = 20;
function func2(x, y){
    num1 += num2; //num1 = 30
    num2 = x + y; //num2 = 6
    num1 += num2; //num1 = 36
    return console.log(num1); // 함수에 목적을 확실히 한다.
}
// console.log(func2(2,4)); 
func2(2,4); 

//=============================== 구구단 만들기
// 사용자가 2를 입력하면 2x1 ~ 2x9 까지 구구단 결과가 p태그에 출력되는 결과
// 사용자가 5를 입력하면 5x1 ~ 5x9 까지 구구단 결과가 p태그에 출력되는 결과
// 달라지는 값을 매개변수로 만들기
// 알고리즘 정리 
// 1. danInput : 구구단 수 입력
// 2. danBtn : 버튼 클릭
// 3. dan99result : 결과 출력 
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const dan99result = document.querySelector('.dan99result');

function dan99(dan){
    dan99result.innerHTML = `${dan}x1=${dan*1}<br>`; // 대입을 먼저 시작하면 이전 값을 제거하고 두번째부터 추가 대입을 진행해야한다
    dan99result.innerHTML += `${dan}x2=${dan*2}<br>`; // br = 명령어가 innerHTML이기 때문이다
    dan99result.innerHTML += `${dan}x3=${dan*3}<br>`;
    // 함수가 다시 시작해야 할 때 초기화 되어야 한다.
}
danBtn.addEventListener('click',function(){ dan99(Number(danInput.value)) })
