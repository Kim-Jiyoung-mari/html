// 인스타그램 아이콘 클릭 시 활성화 이미지로 변경하기
// off -> on
// like 이미지 클릭 시 off-> on 변경되는 결과
// 1. 변수 생성
// const like = document.querySelector('.like img');
// console.log(typeof like); //데이터 타입 : object | 객체 = like , 속성 = src
// console.log(like.src); 
// 2. 동적기능 없이 자바스크립트에서 바꿔보기(객체의 속성을 on이라는 이름으로 바꾸기)
// insta.js 위치에서 like_on.png 연결시 프로젝트 최상위 폴더 기준(html) 연결
// like.src = './images/like_on.png'; 최상위 폴더 기준으로 html 처럼 작성
// 경로쓰려는 위치 : insta.css위치에서 like_on.png 상대경로연결
// ../imeges/icons/like_on.png

// 이벤트 : mouseover(마우스 올렸을 때), mouseout(마우스 나갔을 때) = 객체를 기준으로 해야함
// off 이미지에 마우스를 올리면 on로 변경
// on 이미지에서 마우스가 나가면 off로 변경
const likeIcon = document.querySelector('.like img'); 
const commentsIcon = document.querySelector('.comments img');
const paperIcon = document.querySelector('.paper img');

function iconSrc(target, name, status){//매개변수 생성
    // return target.src = `./images/like_${status}.png`;
    return target.src = `./images/${name}_${status}.png`;//매개변수 호출
}
likeIcon.addEventListener('mouseover',function(){
    iconSrc(likeIcon, 'like', 'on') //호출할 때 대입
});
likeIcon.addEventListener('mouseout',function(){
    iconSrc(likeIcon, 'like', 'off')
});

//2.코멘트 아이콘 on/off
// function iconSrc(status){
//     return commentsIcon.src = `./images/comment_${status}.png`;
// }
commentsIcon.addEventListener('mouseover',function(){
    iconSrc(commentsIcon, 'comment', 'on')
});
commentsIcon.addEventListener('mouseout',function(){
    iconSrc(commentsIcon, 'comment', 'off')
});
//3.공유 아이콘 on/off
// function iconSrc(status){
//     return paperIcon.src = `./images/paper_${status}.png`;
// }
paperIcon.addEventListener('mouseover',function(){
    iconSrc(paperIcon, 'paper', 'on')
});
paperIcon.addEventListener('mouseout',function(){
    iconSrc(paperIcon, 'paper', 'off')
});