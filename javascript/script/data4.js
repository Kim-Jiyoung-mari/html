// window.document.body.style = 'background-color:aqua'
document.write('250107'); // window 생략 (기본 내장) | 태그 없이 생성됨
// DOM
// 객체는 변수에 선언해야한다.
// 변수생성키워드 생성변수명 =(대입연산자) 변수에대입되는값;
const title1 = document.getElementsByTagName('h1'); // 태그는 문자로 인식하기 때문에 ''따옴표 묶어주기 / 생성변수명은 의미 있는 키워드 작성하기
const title2 = document.getElementsByTagName('h2');
// 변수 선언 시 [] 배열 선언표시 없이 2개 이상의 의미로 복수형으로 데이터를 저장하면 자동으로 배열로 인식 된다.
// 배열 인식 결과 → 각 데이터가 [0] [1] 인덱스로 구분되고 length 속성이 자동추가 된다.
console.log(title1);
console.log(title2);
// DOM객체.속성;        // 속성읽기
// DOM객체.속성 = '값'; // 속성에 값 대입하기
title1[0].style = 'color:red';
title1[1].style = 'border:3px solid orange';
title2[0].style = 'background-color:yellow';
title2[1].style = 'color:green';
title2[2].style = 'border-bottom:5px solid blue';
// ul이 하나여도 인덱스는 필요하다.
const listWrap = document.getElementsByTagName('ul')[0]; // 변수를 저장할 때부터 인덱스를 선언해야 한다. 필요에 따라 골라서 써야 할 때는 인덱스 쓰면 안된다.
const list = listWrap.getElementsByTagName('li');
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:aquamarine'; //listWrap [0][0] x
list[0].style = 'background-color:hotpink'
list[1].style = 'background-color:purple'
list[2].style = 'background-color:brown'
const listWrap2 = document.getElementsByTagName('ul')[1];
const list2 = listWrap2.getElementsByTagName('li');
const aTag1 = list2[0].getElementsByTagName('a');
const aTag2 = list2[1].getElementsByTagName('a');
// const aTagAll = document.getElementsByTagName('a'); 
const aTagAll = listWrap2.getElementsByTagName('a');
console.log(listWrap2);
console.log(list2);
console.log(aTag1,aTag2); // 외동이기 때문에 0번째로 출력 : [0] [0]
console.log(aTagAll); // [0] [1]
/* 
HTML, CSS 작성할 때 HTML의 가족관계를 우선시 하여 li가 형제, a는 각 외동으로 인식하지만, JS는 최종 선택 대상 앞에 'document'자리에 어떤 요소를 쓰느냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안의 모든 a를 순서대로 인식해 인덱스 번호를 적용한다. 하지만 'li'의 경우 li 안에는 a가 하나씩 배치 되어 있기 때문에 (1:1) 각 a를 0번째로 인식한다.
*/
listWrap2.style = 'background-color:lightgray';
list2[0].style = 'border: 1px solid red';
list2[1].style = 'border: 1px solid blue';
const subTitle = document.getElementsByClassName('sub_title')[0]; // 이미 클래스명이라고 선언이 되었기 때문에 .(점)을 안 써도 된다.
console.log(subTitle);
subTitle.style = 'background-color:lime';
// 변수 3개 : 메뉴 / 메뉴 안에 li / 메뉴 안에 a
const menu = document.getElementsByClassName('menu')[0];
const menuLi = menu.getElementsByTagName('li');
const menuA = menu.getElementsByTagName('a');
console.log(menu);
console.log(menuLi);
console.log(menuA);
menu.style = 'background-color:lightgray';
menuLi[0].style = 'background-color:coral';
menuLi[1].style = 'background-color:yellow';
menuLi[2].style = 'background-color:yellowgreen';
menuLi[3].style = 'background-color:lightblue';
menuA[0].style = 'border:3px solid red'
menuA[1].style = 'border:3px solid blue'
menuA[2].style = 'border:3px solid purple'
menuA[3].style = 'border:3px solid yellow'
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red';
// 인덱스 필요 여부 구분
const container = document.getElementById('container');
const c_title = document.getElementById('title');
const c_title_a = c_title.getElementsByTagName('a');
const c_contents = document.getElementById('contents');
const c_con_a = c_contents.getElementsByTagName('a');
console.log(container,c_title,c_title_a,c_contents,c_con_a);
container.style = 'background-color:yellow';
c_title_a[0].style = 'color:red';
c_title_a[1].style = 'color:green';
console.log('=================================================');
const nav = document.getElementsByTagName('nav') [0];
const gnb = nav.getElementsByClassName('gnb') [0];
const gnbLi = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a');
nav.style='background-color:lime';
gnb.style='color:red';