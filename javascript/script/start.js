// 외부 스크립트 프로그래밍 언어 작성 위치
// 선언과 대입 따로하는 변수 작성법
// var 생성변수명;
// 생성변수명 = 변수에 대입하는 값;
// --------------------------------------
// 선언과 대입 동시에 작성하는 변수 작성법 
// var 생성변수명 = 변수대입값;
var bowl; // 그릇 저장소 생성(대입x == undefiened)
bowl = "쌀밥";
// 자바스크립트 중요 개념. 객체(변수), 속성, 메소드, 이벤트
// 속성과 메소드 작성 구분법
// 속성과 메소드 작성 시 반드시 객체가 먼저 시작해야 한다.
// 객체.속성; 속성은 세미콜론(;) 으로 끝난다
// 객체.메소드(); 메소드는 ()괄호 추가 후 세미콜론(;) 으로 끝난다. 괄호 안에는 값이 있거나 없거나 한다.
// 자바스크립트 작성 순서 : 목표 정하기 -> 절차순서정하기 -> 코드쓰기
// 목표. 콘솔에 로그 남기기
console.log(bowl);
console.log(bowl); // 데이터가 똑같아도 줄 번호를 잘 봐야 한다.
console.log(1+1);
console.log('1+1=' , 1+1); // 앞의 ''은 문자로 인식한다.
// bowl변수값은 쌀밥
console.log('bowl변수값은',bowl) // 문자 그대로 보이게 하고 싶으면 '' , 변수값을 보이고 싶으면 변수명
console.log('----------경계구분용-----------')
// 변수 대입 연습
console.log('변수공부--------------------------------')
var a;
var b = a; // 선언과 대입 동시 진행
var c = 30+b; // 바로대입
console.log(a); //결과 : unfined = 대입된 데이터가 없음
a = 10;
console.log(a); // 결과 : 10 > 내가 쓴 콘솔 로그 위치에 따라 다르게 인식한다.
a = 20; // > 변수는 하나에 하나, 새로운 데이터값을 대입하는 순간 기존 데이터는 자동으로 삭제된다.
b = a;
c = a+b;
console.log(a); // 결과 : 20 
console.log(b); // 결과 : undefined > 중간 결과값이 중요하다.
console.log(c); // 결과 : 절차의 최종 현재상태가 a=20, b=a이기 때문에 c결과값이 40으로 도출된다.
// NaN == Not a Number 연산자를 이용한 데이터 2개가 계산이 불가능할 경우 출력되는 상태