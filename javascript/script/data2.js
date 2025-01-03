// ======================= 1/3복습정리
//날짜 관련 메서드 (필요한 경우만 사용함)
// getMonth() ; 월
// getDate() ; 일
// getfullYear() ; 올해
// 위 날짜 메서드를 실행하기 위한 초기 세팅으로 new Date() 메소드 반드시 선언
// 자바스크립트는 숫자를 0부터 처리한다. 그래서 getMonth로 월 출력 시 +1을 반드시 작성해야한다.
let now = new Date();
let mon = now.getMonth()+1;
let day = now.getDate();
let ye = now.getFullYear();

console.log(now);
console.log(`${mon}월`);
console.log(`${day}일`);
console.log(ye);
// 오늘은 ?년 ?월 ?일 입니다.
console.log(`오늘은 ${ye}년 ${mon}월 ${day}일 입니다.`);
console.log(
    `오늘은 ${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`
);
// 메서드와 속성을 작성할 떄는 반드시 앞에 객체선언이 되어야 한다.
// 객체.메서드();
// 객체.속성;
// ======================= 배열과 객체
// 배열 이전 형태 기본 변수
let box1 = 10;
let box2 = 20;
const num = 1;
box1 = box2*1; //box1의 값은 20이다. 상황에 따라 달라질 수 있는 부분이 동적 프로그램

console.log(`box1의 값은 ${box1}이다.`);
//배열 기본 문법과 활용
console.log('================================');
let yoil = ['일','월','화','수','목','금','토'];
console.log(yoil);
// 배열의 개별 데이터 인덱스는 0부터 인식한다.
// 배열의 개별 인덱스 호출하는 방법 (개별 호출 안하면 무조건 전체 출력만 된다.)
console.log(yoil[5]+'요일');
console.log(`내일은 ${yoil[6]}요일입니다.`); // 내일은 토요일 입니다.
// 배열의 전체 개수 length 속성은 1부터 인식한다.
console.log(yoil.length);
// yoil 배열 데이터 개수는 7개 이다.
console.log(`yoil 배열 데이터 개수는 ${yoil.length}개 이다.`);
// 배열 생성과 호출 연습
let colorSet = ['라이트퍼플','노란색','파란색','라이트그린','라이트핑크'];
console.log(colorSet);
console.log(colorSet[4],colorSet[0],colorSet[3]);
let fruits = ['바나나','딸기','사과','귤','수박','오렌지','복숭아'];
// 주문하신 상품은 복숭아, 오렌지, 수박, 귤, 사과, 딸기 바나나 총 7개 입니다.
console.log (fruits);
console.log(
    `주문하신 상품은 ${fruits[6]},${fruits[5]},${fruits[4]},${fruits[3]},${fruits[2]},${fruits[1]},${fruits[0]} 총 ${fruits.length}개 입니다.`
);
// 배열 추가 메서드 공부
// push(), pop(), shift(), unshift() > 푸쉬, 팝을 더 많이 쓴다.
// 객체.push() 배열의 끝 위치에 값 추가
// 객체.pop() 배열의 끝의치에서 값 1개 제거
// 객체.unshift() 배열의 시작위치에 값 추가
// 객체.shift() 배열의 시작 위치에 값 1개 제거
let numbers = [5,6,7,8];
console.log(numbers.length); // 출력값 : 4
console.log(numbers[3]); //출력값 : 8
numbers.push(9); // 배열의 끝에 9 숫자 데이터 삽입
console.log(numbers);
numbers.pop(); // 배열의 끝에 값 1개 제거
console.log(numbers);
numbers.unshift(4); // 배열의 시작에 4 숫자데이터 삽입
console.log(numbers);
numbers.shift(); // 배열의 시작에 값 1개 제거
console.log(numbers);
numbers.push(9);
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.unshift(4);
console.log(numbers);
numbers.unshift(3);
console.log(numbers);
// 메가박스 빠른 예매 시스템
// 1. 인원 선택 안할 때 좌석은 빈 값으로 빈 배열로 시작한다.
// 2. 인원 추가에 따라 배열에 좌석값이 들어갈 수 있는 저장소가 추가된다.
// 3. 추가된 인원이 희망좌석을 선택하면 해당 좌석정보가 위 2번 저장소에 대입된다.
let megabox = [];
const megaboxPrice = 10000;
console.log(megabox); // 빈 배열 상태
// 상황 예시1. 성인A 인원 1명 추가
megabox.push(''); // 빈 문자열 == ''
console.log(megabox); //성인 1에 대한 빈 좌석 정보 제공
// 상황 예시2. 성인A 좌석 선택(A5)
megabox[0] = 'A5';
console.log(megabox);
// 상황 예시3. 성인B 인원 1명 추가
megabox.push('');
console.log(megabox);
// 상황 예시4. 추가 성인B F5 좌석 선택
megabox[1] = 'F5';
console.log(megabox);
// 상황 예시5. 성인A 예매 취소
megabox.shift();
console.log(megabox);
// 총 인원은 ?명 이고, 최종 결제 금액은 ?원 입니다.
console.log(
    `총 인원은 ${megabox.length}명 이고, 최종 결제 금액은 ${megabox.length * megaboxPrice}원 입니다.`
)
// 카페 제공 메뉴와 장바구니
console.log('================================');
const coffeeMenu = ['아메리카노','카페라떼','녹차라떼','돌체라떼','콜드브루'];
let cart = []; // 빈 배열 , 곧 메뉴를 담을 예정이기 때문에 빈 자리로 만들기
const coffeePrice = 5000;
// 아메리카노 1잔
cart.push(coffeeMenu[0]); // coffeeMenu배열의 0인덱스 데이터값을 cart배열의 마지막 위치에 push추가한다.
console.log(cart);
// 카페라떼 1잔
cart.push(coffeeMenu[1]);
console.log(cart);
// 아메리카노 1잔
cart.push(coffeeMenu[0]);
console.log(cart);
// 콜드브루 1잔
cart.push(coffeeMenu[4]);
console.log(cart);
// 콜드브루 취소
cart.pop(coffeeMenu[4]);
console.log(cart);
// 돌체라떼 1잔
cart.push(coffeeMenu[3]);
console.log(cart);
// 장바구니 총 ? 개
console.log(`장바구니 총 ${cart.length}개`);
// 최종 결제 금액은 ?원입니다.
console.log(`최종 결제 금액은 ${cart.length * coffeePrice}원 입니다.`);
console.log('================================');
// 배열 작성 문법 연습
let array1 = [1,2,3,4]; // 가장 많이 사용하는 문법
let array2 = new Array(5,6,7,8); // 새로운 배열 생성 뜻으로 작성하는 문법
let array3 = new Array(80); // 값4가 아닌 배열 4자리를 준비한다.
console.log(array1);
console.log(array2);
console.log(array3);
// 배열 주의사항, 호출 시 반드시 인덱스를 사용한다. array1:콘솔로 확인할 때 (x)  array1[0]:진짜 작업할 때 (o)