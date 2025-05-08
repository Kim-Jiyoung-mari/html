// 1. userHeight 키 입력하기
// 2. userWeight 몸무게 입력하기
// 3. resultBtn 버튼 클릭 시 click = 이벤트
// 4. 클릭하면 normal_w = (userHeight-100) * 100 계산하기 
// 5. result 최종 목표 출력하기
// 6. 초과값 사용자 체중 - 적정체중 
const userHeight = document.querySelector('#userheight'); //object.value
const userWeight = document.querySelector('#userweight'); //object.value
const resultBtn = document.querySelector('.resultbtn'); //object
const result = document.querySelector('.result'); //object
console.log(typeof (userHeight,userWeight,resultBtn,result));

resultBtn.addEventListener('click',function(){
    let normal_w = (Number(userHeight.value) - 100) * 0.9;
    let over_w = Number(userWeight.value) - normal_w;
    console.log(typeof (normal_w,over_w))

    weight_result = `적정체중 : ${normal_w}kg <br> ${over_w}kg 초과입니다!`
    console.log(typeof weight_result)

    return result.innerHTML = weight_result;
});