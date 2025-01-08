// =============================함수스코프, 지역변수와 전역변수
//함수 외부(전역 스코프 위치)
let b = 20;
let c = 30;
let a = 0;
// function 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부(지역 스코프 위치)
    a = 10;
    console.log(a+b);
}
// 선언한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야한다
// 호출방법 : 함수명()
console.log(a+b); //50 변수 생성 위치 확인 잘하기
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출하기
// =============================함수스코프 연습2
// 최종 결과 값 순서가 6,16으로 출력 되도록 함수스코프와 호출을 이용한 문제풀기
let x = 1;
let y;
func1(); //함수2 안에 함수1 호출식이 존재한다면 함수2를 호출할 때 함께 출력되는 경우를 의미한다
func2();
function func1() {
    y = 5
    console.log(x+y);
}
function func2() {
    let z = 10;
    console.log(x+y+z);
}
// 접속 사용자에게 인사하는 버튼
// 1. (준비) 버튼을 제어할 수 있도록 변수를 만드는게 먼저이다. 
const btn1 = document.getElementById('btn1');
console.log(btn1);
// 2. (이벤트) 변수 이벤트 생성 : 사용자가 어떻게 움직일 때 이벤트가 생성될지 사용자의 행위 생성
// 이벤트대상.addEventListener('이벤트종류',이벤트 만족 시 실행함수=function);
// 이벤트 대상 == 이벤트 종류를 적용하고 싶은 대상
// 이벤트 종류 => 태그의 인라인script로 적용할 때 on을 붙이고, 스크립트에서 바로 작성 할 때는 on을 제외하고 바로 이벤트만 작성한다.\
// 함수명은 '함수에 적용대상임을 알려주기 때문에 함수명을 따로 안 쓴다.
// 3. (이벤트) 인삿말이 어디서 어떻게 나올 건가?
btn1.addEventListener('click',function(){
    alert('Hello!👋')
});
// 버튼을 클릭하면 -> 정답 입력 창 실행 -> 답을 입력하면 -> 답 확인하는 메세지 창
// 1. 사용자 행위 생성
const btn2 = document.getElementById('btn2');
console.log(btn2);
// 2. 이벤트 생성 ; 버튼을 클릭하면 정답 입력창이 실행 
btn2.addEventListener('click',function(){
    // 3. 후 정답 받기
    let answer = prompt('정답을 입력하세요!'); // 변수 설정하기
    // 4. 위 2에서 받은 값을 팝업창으로 다시 띄우기
    alert(answer);
});
//======================================수량이 증감하는 버튼
// 1.제어 노드 변수 생성하기
const numMinus = document.querySelector('#numMinus');
const num = document.querySelector('#num');
const numPlus = document.querySelector('#numPlus');
console.log(num,numPlus,numMinus);
// 2. 위 1에서 생성한 변수 중 이벤트 대상에 해당되는 것부터 작성하기
numPlus.addEventListener('click',function(){
    //3. 변경 대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    // 기존 수량의 값에 1을 더해서 수량 칸에 대입하기
    // 수량 칸 = 기존 수량의 값에 1을 더해서
    num.value = Number(num.value)+1 // Number() : 숫자 변환 함수
})
numMinus.addEventListener('click',function(){
    num.value = num.value - 1; // + 를 제외한 나머지 연산자는 숫자 모양으로 되어 있으면 자동으로 숫자 데이터로 인식한다.
})
// 대입식과 대상식은 따로 생각해야하므로 별도로 작성한다.

//====================================== 직장인 수입 계산기
// 1. 월급 입력 받기 prompt : 변수 저장
// const price1 = prompt('월급 입력');
const price1 = document.querySelector('#price1')
// 2. 보너스 입력 받기 prompt 
// const price2 = prompt('보너스 입력');
const price2 = document.querySelector('#price2')
// 3. 계산 버튼 클릭 시 click = 이벤트
const total = document.querySelector('#total');
total.addEventListener('click',function(){ // "클릭하면" function안의 함수를 실행하라. 실행 안하면 안보임
    // 4. 월급+보너스 더하기 : + 연산자 > 2번 더하려면(쓰려면) 변수 쓰기
    console.log(price1);
    console.log(price1.value);
    console.log(typeof(price1));
    console.log(typeof(price1.value));
    // console.log(typeof(Number(price1.value)));
    const total_price = Number(price1.value) + Number(price2.value);
    // 5. 더한 결과 출력하기 console or alert
    console.log(total_price);
    // alert(total_price);
})
