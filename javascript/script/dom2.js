// 자바스크립트 동적기능에 의해서 요소가 생성될 경우 createElement();
const new_child = document.createElement('div'); //태그명만 작성
const new_p = document.createElement('p');
const parent = document.querySelector('#parent');
const childNode = document.querySelectorAll('.child'); //[0][1][2]Node;
const li = document.querySelectorAll('.list li')
const addBtn = document.querySelector('#add');
const onoffBtn = document.querySelector('#onoff');
const reBtn = document.querySelector('#re');

console.log(new_child, parent, new_p, childNode, li, addBtn, onoffBtn);
console.log(parent.firstElementChild);
console.log(parent.children[2].previousElementSibling);

// 기준이 되는 부모변수.appendChild(마지막자식위치에 추가하고 싶은 노드변수);
new_child.innerText = '새로운 요소';
new_p.innerHTML = '<em>새로운 요소2</em>';
parent.appendChild(new_child);
document.body.appendChild(new_p);
parent.firstElementChild.appendChild(new_p);
parent.children[2].previousElementSibling.appendChild(new_child);
//기준부모변수.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_p, childNode[2]);
// 삭제대상변수.remove(); 숨기기 개념(style.display='none')이 아닌 요소 삭제('',remove)개념! 쇼핑몰 장비구니 삭제 등으로 이용
// childNode[0].remove(); 변수만 잘 만들어놓으면 쉬움
// 숨기는대상의부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[0]);
// style 속성을 이용한 CSS (최종 적용 속성이 1~2개 소수일 경우)
li[0].style.backgroundColor = 'red';
li[0].style.fontSize = '2rem';
// 동시에 적용해야하는 CSS속성이 3개 이상 많은 경우 class를 이용한다.
// 처음부터 적용되는 class가 아닌 js 동적결과에 의해 나중에 적용되는 디자인에 사용한다
// li[1].className = 'set1';
li[1].classList = 'set1'; // List위주로 사용
li[1].classList += ' set2'; // 공백 = 대입연산자는 문자열을 연결하기 때문에 2개의 클래스를 나눠서 인식하게 한다.\
li[1].classList.add('set5');
li[1].classList.remove('set2');
li[2].classList.add('set1','set2');
li[1].classList.remove('set1');
li[3].classList = 'set3';
li[4].classList = 'set4';
li[4].classList.add('set3');
li[5].classList = 'set5'
li[5].classList.add ('set5','set3')
// 버튼으로 제어하는 classlist
addBtn.addEventListener('click',()=>{
    li[6].classList.add('set1');
})
onoffBtn.addEventListener('click',()=>{ //버튼 onoff 토글
    li[7].classList.toggle('set2')
})
reBtn.addEventListener('click',()=>{
    li[8].classList.replace('set2','set1');// 기존 set2를 set1로 변경 ; set2를 제거하고 set1로 변경 
})

