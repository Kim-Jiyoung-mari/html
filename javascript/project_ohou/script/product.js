// 1. 작은 썸네일 이미지에 마우스를 올렸다
// 2. 위 1번 대상에만 테두리 적용 (다른 모든 요소에 테두리가 제거) classList
// 3. 위 1번 대상이 우측 큰 이미지에 나타남 
// DOM Node : 좌측 작은썸네일, 우측 이미지
// 속성 , 메서드 , 이벤트 : 마우스를 올렸다, 테두리 적용, 테두리가 제거, 나타남
const thumnail = document.querySelectorAll('.thumnail a img');
const bigImage = document.querySelector('.photo .big img');
console.log(thumnail, bigImage);
console.log(thumnail[0].parentElement);

//두번째 썸네일에 마우스 올렸을 때 큰 이미지 big2.jpg변경
// thumnail[1].addEventListner('mouseover',()=>{});
function thum_remove(){
    // 1,2,3,4,5를 다 제거하고 <1-1>
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
    thumnail[2].parentElement.classList.remove('active');
    thumnail[3].parentElement.classList.remove('active');
    thumnail[4].parentElement.classList.remove('active');
}
function bigSrc(num){ //<2-1> 매개변수 생성
    return bigImage.src = `./images/big${num}.jpg` // <2-3> 전달 받음
}
thumnail[0].addEventListener('mouseover',function(){
    bigSrc(1);// <2-2> 매개변수 호출
    thum_remove(); // 함수 호출 : 모두 제거한 후에 <1-2>
    thumnail[0].parentElement.classList = 'active'; // 원하는 거만 활성화가 실행한다 <1-3>
});
thumnail[1].addEventListener('mouseover',function(){
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
});
thumnail[2].addEventListener('mouseover',function(){
    bigSrc(3);
    thum_remove();
    thumnail[2].parentElement.classList = 'active';
});
thumnail[3].addEventListener('mouseover',function(){
    bigSrc(4);
    thum_remove();
    thumnail[3].parentElement.classList = 'active';
});
thumnail[4].addEventListener('mouseover',function(){
    bigSrc(5);
    thum_remove();
    thumnail[4].parentElement.classList = 'active';
});