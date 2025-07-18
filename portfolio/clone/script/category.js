// 카테고리 스크롤업
// 1.탭 내용
const tabCon = document.querySelectorAll('.menu_list');

//2. 탭 버튼
const tabBtn = document.querySelectorAll('.category_list .list_btn');

let isClicking = false; // 클릭 중 여부 확인용

//탭 CSS 클래스 초기화
function tabClass(){
    for(let i of tabBtn) i.classList.remove('css_bg');
}

//초기 클래스 설정 설정
tabClass();
tabBtn[0].classList.add('css_bg');

//클릭이벤트
tabBtn.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        isClicking = true;

        window.scrollTo({
            top:tabCon[index].offsetTop - 80, // 상단 여백 약간 줘서 보기 좋게
            behavior: 'smooth',
        }); 

        tabClass();
        tabBtn[index].classList.add('css_bg');
        moveHighlight(index);

        // 스크롤 애니메이션 끝날 시간 이후에 클릭 상태 해제
        setTimeout(() => {
            isClicking = false;
        }, 500); // scrollTo가 끝날 시간 (디바운스 느낌)

        e.preventDefault();
    });
});

// 스크롤 이벤트 (탭 하이라이트 변경)
// tabCon
// tabBtn
// 스크롤 내릴때 tabCon의 스크롤 상단 위치를 인식해서 그 위치에 따라 tabBtn 클래스(css_absole)변경
// 1. 의류 (초기값 클래스 미리 설정)
// 2. 가방 (스크롤 움직이자마자 바로 가방 클래스 설정)
// 3~8. 스크롤 위치에 따라 메뉴 동작하게 하기 
tabBtn[0].classList.add('css_bg');  //1. 의류 (초기값 클래스 미리 설정)
const scrollY = () => window.pageYOffset || document.documentElement.scrollTop;

// 대신 window.pageY0Offset 또는 document.documentElement.scrollTop을 써야 정확해
window.addEventListener('scroll', function () {
    if (isClicking) return; // 클릭 중일 땐 무시!

    const y = scrollY(); // 현재 스크롤 위치
    const scrollBottom = window.innerHeight + y;
    const docHeight = document.body.scrollHeight;

    tabCon.forEach(function(t, i) {
        if (y >= t.offsetTop - 30) {
            tabClass();
            tabBtn[i].classList.add('css_bg');
        };
    });

    // ✅ 맨 아래 도달 시 마지막 탭 활성화
    if (scrollBottom >= docHeight - 10) { // 약간의 여유 줘서 안정성 높이기
        tabClass();
        tabBtn[tabBtn.length - 1].classList.add('css_bg');
        moveHighlight(tabBtn.length - 1);
    }
});