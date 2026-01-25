# js-homework

## 사민재 자바스크립트 과제

### 과제 수행 과정

이번주 수업에서 해주신 강의 덕분에 이번엔 비교적 ai의 도움을 덜 받을 수 있었습니다.
일단 이번 과제 진행 과정에 대해서 적어보겠습니다.

1. 전체를 묶는(헤더, 메인) 디브 박스를 만들어서 그 안에 헤더, 메인을 각각 구성했습니다.
2. 시안에 적어져있는대로 css 속성을 적용했으며, 헤더 외부 선하나 :before을 이용해 내부 점선을 만들어놨습니다.
3. 먼저 각각의 셀렉터를 지정 후에 forEach를 사용해서 클릭 시 이벤트를 연결해주었습니다.

```
const tabList = document.querySelector(".tabList");
const headerBtn = tabList.querySelectorAll("button");
const tabMain = document.querySelectorAll(".Menu");

console.log(tabMain);

headerBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    headerBtn.forEach((button) => {
      button.classList.remove("is-click");

      button.setAttribute("aria-selected", "false");
    });

    tabMain.forEach((menu) => {
      menu.classList.remove("is-active");
    });

    btn.classList.add("is-click");
    tabMain[index].classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
  });
});

```

다만, 문제는 제가 보기에 forEach 안에 forEach를 넣은게 가독성이 떨어지지 않나 혹은 효율성이 떨어진다는 생각이 들었습니다.

다시 다른 방법을 통해 구성 해보겠다는 생각이 들었습니다.

또한, 이번주부터 ai를 통해 함수 문제들을 만들어서 문제들을 풀어보고자 하였습니다.
근데 계속 드는 생각이 아직 능동적으로 생각하는 능력이 부족하다는 생각이 듭니다.

더욱 문제를 늘려 10문제 씩은 풀어봐야겠습니다.

### 회고

- 반복문 메서드를 사용하는 능력이 부족합니다
- 아직 알려주신 방법으로 밖에 못하겠는데, 그 방법 또한 아직까지 숙련도 부족인 것 같습니다.
- 그래도 이번엔 조금 뿌듯함이 들었습니다. ai 사용 비중이 많이 않았어서 성장했다는 실감이 들었습니다.
