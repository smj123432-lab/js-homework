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
