//250110 - 구구단 함수 복습
//1. "danInput" input요소에 사용자가 원하는 구구단 입력 후
//2. "danBtn" button요소 클릭시
//3. "dan99" 2번 조건 달성시 호출할 수 있는 구구단 함수 생성
//3-1. (함수 안) 함수를 실행 할 때마다 위 1번의 입력값을 받기 위해 '매개변수' 생성 = 사용자가 입력한 값을 받기 위한 저장소
//3-2. (함수 안) 매개변수를 이용 구구단 식 제작 > 2x1=2
//3-3. (함수 안) 출력하기 위한 "danResult" 변수 생성
//3-4. (함수 안) 위 변수에 대입 후 완성
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const danResult = document.querySelector('.danResult');
console.log(danInput,danBtn,danResult); //error, undefined, null

// 미리 함수를 호출할 '호출식'을 미리 작성하는 게 좋다
// 호출 조건 = '버튼 클릭'해야 함수 실행 
// 매개변수 사용을 위해 'function 안에 작성 '
// danBtn.addEventListener('click',function(){ dan99(Number(danInput.value)); }) //(여기가 제일 이해 안돼)호출할 danInput.value -> dan으로 대입전달 
danBtn.addEventListener('click',() => dan99(Number(danInput.value)) )
function dan99(dan){ // 연산자 식에 따라 '+'제외 자동으로 숫자 변환
    let total = ''; //함수가 실행 될때마다 지역변수를 인식
    total = `${dan}x1 = ${dan*1}<br>`
    total += `${dan}x2 = ${dan*2}<br>`
    total += `${dan}x3 = ${dan*3}<br>`
    total += `${dan}x4 = ${dan*4}<br>`
    total += `${dan}x5 = ${dan*5}<br>`
    total += `${dan}x6 = ${dan*6}<br>`
    total += `${dan}x7 = ${dan*7}<br>`
    total += `${dan}x8 = ${dan*8}<br>`
    total += `${dan}x9 = ${dan*9}`
    return danResult.innerHTML = total;
    // danResult.innerHTML = `${dan}x1 = ${dan*1}<br>` // 이전에 실행된 함수가 있으면 초기화하기 위해 1번 값은 대입연산만 한다.
    // danResult.innerHTML += `${dan}x2 = ${dan*2}<br>` // innerHTML은 HTML태그도 인식하기 때문에 원하는 모든 태그를 쓸 수 있다.
    // danResult.innerHTML += `${dan}x3 = ${dan*3}<br>`
    // danResult.innerHTML += `${dan}x4 = ${dan*4}<br>`
    // danResult.innerHTML += `${dan}x5 = ${dan*5}<br>`
    // danResult.innerHTML += `${dan}x6 = ${dan*6}<br>`
    // danResult.innerHTML += `${dan}x7 = ${dan*7}<br>`
    // danResult.innerHTML += `${dan}x8 = ${dan*8}<br>`
    // // danResult.innerHTML 길고 반복되는 속성은 올바르지 않기 때문에 1~9까지 한번에 출력하게 '추가변수'를 작성한다.
    // return danResult.innerHTML += `${dan}x9 = ${dan*9}` 
    //return아래에 쓰면 인식이 아예 안된다
}
//=========================================
// 매개변수 없는 화살표 함수
const greet = () => console.log('hello');
const greet2 = () => {
    let a = 10;
    return console.log(a+10);
}

greet();
greet2();
// 매개변수 있는 화살표 함수
// 일반함수인 경우
function func1(a){
    return a+100;
}
console.log(func1(10));
// 화살표 함수인 경우
const func2 = (a) => a+100;
console.log(func2(10))
console.log('=========================================')
//DOM, Node 관계 속성 공부
const nav_a1 = document.querySelector('nav a');
const nav_a2 = document.querySelectorAll('nav a');
const header = document.querySelector('header');
console.log(nav_a1,nav_a2,header)
console.log('===========================next,previous 관계속성공부')
nav_a2[1];
console.log(nav_a2[1].nextElementSibling);
console.log(nav_a2[1].previousElementSibling);


console.log(nav_a1, nav_a2);
console.log(nav_a1.parentElement); //DOM 요소만 반환 = nav
console.log(nav_a2[3].parentElement);
console.log(nav_a2[2].parentNode); //요소 노드 nav(공백, 텍스트 포함 검사)
// nav_a1.parentElement.style = 'background-color:pink';
// nav_a2[2].parentNode.style = 'padding:20px';
// style을 같은 DOM요소에 두번 이상 적용하고 싶은 경우 CSS속성명을 자바스크립트 키워드 속성방식+Camel표기법으로 작성해야한다
nav_a1.parentElement.style.backgroundColor = 'pink';
nav_a1.parentElement.style.padding = '20px';
nav_a1.addEventListener('mouseover',() => nav_a1.parentElement.style.borderBottom = '2px solid #000');
nav_a2[3].addEventListener('mouseover',() => nav_a2[3].parentNode.style.backgroundColor='lightgreen');
nav_a2[3].addEventListener('mouseout',() => nav_a2[3].parentNode.style.background = 'none');
//자식노드 childNodes, children
console.log(nav_a1.childNodes); //Nodes = 무조건 텍스트, 공백, 요소 인식
console.log(nav_a1.children); // HTMLCollection [] = 잡을 요소 x
console.log(header.childNodes); //NodeList(5) [text, h1, text, nav, text] = enter친 공백까지 인식
console.log(header.children); //HTMLCollection(2) [h1, nav] = 요소만 인식
console.log(header.children[0].innerHTML); //<a href="#">logo</a>
console.log(header.children[0].innerText); //logo
console.log(header.children[1].innerText); //menu1 menu2 menu3 menu4
console.log(header.children[1].innerHTML); //<a href="#">menu1</a> <a href="#">menu2</a> <a href="#">menu3</a><a href="#">menu4</a>
// header에 마우스 올렸을 때, 자식 h1에 마우스 오버 시 'logo' => "로고" 글자 변경하기
header.addEventListener('mouseover',() => header.children[0].children[0].innerHTML = '<em>로고</em>')
console.log(header.children[0].childNodes[0])

console.log('==================childElementCount 자식노드개수')
console.log(header.childElementCount); //2 => h1, nav
// =====================마켓컬리 쇼핑몰 장바구니 개수
// 알고리즘 작성
// 1. "cart_num" 장바구니 초기값 0 
// 2. "cart_item" 사용자가 장바구니에 물건 2개를 담았다. cartContents
// 3. "cart_num_all" 2번의 물건 개수에 따라 장바구니 페이지에 전체 상품 개수 출력
let cart_num = 0;
const cart_num_all = document.querySelector('.all_cart_item');
const cart_item = document.querySelector('.cart_contents'); // 아이템의 개수를 알려면 부모가 기준이 되어야 한다.

cart_num_all.innerText = cart_num; // 장바구니의 초기값 0 선언 (상황1)

// 사용자가 물건 2개를 담았다. (실행)
cart_num = cart_item.childElementCount; //상황에 따라 값이 변경
console.log(cart_num);
cart_num_all.innerText = cart_num; // 현재 진행기준 장바구니 개수 대입

console.log('============================')
console.log(header.firstChild); //#text (공백)
console.log(header.firstElementChild); // h1
console.log(header.lastChild); // 공백
console.log(header.lastElementChild);//nav