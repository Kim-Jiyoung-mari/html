//일정 창 팝업
const addPopup = document.querySelector('.add_bg');
const dayBtn = document.querySelector('.js_add1');
const clostBtn = document.querySelector('.plan_close')

addPopup.style.display = 'none';
dayBtn.addEventListener('click',()=>{
    addPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
clostBtn.addEventListener('click',()=>{
    addPopup.style.display = 'none';
    document.body.style.overflow = 'hidden'; 
})

//할 일 창 팝업
const addPopup2 = document.querySelector('.todo_bg');
const todoBtn = document.querySelector('.js_add2');
const clostBtn2 = document.querySelector('.todo_close')

addPopup2.style.display = 'none';
todoBtn.addEventListener('click',()=>{
    addPopup2.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
clostBtn2.addEventListener('click',()=>{
    addPopup2.style.display = 'none';
    document.body.style.overflow = 'hidden'; 
})

//프로필 드롭다운
const profileDrop = document.querySelector('.profile_drop');
const profileBtn = document.querySelector('.profile');

profileDrop.style.display = 'none';

profileBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    profileDrop.style.display = 'block';
});

document.addEventListener('click', () => {
    profileDrop.style.display = 'none';
});


//반복 드롭다운
const dropDown = document.querySelector('.drop_wrap');
const repeatBtn = document.querySelector('.repeat_drop');
const repeat = document.querySelector('.repeat');

dropDown.style.display = 'none';

repeatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropDown.style.display = 'block';
});

//메인 미니달력 드롭다운
const miniDowm = document.querySelector('.left_minical');
const miniBtn = document.querySelector('.month_down');

miniDowm.style.display = 'none';

miniBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    miniDowm.style.display = 'block';
});

document.addEventListener('click', () => {
    miniDowm.style.display = 'none';
});

console.log(miniDowm,miniBtn);


// 모달 배경 클릭 → 닫기
addPopup.addEventListener('click', (e) => {
    if (!repeat.contains(e.target)) {
        dropDown.style.display = 'none';
    }
});

// ✅ 시작 탭 내용
// <초기세팅>
const dateCon1 = document.querySelector ('.start_cal');
const timeCon1 = document.querySelector ('.start_time');
const dateTab1 = document.querySelector('.tab_date1');
const timeTab1 = document.querySelector('.tab_time1');

function dateHide() {
    dateCon1.style.display = 'none';
}

function timeHide() {
    timeCon1.style.display = 'none';
}

dateHide();
timeHide();
dateTab1.classList.remove('tab_active');

// ➡️ 달력 클릭
dateTab1.addEventListener('click', (e) => {
    e.preventDefault();

    timeHide();
    dateCon1.style.display = 'flex';

    dateTab1.classList.add('tab_active');
    timeTab1.classList.remove('tab_active');
});

// ➡️ 시간 클릭
timeTab1.addEventListener('click', (e) => {
    e.preventDefault();

    dateHide();
    timeCon1.style.display = 'flex';

    timeTab1.classList.add('tab_active');
    dateTab1.classList.remove('tab_active');
});

// ✅ 종료 탭 내용
// <초기세팅>
const dateCon2 = document.querySelector ('.end_cal');
const timeCon2 = document.querySelector ('.end_time');
const dateTab2 = document.querySelector('.tab_date2');
const timeTab2 = document.querySelector('.tab_time2');

function dateHide2() {
    dateCon2.style.display = 'none';
}

function timeHide2() {
    timeCon2.style.display = 'none';
}

dateHide2();
timeHide2();
dateTab2.classList.remove('tab_active');

// ➡️ 달력 클릭
dateTab2.addEventListener('click', (e) => {
    e.preventDefault();

    timeHide();
    dateCon2.style.display = 'flex';

    dateTab2.classList.add('tab_active');
    timeTab2.classList.remove('tab_active');
});

// ➡️ 시간 클릭
timeTab2.addEventListener('click', (e) => {
    e.preventDefault();

    dateHide2();
    timeCon2.style.display = 'flex';

    timeTab2.classList.add('tab_active');
    dateTab2.classList.remove('tab_active');
});

// ✅ 날짜 탭 내용
// <초기세팅>
const planCon = document.querySelector ('.date_cal');
const planTab = document.querySelector('.tab_plan');
console.log(planCon,planTab);

function planHide() {
    planCon.style.display = 'none';
}

planHide();

planTab.classList.remove('tab_active');

// ➡️ 달력 클릭
planTab.addEventListener('click', (e) => {
    e.preventDefault();

    timeHide();
    planCon.style.display = 'flex';

    planTab.classList.add('tab_active');
});