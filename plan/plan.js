// const planButtons = document.querySelectorAll('[type="button"]');
// const planCards = document.querySelectorAll("article");
// const selectionInfo = document.querySelector(".selection-info");
// // const plan = planCards[0];
// // const standardPlan = planCards[1];
// // const planPrice = plan.getAttribute("data-price");
// const free = selectionInfo.querySelector('[data-id="plan-price"]');
// const hightlight = selectionInfo.querySelector(".highlight");
// const basic = plan.getAttribute("data-plan");

// const standard = standardPlan.getAttribute("data-plan");
// console.log(standard);

// planButtons.forEach((planButton) => {
//   planButton.addEventListener("click", (e) => {
//     // const currentCard = e.currentTarget.closest("article");
//     const planName = planCards.dataset.plan;
//     console.log();
//     const planPrice = planCards.dataset.price;
//     // highlight.textContent = planName; // 예: Basic -> Standard
//     // priceSpan.textContent = planPrice;
//     selectionInfo.classList.add("active");

//     free.textContent = planPrice;
//     hightlight.textContent = planName;
//     planCards.forEach((planCard) => {
//       planCard.classList.remove("selected");
//     });
//     e.target.parentElement.classList.add("selected");
//   });
// });

const planButtons = document.querySelectorAll(".plan-selection-button");
const planCards = document.querySelectorAll("article");
const selectionInfo = document.querySelector(".selection-info");

// 결과가 표시될 텍스트 요소들
const highlight = selectionInfo.querySelector(".highlight");
const price = selectionInfo.querySelector('[data-id="plan-price"]');

// 2. 클릭 이벤트 연결
planButtons.forEach((planButton) => {
  planButton.addEventListener("click", (e) => {
    console.log("버튼이 클릭");
    const currentCard = e.target.parentElement;
    const planName = currentCard.dataset.plan;
    const planPrice = currentCard.dataset.price;
    console.log(`선택 플랜: ${planName} 가격:  ${planPrice}`); // 값 확인
    highlight.textContent = planName;
    price.textContent = planPrice;

    selectionInfo.classList.add("active"); // 선택 바
    planCards.forEach((card) => {
      card.classList.remove("selected");
    });
    currentCard.classList.add("selected");
  });
});
