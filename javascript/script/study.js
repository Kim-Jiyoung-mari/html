// 변수와 html 요소 활용
// 1. 밥 주문하기 변수와 함수
var bowl; // 그릇준비 : 바디에 들어오는 태그가 변수를 쓰려고 사용 하는 것
bowl = '쌀밥';
bowl = '콩밥';
// 함수 생성 (버튼 클릭시 호출 목적)
//function 생성함수명 () { 함수 실행 결과 }
function cookOrder(){
    console.log('주문한', bowl,'나왔습니다') 
    //변수 이름으로 반복, 변수는 최종값만 나온다, 데이터의 효율성을 위해 반복되는 데이터는 변수에 넣고 결과값만 수정하면된다.
}
// 2. 메일수신확인 변수와 함수, 버튼(메일함에는 하나의 메일만 넣을 수 있다, 새로운 메일이 오면 기존 메일은 폐기된다.)
var mail;
mail = '새 메일';
mail = '<쾅❣卫>۞ 포인트 ➎%턽 적립ㅎH드립Lㅣㄷr♔';
function emailCheck(){
    console.log(mail)
}
// 3. 장바구니 변수와 함수, 버튼
//'사과'만 구입할 수 있는 쇼핑몰
// 버튼을 누를 때 마다 사과가 1개씩 추가된다.
var cart;
cart = '사과';
var count;
count = 0;
function cartAdd(){
    count = count+1
    console.log(cart,count,'개 추가되었습니다.')
}
// 4. 재고 수량 감소 변수와 함수, 버튼
// 바나나 재고는 총 10개 , 사용자가 1개 주문할 때마다 재고가 주문수량만큼 감소한다.
// 버튼 클릭 시 콘솔 출력 메세지 예) 바나나 1개 주문완료. 재고 ?개 남았습니다.
var order;
order = '바나나';
var num; //재고
num = 10;
var order_num; //주문수량 
order_num = 0;
function orderBanana(){
    order_num = order_num + 1;
    num = num - order_num; // 사용자가 주문한 수량만큼 뺀다.
    console.log(order, order_num , '개 주문완료. 재고', num,'개 남았습니다.')
}