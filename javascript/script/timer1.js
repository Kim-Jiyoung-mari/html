// 타이머함수
// 일정시간마다 반복하는 serInterval
// setInterval(실행함수, 실행시간)
// const 타이머변수 = setInterval(실행함수, 실행시간)
// let num = 5;
// const timerDiv = document.querySelector('.timer');
// const timer1= setInterval(function(){
//     timerDiv.textContent = num+'초';
//     num--;
//     if(num === 0){
//         //window.location.href = './index.html';
//     }
// },1000);

console.log('========================================')
// 애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
let sec = 0;
const boxAin = document.querySelector('.box');
const boxTimer = document.querySelector('.box_timer');
let timer2 = setInterval(timerFunc,1000)
function timerFunc(){
    boxTimer.textContent = `진행시간 : ${sec}초`;
    sec++;
}

// stop버튼 클릭 시 진행시간, 애니메이션 모두 정지 (paused)
const stopBtn = document.querySelector('#stop');
// replay버튼 클릭 시 재생시간, 애니메이션 다시 재생 (running)
const replayBtn = document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
    // 셋인터벌을 가지고 있는 변수명을 작성
    clearInterval(timer2);
    boxAin.style.animationPlayState = 'paused';
})
replayBtn.addEventListener('click',()=>{
    boxAin.style.animationPlayState = 'running';
    timer2 = setInterval(timerFunc,1000)
})

// text를 한 글자씩 작성하는 자바스크립트
// 글자 하나씩 인덱스 [] 로 취급하며 1개씩 증가하게 한다. 증감연산자 작성
const text = 'Portfolio 2025';
let i = 0; // 글자의 인덱스로 인식할 인식변수 (변동될 예정이라 let)
const textSpan = document.querySelector('.container .text'); // = 글씨 출력해야 하니까
let txt = setInterval(writer,200);

function writer(){
     if(i<text.length){ // i가 글자의 갯수보다 작거나 같을 때 
         textSpan.innerHTML += text.charAt(i); // =대입연산자를 사용하면 글씨가 초기화 되기 때문에 쌓기 위해서 복합연산자 사용
        i++;
        console.log(i,text.charAt(i))//charAt : 한글자씩 인식하는 메서드
    }
}
writer() // 함수 호출용 

// 예제연습
const text2 = 'Portfolio 2025'
let j = 0;
const textSpan2 = document.querySelector('.container2 .text');
const txt2 = setInterval(writer2,200);

function writer2(){
    if(j < text2.length){
        if(j==9) textSpan2.innerHTML += '<br>'
        textSpan2.innerHTML += text2.charAt(j);
        j++;    
        console.log(j, text2.charAt(j));
    }
}
writer2()

// hello world
const text3 = 'Hello, World!'
let k = 0;
const textSpan3 = document.querySelector('.container3 .text');
const txt3 = setInterval(writer3,200);

function writer3(){
    if(k < text3.length){
        if(k==6) textSpan3.innerHTML += '<br>'
        textSpan3.innerHTML += text3.charAt(k);
        k++;
    }
}
writer3()