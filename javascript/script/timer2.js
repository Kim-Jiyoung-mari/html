//일정 시간 후 한번 실행하고 끝나는 setTimeout 함수
//const(let) 변수명 = setTimeout(실행함수, 시간)
//setTimeout(실행함수, 시간)
//setTimeout 내 함수를 별도로 생성하고 타이머안에서 호출식으로도 많이 이용한다.
const timer1 = setTimeout(function(){
    console.log('한 번 실행하는 문구');
},2000);
const timer2 = setTimeout(test,1000);
function test(){
    // return alert('한 번 실행하는 경고창');
};

const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    clearTimeout(timer2);
    console.log('timer2 정지');
    clearTimeout(timer1);
    console.log('timer1 정지');
});

//무한으로 올라가는 공지사항 스크롤 예제
//최종 목표 : 공지 1 > 2 > 3 > 4 > 1 순서 반복 진행
//목표1. 공지 1->2->3->4 진행 
//1. 어떤 방향으로 움직이는가? 어떤 크기를 기준으로 움직이는가? 체크
//아래->위 진행방향 === top, translateY, 크기 === 세로크기
//좌->우 진행방향 === left, translateX, 크기 === 가로크기
//2. 가로 또는 세로크기가 결정됐다면 이동 요수 개수가 몇 개인지? 인덱스 체크
//세로로 이동 === '세로크기 * 인덱스' 로 계산
//3. 변수 준비
//공지1,2,3,4를 보두 가지고 있는 움직이는 대상 ul "newsList"
//개별요소 파악을 위한 li "newsItems"
//개별요소 크기 "itemsHeight"
//인덱스 판단을 위한 "currentIndex"
const newsList = document.querySelector('#list');
const newsItems = document.querySelectorAll('#list li')
const itemsHeight = newsItems[0].offsetHeight //40이라고 하거나 개별 크기를 인식하는 속성 작성;
let currentIndex = 0;
console.log(newsList,newsList,itemsHeight,currentIndex) 
// 셋인터벌
const newsTimer = setInterval(()=>{
    currentIndex++;
    newsList.style.transform = `translateY(-${itemsHeight*currentIndex}px)`;
    newsList.style.transition = 'transform 0.5s ease';
    
    // 모든 list가 이동했을 때 초기화 하는 조건문과 setTimeout
    if(currentIndex == newsItems.length){ //currentIndex가 newsItems의 갯수와 같을 때
        setTimeout(()=>{
            currentIndex = 0; // 초기화
            newsList.style.transition = 'none' //4 -> 1로 확 올라가지 않게 막음
            newsList.style.transform = 'translateY(0)'; //초기화
        },500) /* transition시간과 동일하게 설정 */
    }

}, 1000);
/* 무한 스크롤 동작을 위한 원본 공지사항 복제후 리스트 끝에 추가하기 */
// 인터벌 안에 있으면 1초마다 반복되기 때문에 인터벌 밖에 놔야 한다 
for(let i of newsItems){
    const clone = i.cloneNode(true); // cloneNode : 복제(true) = i를 복제하는데 자식자손까지 포함해서 복제하겠다
    newsList.appendChild(clone);
}
//무한으로 올라가는 공지사항 스크롤 예제
//최종 목표 : 공지 1 > 2 > 3 > 4 > 1 순서 반복 진행
//목표1. 공지 1->2->3->4 진행 
//1. 어떤 방향으로 움직이는가? 어떤 크기를 기준으로 움직이는가? 체크
//좌->우 진행방향 === left, translateX, 크기 === 가로크기
//2. 가로 또는 세로크기가 결정됐다면 이동 요수 개수가 몇 개인지? 인덱스 체크
//가로로 이동 === '가로크기 * 인덱스' 로 계산
//3. 변수 준비
//공지1,2,3,4를 보두 가지고 있는 움직이는 대상 ul "newsList2"
//개별요소 파악을 위한 li "newsItems2"
//개별요소 크기 "itemsHeight2"
//인덱스 판단을 위한 "currentIndex2"
const newsList2 = document.querySelector('.news_container2 #list'); //움직이는 대상
const newsItems2 = document.querySelectorAll('.news_container2 #list > li');
const itemswidth = 800;
let currentIndex2 = 0; // 인덱스 0부터 시작
console.log(newsList2,newsItems2,itemswidth,currentIndex2)
//setInterval
const newsTimer2 = setInterval(()=>{
    currentIndex2++; //인덱스를 +1씩 증감하면서↓(아래)를 실행
    // 좌 > 우 진행하도록 이동효과를 주기
    newsList2.style.transform = `translateX(-${itemswidth * currentIndex2}px)`; 
    // '가로크기 * 인덱스' 로 계산
    // html에 position을 주면 js는 left = 값
    newsList2.style.transition = 'transform 1s ease';

    //모든 list가 이동했을 때 초기화 하는 조건문과 setTimeout
    if(currentIndex2 == newsItems2.length){//인덱스 번호가 newsItems2의 갯수와 같을 때
        setTimeout(()=>{// 0.5초 후 한번만 '초기화' 작업 실행하겠다
            currentIndex2 = 0; // 인덱스번호 초기화 
            newsList2.style.transition = 'none'
            newsList2.style.transform = 'translateX(0)'
        },1000)
    }
},1500);
for(let i of newsItems2){
    const clone2 = i.cloneNode(true);
    newsList2.appendChild(clone2);
}

