// mm을 입력하고 "bmonth" 
// 버튼을 클릭하면 "flowerBtn"
// 결과 출력된다 "flowerResult"

// 사용자 입력값
const bmonth = document.querySelector('#month');
const flowerBtn = document.querySelector('#btn');
// 결과 출력값
const flowerResult = document.querySelector('.bdayResult');
//탄생화 꽃말
const birthday_flower = [
    {monthEng:'January', month:1, flower:'수선화', content:'자기애, 자존심, 외로움'},
    {monthEng:'February', month:2, flower:'제비꽃', content:'겸손, 양보'},
    {monthEng:'March', month:3, flower:'수선화',content:'자기애, 자존심, 외로움'},
    {monthEng:'April', month:4, flower:'스위트피', content:'추억, 즐거움'},
    {monthEng:'May', month:5, flower:'은방울꽃', content:'희망, 섬세함'},
    {monthEng:'June', month:6, flower:'백합', content:'순결'},
    {monthEng:'July', month:7, flower:'미나리아재비', content:'아름다움, 인격'},
    {monthEng:'August', month:8, flower:'글라디올러스', content:'비밀, 상상, 견고함'},
    {monthEng:'September', month:9, flower:'물망초', content:'진실한 사랑'},
    {monthEng:'October', month:10, flower:'금잔화', content:'실망, 비애'},
    {monthEng:'November', month:11, flower:'국화', content:'성실, 진실'},
    {monthEng:'December', month:12, flower:'포인세티아', content:'축하, 감사'},
]
const flowerPic = document.querySelector('.bdayResult img');
console.log(bmonth,flowerBtn,flowerResult);
console.log(typeof birthday_flower)
console.log(birthday_flower[0].monthEng);
console.log(birthday_flower[0].month);
console.log(birthday_flower[0].flower);
console.log(birthday_flower[0].content);
console.log(typeof birthday_flower[0].month);

flowerPic.style.display = 'none'
flowerBtn.addEventListener('click',()=>{
    const inputMonth = Number(bmonth.value);

    for (let i=0; i < birthday_flower.length; i++) {
        if (birthday_flower[i].month === inputMonth) {
            flowerData = birthday_flower[i];
        }
        flowerPic(flowerPic, birthday_flower[i]);
    }

    if (flowerData) {
        flowerResult.innerHTML = birthday(
            flowerData.monthEng,
            flowerData.month,
            flowerData.flower,
            flowerData.content
        );
    }
})

function birthday(data1,data2,data3,data4){
    let txt= `${data1}<br>`
    txt += `${data2}월의 탄생화는 ${data3} '${data4}'입니다.`;
    return txt;
};
function flowerSrc(target,number){
    return target.src = `./images/flower${number}.jpg`
}