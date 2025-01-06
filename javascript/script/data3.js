// 객체공부
// 변수생성키워드 변수명 = {속성:값, 속성:'값', 속성:값};
// 변수명은 객체명으로도 부를 수 있다.
// 값이 문자인 경우 따옴표를 묶고 숫자 또는 다른 데이터 타입인 경우 값만 작성한다.
// 객체값(속성:값에서 값)을 호출할 때는 변수명.속성을 작성한다.
// 객체 선언 시 속성명은 대입하는 값과 동일한 의미를 가지는 속성으로 의미있게 지정한다.
let cat1 = {
    age: 1,
    name: '후추',
    color: '치즈',
    charact: '착하고 애교 많음'
};
console.log(cat1);
console.log(cat1.age);
console.log(cat1.color);
// 템플릿 문자열 : 나비는 검정고양이고 1살이에요.
console.log(`${cat1.name}는 ${cat1.color} 고양이 이고, ${cat1.age}살 이에요.`);
// 변수명은 항상 다르게 선언해야 하지만 대입되는 객체 속성은 중복이 가능하다.
let cat2 = {
    color:['검정','흰색','노랑'], // 2개 이상 값 설정 시 값으로 배열 활용
    age: 2,
    name: '삼색이'
};
console.log(cat2);
console.log(cat2.color[0],cat2.color[1],cat2.color[2]); // '검정, 흰색, 노랑'으로 출력하기
console.log(cat2.color.length);
// 객체.속성.속성;
// 속성이나 메서드 선언 시 반드시 앞에서 객체를 먼저 선언한다.
// 객체 뒤 속성이 배열인 경우 배열의 속성(length)를 연결해서 작성할 수 있다.
// 맨 앞에 객체가 선언됐다면 필요한 경우 속성.속성.속성을 속성끼리 연결할 수 있다.
// 객체 선언
// 고양이 종은 코리안 숏헤어, 털은 흰색과 검은색, 나이는 1살, 성별은 암컷, 입양 전, 중성화 전, 건강상태 양호에 대한 정보로 객체 생성하기
let cat3 = {
    type:'코리안숏헤어',
    color: ['흰색','검은색'],
    age: 1,
    gender: '암컷',
    adoption: '전',
    neutering: '전',
    health: '양호'
}
console.log(cat3);
console.log(cat3.type);
console.log(cat3.color);
console.log(cat3.age);
console.log(cat3.gender);
console.log(cat3.adoption);
console.log(cat3.neutering);
console.log(cat3.health);
console.log(cat3.type,cat3.color,cat3.gender,cat3.adoption,cat3.neutering,cat3.health);
console.log(cat3.type,cat3.color[0],cat3.gender,cat3.adoption,cat3.neutering,cat3.health);
console.log(cat3.type,cat3.color[1],cat3.gender,cat3.adoption,cat3.neutering,cat3.health);
console.log(cat3.color.length);
console.log(`품종 : ${cat3.type}, 색깔 : ${cat3.color[1]}, 나이 : ${cat3.age}, 성별 : ${cat3.gender}, 입양 : ${cat3.adoption}, 중성화 : ${cat3.neutering}, 건강상태 : ${cat3.health}`);
// cgv 영화 페이지 조사 기준 '하얼빈' 반복되는 데이터 조사 후 객체 생성하기
// const movie = [{속성:값, 속성:값, 속성:값},{...},{....}]
const movie = [{
    title: '하얼빈', 
    reservationRate:'21.5%',
    score:'89%',
    director: '우민호',
    actor: ['현빈','박정민','조우진','전여빈','박훈','유재명','릴리 프랭키','이동욱'],
    genre:[''],
    age: '15세이상관람가',
    time: '114분',
    country: '한국',
    date:'2024.12.24',
    poster:'./images/harbin_poster.jpg',
    story:'1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의 전투에서 큰 승리를 거둔다.'
},{
    title: '페라리', 
    reservationRate:'12.1%',
    score:'99%',
    director: '마이클 만',
    actor: ['아담 드라이버','페넬로페 크루즈','쉐일린 우들리'],
    genre:['드라마','액션'],
    age: '15세이상관람가',
    time: '131분',
    country: ['미국','영국','이탈리아'],
    date: '2025.01.08',
    poster: './images/ferrari_poster.jpg',
    story: '1957년, 전세계를 뒤흔든 페라리의 충격 실화가 드러난다!'
}];

// 배열과 객체 함께 사용하기
// 고양이 보호소 정보
// 봄이, 코숏, 1살, 남, 갈색, 흰색, 검은색, 중성화 유
// 여름이, 코숏, 2살, 여, 검은색, 흰색, 중성화 무
// 가을이, 러시안블루, 1살, 남, 회색, 중성화 유
// 겨울이, 페르시안, 2살, 남, 흰색, 노랑, 중성화 무
const catShelter = [{
    name:'봄이',
    type:'코리안 숏헤어',
    age:'1',
    gender: '남',
    color: ['갈색','흰색','검은색'],
    neutralization: '유'
},{
    name:'여름이',
    type:'코리안 숏헤어',
    age:'2',
    gender: '여',
    color: ['검은색','흰색'],
    neutralization: '무'
},{
    name:'가을이',
    type:'러시안블루',
    age:'1',
    gender: '남',
    color: ['회색'],
    neutralization: '유'
},{
    name:'겨울이',
    type:'페르시안',
    age:'2',
    gender: '남',
    color: ['흰색','노랑색'],
    neutralization: '무'
}]
console.log(catShelter);
console.log(catShelter[2].name); 
console.log(catShelter[2].color[0]);
console.log(catShelter[0].name);
console.log(catShelter[0].color[2]);
console.log(catShelter[3].name);
// window 객체 활용한 메서드 종류
// let msg = window.alert('제작중 입니다.')
// let msg2 = window.prompt('언제 완성 되나요?');
// let msg3 = window.confirm('확인되었습니다.');
// console.log(msg);
// console.log(msg2);
// console.log(msg3);
// let msg_print = window.print();
// confirm -> print 순서로 confirm 메서드의 '확인'클릭 시 print가 실행되기 만드는 순서로 인쇄기능을 제작한다.
function gg(){
    console.log('test')
    window.location.href('https://google.com');
}
window.document.write('test')
window.document.body.style = 'background-color:yellow;'
// 자바스크립트에서 적용하는 CSS(style)은 태그의 인라인스타일 구조로 적용되기 때문에 가장 우선순위가 높은 디자인으로 적용된다.
// window == 최상위 개념(생략) 
// prompt('질문') ; // window객체명이 기본값이라 생략한 상태 (기본 내장으로 메서드만 있는 상태가 동작된다 라고 공부해서는 안된다.)
// document.body.styl
// document == 웹브라우저 화면
// body == 웹드라우저 화면 내에서 제어하고 싶은 객체대상 (속성)
// style == body에적용하고 싶은 추가 속성, 속성 뒤는 대입연산자(=)로 값을 대입한다.