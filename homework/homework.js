// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.
let favoritMovie = 'Jeon_Woo_chi';
// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.
const lightSpeed = '299,792,458m/s';
// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.
let isEmailAvailable = true;
// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.
let productQuantity = '47개';
// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.
let usetPoint = '15,800점';
// 6. API 서버의 "기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.
const APIserver = 'www.naver.com';
// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.
let postTotalView = 1_247;
// 8."배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.
let deliveryState = 'delivered';
// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isCouponAvailable = true;
// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.
// 10MB = 10 * 1024KB * 1024Bytes
const MAX_FILE_SIZE = 10 * 1024 * 1024;
// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.
let userRankPoint = 85.5;
// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isNotificationAgreed = true;


// 함수 
// 1번
function userWelcome(userName, userRank) {
  const message = (userRank === 'VIP')
    ? 'VIP ' + userName + '님, 특별한 혜택이 준비되어 있습니다!'
    : '안녕하세요, ' + userName + '님! 즐거운 쇼핑 되세요.';
  return message
}
console.log(userWelcome('사민재', 'D'));
console.log(userWelcome('사민재', 'VIP'));


// 2번
const deliveryPrice = function (orderPrice, deliveryPlace) {
  // 50000원 이상이면 0원, 아니면 3000원
  const basicFee = (orderPrice >= 50000) ? 0 : 3000;
  // 배송 지역이 제주거나 도서이면 배송비 3000원 추가 아니면 0원
  const extraFee = ('제주' === deliveryPlace || '도서' === deliveryPlace) ? 3000 : 0;
  // 주문 금액이; 0원 이하일 경우 0원 아니면 3000원
  const result = (0 >= orderPrice) ? 0 : (basicFee + extraFee);

  return result
}

console.log(deliveryPrice('제주') + '원' );
console.log(deliveryPrice(20000, '서울') + '원' );
console.log(deliveryPrice(70000, '제주') + '원' );
console.log(deliveryPrice(20000, '도서') + '원');

// 3번
const isPasswordAvailable = (password) => password.length > 7 && password.length < 21

console.log(isPasswordAvailable('qzwx1234'));
console.log(isPasswordAvailable('qzwx1234567891234567'));
console.log(isPasswordAvailable('qzwx12345678912345678'));
console.log(isPasswordAvailable('qzwx123'));


// 4번
function pointAccrualCalculation(price, userLevel) {
  const point
      = (userLevel === 'VIP') ? price * 0.05
      : (userLevel === 'GOLD') ? price * 0.03
      : (userLevel === 'SILVER') ? price * 0.01
      : price * 0.005;
  return '적립금은 ' + parseInt(point) + '원 입니다.'
}
console.log(pointAccrualCalculation(50000, 'VIP'));
console.log(pointAccrualCalculation(50000, 'GOLD'));
console.log(pointAccrualCalculation(50000, 'SILVER'));
console.log(pointAccrualCalculation(50000, ' '));

// 5번
const movieTicketPriceCalculation = function (type, isMorning, people) {
  const normalMovie = 14_000
  const specialMovie = 17_000
  const imaxMovie = 20_000


  const Fee
      = (type === 'IMAX') ? imaxMovie
      : (type === '3D') ? specialMovie
      : normalMovie;

  const movieValue = (isMorning === true) ? Fee * 0.8 : Fee 
  // 할인율: 1 - 0.2 = 0.8
  return movieValue * people +'원'

}

console.log(movieTicketPriceCalculation('3D', true, 2));
console.log(movieTicketPriceCalculation('IMAX', false, 1));
console.log(movieTicketPriceCalculation(' ', true, 3));