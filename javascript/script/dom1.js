// ---------------------------- DOM (Document Object Model) 변수대입복습
// ---------------------------- 변수가 변하지 않는 고정데이터라면? 
// const 변수명 대입연산자 반복되는대입값;
// ---------------------------- 변수가 변할 수 있는 수동 데이터라면?
// let 변수명 대입연산자 반복되는 대입값;
// var 변수명 대입연산자 반복되는 대입값;
// ---------------------------- 변수대입 DOM요소가 태그노드라면? -> 선언 후 배열형태확인 사용 / 배열에 직접 접근
// const 변수명 대입연산자 document.getElementsByTagName('태그');
// ---------------------------- 변수대입 DOM요소가 클래스노드라면? -> 선언 후 배열형태확인 사용 / 배열에 직접 접근
// const 변수명 대입연산자 document.getElementsByClassName('클래스명');
// ---------------------------- 배열형태 노드라면 직접사용 시[0] 인덱스 숫자 이용
// ---------------------------- 변수대입 DOM요소가 아이디노드라면?
// const 변수명 대입연산자 document.getElementById('아이디명');
const headerTag = document.getElementsByTagName('header');
console.log(headerTag); // 단순 테스트 확인 할 때 배열 전체 확인 가능하지만 애니메이션 및 동적, 디자인 기능 등 직접적용 시 배열 직접 접근(인덱스 활용)
headerTag[0].style = 'background-color:pink';
console.log(typeof headerTag); //object
const logo = document.getElementsByTagName('h1')[0]; //object
logo.style = 'color:brown';
const searchDiv = document.getElementsByClassName('search')[0];
searchDiv.style = 'border-bottom : 2px solid black';
const searchInput = document.getElementById('txt');
console.log(searchInput);
searchInput.style = 'background-color:lime';
const searchBtn = document.getElementById('btn');
console.log(searchBtn);
searchBtn.style = 'background-color:orange';

// querySelector 메서드는 body 태그에 작성한 순서상 먼저 시작한 태그를 인식한다. header태그가 2개라면 먼저 선언된 header태그만 인식하여 변수에 대입한다.
const hea = document.querySelector('header');
console.log(hea);
hea.style = 'background-image:url(https://i.pinimg.com/736x/0e/93/49/0e93498498b946e65f20a721b0397dd2.jpg)'

// querySelector는 getElement명령어처럼 class, id, tag 선언이 함께하지 않기 때문에 querySelector의 메서드 괄호 안에서 class, id, tag를 구분할 수 있는 표시를 함께 한다. 태그라면 태그 이름만, 클래스라면 .클래스명, 아이디라면 #아이디명으로 작성해서 구분한다.
const sear = document.querySelector('.search');
console.log(sear);
sear.style = 'opacity:0.5';

const searTxt = document.querySelector('#txt');
console.log(searTxt);
searTxt.style = 'color:red';

const gnb = document.querySelector('.gnb');
gnb.querySelector('a').style = 'background-color:white';

const gnbLi = document.querySelectorAll('.gnb li')
console.log(gnbLi);
gnbLi[0].style = 'background-color:lime';
gnbLi[1].style = 'background-color:orange';
gnbLi[2].style = 'background-color:pink';
gnbLi[3].style = 'background-color:coral';

// const gnbA = document.querySelectorAll('.gnb a')
const gnbA = gnb.querySelectorAll('a') // 변수 이름 자체를 부모로 사용하여 'gnb안에 모든 a 선택'하는 의미
// document.querySelector('.gnb').querySelectorAll('a') 위와 동일
console.log(gnbA);
gnbA[0].style = 'color:darkred';
gnbA[1].style = 'color:darkgreen';
gnbA[2].style = 'color:darkblue';
gnbA[3].style = 'color:purple';