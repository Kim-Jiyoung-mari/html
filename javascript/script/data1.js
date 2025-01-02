// --------------------------- 변수 복습
var a = 2025;
var b = "자바스크립트"; // 문자데이터
var c; //undefined 값이 정의되지 않음(대입값이 존재하지 않음)
console.log(a, b, c);
console.log(a+1); //2026 숫자를 가진 변수+숫자데이터
console.log(b+' 공부'); // 문자를 가진 변수+문자데이터 = 문자데이터 ; 변수를 쓸 때는 문자던, 숫자던 ""에 묶으면 안된다.
console.log(a+c); // 숫자를 가진 변수+정의되지 않은 변수 = NaN = Not A Number;계산할 수 없다.
console.log(a+b); // 숫자를 가진 변수+문자를 가진 변수 = 무조건 "문자 데이터"가 출력된다.
c = 1; // 자바스크립트는 무조건 절차 순서를 기준으로 진행되기 때문에 나중에 추가되었다 하더라도 이전 값에 대입되지 않는다.
console.log(a+c); // 숫자 변수 + 숫자 변수 = 숫자
console.log(a-c); // 숫자 변수 - 숫자 변수 = 숫자
console.log('-----------------------------------')
// 함수 생성 문법 function 함수명() {실행식;}
function abcPlus() {
    console.log(a+b+c); // 반복되고 복잡한 실행식을 함수에 넣어놓고 기능에서 필요 할 때마다 함수를 호출해서 사용한다.
}
// 메서드 method 공부
/* var d = window.prompt('1+1은?'); //prompt ; 질문답변을 작성하는 메소드 = 테스트 용도로 많이 사용
console.log(d);  */// 입력한 값을 그대로 인식해서 출력한다.
// prompt와 function 함수 활용
// 1. 변수 생성 age
// 2. 함수 생성 ageFunc
// 3. 버튼 글릭 시 2번 함수를 호출 onclick
var age; // undefined 나이를 정의하지 않은 상태로 시작한다.
function ageFunc() {
    age = window.prompt('올해 몇살이세요?');
    console.log(age+'세');
    console.log(typeof age); // 데이터 타입을 보고 싶으면 호출 해야만 볼 수 있다.
}
// // mbti
// var mbti;
// function memberMbti() {
//     mbti = window.prompt('MBTI가 뭐에요?');
//     console.log('회원 MBTI:'+mbti);
// }
// //혈액형
// var blood;
// function memberBlood() {
//     blood = window.prompt('혈액형이 뭐에요?');
//     console.log(blood+'형');
// }
var mbti;
var blood;
function mbtiBloodFunc(){
    mbti = window.prompt('MBTI가 뭐에요?');
    blood = window.prompt('혈액형이 뭐에요?');
    console.log('혈액형은',blood,'형이고 mbti는',mbti,'입니다.')
    // console.log(typeof mbti);
    console.log(typeof (mbti, blood));
}
// 변수 선언 var, let, const
var a; // 상단에 a가 존재하는 상태로 중복 a를 만듬
console.log(a); //중복 문제를 발견 못한다.
// let b; 
console.log(b);
const e = 2024; // 상수는 선언과 동시에 변하지 않는 값을 바로 대입해야 한다. 변경 시도는 안된다.
console.log(e);
console.log('-----------------------------------')
console.log(typeof a); // a변수의 데이터 타입 확인 number(숫자)
console.log(typeof b); // b변수의 데이터 타입 확인 string(문자)
console.log(typeof c); // c데이터타입 확인
console.log(typeof(a+b)); //a와 b변수를 더한 결과의 데이터 타입은? string
console.log(typeof (a+c)); //a와 c변수를 더한 결과의 데이터 타입은? number
console.log('-----------------특수데이터연습------------------')
let f;
let g;
console.log(typeof(f,g)); //undefined 출력
f = ''; // 값을 지우지만 데이터는 남겨둔다. 초기화용으로 많이 쓴다.
console.log(typeof f); // 빈문자 = 문자 = string
f = '아이디를 입력하세요';
console.log(typeof f);
f = null; //f 변수의 값을 비운다.
// 문자 데이터를 초기화 하는 경우는 null보다 '' 빈문자 데이터를 많이 활용한다.
console.log(typeof f); //object : 변수라는 객체를 인식하는 것
g = 100; // 숫자 쓸 때는 단위 (,) 쓰면 안된다.
console.log(typeof g);
g = null; // 숫자데이터 특징이 사라지고 object만 남는다.
console.log(typeof g); // object
g = 0; // 숫자데이터는 유지한 상태로 0 초기화 된다.
console.log(typeof g); // number
console.log('-----------------템플릿 문자열 연습------------------')
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch; // 재료 변수와 통합 변수를 과도할 정도로 같이 쓴다.
// 오늘 총 지출액은 ? 원 입니다.
console.log(`오늘 총 지출액은 ${total}원 입니다.`);
// 2단 구구단 출력하기 (ex) 2x1=2
// let dan = 8;
// console.log(`${dan}x1=${dan*1}`);
// console.log(`${dan}x2=${dan*2}`);
// console.log(`${dan}x3=${dan*3}`);
// console.log(`${dan}x4=${dan*4}`);
// console.log(`${dan}x5=${dan*5}`);
// console.log(`${dan}x6=${dan*6}`);
// console.log(`${dan}x7=${dan*7}`);
// console.log(`${dan}x8=${dan*8}`);
// console.log(`${dan}x9=${dan*9}`);
// 버튼을 눌렀을 때 숫자를 적으면 출력 = 입력값에 따라 출력되는 것
// dan99
let dan; // 물어보게 했으니까 대입연산자가 있으면 안된다
function dan99(){
    dan = window.prompt('구구단 몇 단이 궁금해요?😊');
    console.log(`${dan}x1=${dan*1}`);
    console.log(`${dan}x2=${dan*2}`);
    console.log(`${dan}x3=${dan*3}`);
    console.log(`${dan}x4=${dan*4}`);
    console.log(`${dan}x5=${dan*5}`);
    console.log(`${dan}x6=${dan*6}`);
    console.log(`${dan}x7=${dan*7}`);
    console.log(`${dan}x8=${dan*8}`);
    console.log(`${dan}x9=${dan*9}`);
}
