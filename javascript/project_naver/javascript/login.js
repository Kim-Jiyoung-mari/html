/* QR코드 메세지 팝업 X닫기 기능 */
// 1. "messageX" X 클릭했을 때
// 2. "messagePopup" QR코드 메세지 팝업 숨기기
const messageX = document.querySelector('.title .message .close');
const messagePopup = document.querySelector('.title .message');
console.log(messageX, messagePopup);

messageX.addEventListener('click',()=>{
    // messagePopup.style.display = 'none';
    messageX.parentElement.style.display = 'none'
})

/* 로그인 탭&내용 js */
// 0. 초기 세팅 'id로그인 제목 활성화 디자인', 일회용&qr숨기기, id로그인내용 보이기
const loginTitle = document.querySelectorAll('.title h2');
const loginContent = document.querySelectorAll('.login_box');
console.log(loginTitle, loginContent);
// 0-1. 제목 활성화(id) / 비활성화(일회용, qr) == 기준 active 클래스 활성기준 
loginTitle[0].classList.add('active');
loginTitle[1].classList.remove('active');
loginTitle[2].classList.remove('active');
// 0-2. 내용(ID)보이기 / 내용(일회성,QR) 숨기기
loginContent[0].style.display = 'block';
loginContent[1].style.display = 'none';
loginContent[2].style.display = 'none';

//1. 일회용번호 제목 클릭
loginTitle[1].addEventListener('click',()=>{
    //모든 제목 활성화 디자인 해제하기
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    //일회용번호 제목 활성화 디자인 적용하기
    loginTitle[1].classList.add('active');

    //2. 모든 내용 숨기기
    loginContent[0].style.display = 'none';
    loginContent[1].style.display = 'none'; 
    loginContent[2].style.display = 'none';
    
    //3. 일회용 번호 내용 보이기
    loginContent[1].style.display = 'block'; 
})

loginTitle[2].addEventListener('click',()=>{
    //모든 제목 활성화 디자인 해제하기
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    //일회용번호 제목 활성화 디자인 적용하기
    loginTitle[2].classList.add('active');

    //2. 모든 내용 숨기기
    loginContent[0].style.display = 'none';
    loginContent[1].style.display = 'none'; 
    loginContent[2].style.display = 'none';

    //3. qr 내용 보이기
    loginContent[2].style.display = 'block'; 
})

loginTitle[0].addEventListener('click',()=>{
    //모든 제목 활성화 디자인 해제하기
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    //일회용번호 제목 활성화 디자인 적용하기
    loginTitle[0].classList.add('active');

    //2. 모든 내용 숨기기
    loginContent[0].style.display = 'none';
    loginContent[1].style.display = 'none'; 
    loginContent[2].style.display = 'none';

    //3. id로그인 내용 보이기
    loginContent[0].style.display = 'block'; 
})
//==========================아이디 비밀번호 유효성검사
//1. 아이디 입력 오류 "아이디를 입력해 주세요"
//1-1. "userId" 사용자가 아이디를 입력 안하고 = (빈문자열) ""
//1-2. "loginBtn" 로그인 버튼을 클릭했을 때 
//1-3. "errorMgs"오류 메세지 출력 "아이디를 입력해주세요."

//2. 비밀번호 입력 오류 "비밀번호를 입력해주세요."
//2-1. (선행조건) 아이디 입력 기준
//2-2. "userPw" 사용자가 아이디는 입력하고 비밀번호를 입력 안하고
//2-3. "loginBtn" 로그인 버튼을 클릭했을 때 
//2-4. "errorMgs"오류 메세지 출력 "비밀번호를 입력해주세요."

//3. 로그인 오류 "아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요."
//3-1. (선행조건) 아이디와 비밀번호를 모두 입력했을 때 기준
//3-2. "userId,userPw" 사용자가 아이디와 비밀번호를 모두 입력 후
//3-3. "loginBtn" 로그인버튼 클릭 시
//3-4. "errorMgs"오류 메세지 출력 "아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요."

// [빈 태그 생성했을 때]
const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');
const loginBtn = document.querySelector('#login');
const errorMgs = document.querySelector('.error_message');
console.log(userId, userPw, loginBtn, errorMgs);

// 폰트스타일 전역스코프에 작성=클릭했을 때만 생기는 이벤트가 아니기 때문
errorMgs.style.color = '#F00';
errorMgs.style.fontSize = '0.88rem';
errorMgs.style.margin = '30px 0';

loginBtn.addEventListener('click',()=>{
    if(userId.value === '') errorMgs.textContent = '아이디를 입력해주세요.'
    //userId값이 빈문자열인가?(거짓)일 때 인식하는 두번째 조건식(↓)
    else if(userPw.value === '') errorMgs.textContent = '비밀번호를 입력해주세요.';
    //userId값이 빈문자열인가?(거짓),userPw값이 빈문자열인가?(거짓)일 때=모든 조건이 거짓일 때
    else errorMgs.textContent = '아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요.';
})

//==========================일회용 번호 유효성검사
//1. 일회용 번호 입력 오류
//1-1 사용자가 번호를 입력 안하고
//1-2 로그인 버튼을 눌렀을 때
//1-3 오류메세지 출력 "일회용 로그인 번호를 입력하세요"

//2-1 사용자가 번호를 잘못 입력하고
//2-2 로그인 버튼을 눌렀을 때
//3-3 오류메세지 출력 "일회용 로그인 번호를 확인한 후 다시 입력해 주세요."

const loginNum = document.querySelector('#login_num');
const loginBtn2 = document.querySelector('.one_time_login #login');
const errorMgs2 = document.querySelector('.one_time_login .error_message');
console.log(loginNum,loginBtn2,errorMgs2)

errorMgs2.style.color = '#F00';
errorMgs2.style.fontSize = '0.88rem';
errorMgs2.style.padding= '0 0 10px 0';

loginBtn2.addEventListener('click',()=>{
    if(loginNum.value === '')errorMgs2.textContent='일회용 로그인 번호를 입력하세요'
    else errorMgs2.textContent='일회용 로그인 번호를 확인한 후 다시 입력해 주세요.'
})

//==========================IP보안 ON/OFF 글자 변경 JS
//0. check#ip_on 체크되면 "ON" / 체크해제되면 OFF
//1. ON 기본 활성화(html, css 준비완료)
//2. "ipCheckbox" 체크박스의 상태를 변경했을 때 = 클릭함으로써 변경(change)되는 체크박스 상태 (= 인풋 체크박스의 체인지 이벤트)
//3. "switchState" 체크가 되어 있었다면 switch_state 글자를 on > off로 변경
//4. 체크가 해제상태라면 switch_state 글자를 off > on로 변경

// 라벨로 잡은 js는 인풋기준으로 잡는다 (↓)
const ipCheckbox = document.querySelector('#ip_on');
const switchState = document.querySelector('.switch_state');
console.log(ipCheckbox,switchState);

ipCheckbox.addEventListener('change',()=>{
    // console.log('상태변경');
    switchState.textContent = ipCheckbox.checked ? 'ON' : 'OFF'; 
})