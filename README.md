# js-homework

## 사민재 JavaScript 과제 

### 과제 수행 과정
------------------------
- 전부 삼항연산자를 이용해서 작성했습니다.
- 배운 것을 응용하려니 너무 어려웠습니다. 결국 안돼서 대부분을 ai의 도움을 받았습니다.
ai의 도움을 받는게 내 실력 향상에 도움이 될지 의문입니다. 
- 변수 / 상수 / 함수명 정하는 것이 너무 어려웠습니다. 
- 비밀번호 유효 문제는 비교적 쉽게 풀었습니다. 
- 4번 문제는 객체로 하는 방법이 있다고 했지만 아무리 해도 잘 모르곘어서 했던 방법대로 냅두었습니다. 


### 테스트 코드 작성
-------------------------
```
console.log(userWelcome('사민재', 'D'));
// 결과값 : '안녕하세요, 사민재님! 즐거운 쇼핑 되세요.'
console.log(userWelcome('사민재', 'VIP'));
// 결과값 : 'VIP' 사민재님, 특별한 혜택이 준비되어 있습니다!'

console.log(deliveryPrice('제주') + '원' );
// 3000원
console.log(deliveryPrice(20000, '서울') + '원' );
// 3000원
console.log(deliveryPrice(70000, '제주') + '원' );
// 3000원
console.log(deliveryPrice(20000, '도서') + '원');
// 6000원

console.log(isPasswordAvailable('qzwx1234'));
// true
console.log(isPasswordAvailable('qzwx1234567891234567'));
// true
console.log(isPasswordAvailable('qzwx12345678912345678'));
// false
console.log(isPasswordAvailable('qzwx123'));
// false

console.log(pointAccrualCalculation(50000, 'VIP'));
// 적립금은 2500원 입니다.
console.log(pointAccrualCalculation(50000, 'GOLD'));
// 적립금은 1500원 입니다.
console.log(pointAccrualCalculation(50000, 'SILVER'));
// 적립금은 500원 입니다.
console.log(pointAccrualCalculation(50000, ' '));
// 적립금은 250원 입니다.

console.log(movieTicketPriceCalculation('3D', true, 2));
// 27200원
console.log(movieTicketPriceCalculation('IMAX', false, 1));
// 20000원
console.log(movieTicketPriceCalculation(' ', true, 3));
// 33600원

```


### 과제 코드 리뷰 
----------------
- userwelcome 

  - 일치 동등 연산자를 분명 배웠으나 머리에서 생각이 나질 않았다. 결국 찾아서 === 일치 연산자를 이용해서 코드를 짯다. 
  - 아직도 함수의 구조를 잘 이해하지 못하는 것 같다는 생각이 들었다.


-  deliveryPrice
  
    - 삼항 연산자를 조건에 따라 이어서 작성할 수 있다는 것을 알았다. 안되는 줄 알고 하나하나 변수를 선언해서 코드를 썻다가 수정했다.
    - 역시 ai의 도움을 받은거라 제대로 짠 것인지 확신이 들지 않는다. 그나마 아 삼항 연산자를 이렇게 이용하면 되겠구나 싶은 생각은 들었다.

  - isPasswordAvailable
    
    - 이건 다행히 크게 어려웠던건 없었다. .length를 쓸 때 조금 헷갈렸지만 다행히 잘 넘어갔다

    
  - pointAccrualCalculation 
  
    - 다행히 2번에서 적용한 삼항연산자가 눈에 들어와 삼항연산자를 이용해 풀었지만 객체를 이용한 방법이 있다는 소리를 듣고 해보려했으나 머리 속에 그러지지가 않아 그대로 냅두었다.
    - parsint를 이용해 정수 부분만을 반환했다 그리고 텍스트를 추가했다.. 


  - movieTicketPriceCalculation

    - 머리 속에 그려질랑말랑 했으나 결국 대부분을 ai의 도움을 받았다...
    - 후에 다시 이 문제를 풀어보고 비슷한 문제들 역시 풀어봐야할 것 같다. 

  

  ### 회고 
  --------
  - 거의 ai의 도움을 받았다는 것이 너무 아쉬웠다. 분명 처음보다는 성장한 것이 맞으나 계속 성장할 수 있을까 싶은 생각이 들었지만 그래도 쭉 풀어봐야할 것 같다. 
  - 썻던 삼항연산자 비교 연산자면 쓰려고 하는 문제점이 있는 것 같다.
  - 위에도 작성했듯 응용이 전혀 안되는 것 같다는 느낌을 받았다. 많이풀어봐야만 할 수 있을 것 같다.
  - 뭘 모르는지도 모르는 듯한 느낌을 받는다. 또한, 눈에 들어오는 객관적인 평가가 없으니 잘하고 있는건지 애매하다. 
