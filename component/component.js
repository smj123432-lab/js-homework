const gameData = [
  {
    title: "크로노 오디세이",
    desc: "멈춰 있던 시간이 흐른다",
    type: "MMORPG",
    img: "/public/img/ct.png", // 앞의 캐릭터
    bg: "/public/img/bg.png", // ★ CSS에 있던 배경 경로를 여기로 이동!
  },
  {
    title: "아키에이지 워",
    desc: "시대의 전설을 향해",
    type: "MMORPG",
    img: "/public/img/ct1.png",
    bg: "/public/img/bg1.png", // ★ 아키에이지 배경 경로도 여기로!
  },
  {
    title: "패스 오브 엑자일 2",
    desc: "얼리 액세스 오픈!",
    type: "핵앤슬래시",
    img: "/public/img/ct2.png",
    bg: "/public/img/bg2.png", // ★ 아키에이지 배경 경로도 여기로!
  },
  {
    title: "오딘: 발할라 라이징",
    desc: "신의 영역을 차지하라",
    type: "MMORPG",
    img: "/public/img/ct3.png",
    bg: "/public/img/bg3.png", // ★ 아키에이지 배경 경로도 여기로!
  },
  {
    title: "롬: 리멤버 오브 마제스티",
    desc: "세계는 하나의 전장이 된다.",
    type: "MMORPG",
    img: "/public/img/ct4.png",
    bg: "/public/img/bg4.png", // ★ 아키에이지 배경 경로도 여기로!
  },
  {
    title: "배틀그라운드",
    desc: "최후까지 생존하라",
    type: "배틀로얄",
    img: "/public/img/ct5.png",
    bg: "/public/img/bg5.png", // ★ 아키에이지 배경 경로도 여기로!
  },
];

let currentPage = 1;
const itemsPerPage = 2; // 한 페이지에 2개씩 보여줌
const totalPage = Math.ceil(gameData.length / itemsPerPage); // 총 페이지 수 (3개)

// HTML에 있는 빈 그릇들과 버튼을 찾아옵니다.
const container = document.getElementById("game-list"); // 게임 목록 들어갈 곳
const prevBtn = document.getElementById("prev-btn"); // 이전 버튼
const nextBtn = document.getElementById("next-btn"); // 다음 버튼
const pageNumSpan = document.getElementById("page-num"); // 숫자(1) 들어갈 곳

// ========================================================
// 3. 화면 그리기 함수 (Render)
// ========================================================
function render() {
  // 1) 데이터 자르기: 현재 페이지에 보여줄 2개만 뽑아냅니다.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = gameData.slice(startIndex, startIndex + itemsPerPage);

  // 2) HTML 조립하기 (Template String)
  let htmlCode = "";

  currentItems.forEach((game) => {
    // ★ 핵심 포인트!
    // 배경은 <a>태그에 style로 넣고, 캐릭터는 <img>태그로 넣습니다.
    // game-item 클래스는 우리가 CSS에서 통합해서 만든 그 친구입니다.
    htmlCode += `
      <article class="game-item">
        <a href="/" style="background-image: url('${game.bg}');">
          <img src="${game.img}" alt="${game.title}" />
        </a>
        <h3>${game.title}</h3>
        <p>${game.desc}</p>
        <p class="type">${game.type}</p>
      </article>
    `;
  });

  // 3) 완성된 HTML을 화면에 집어넣기
  container.innerHTML = htmlCode;

  // 4) 페이지 번호 업데이트 (textContent 사용!)
  pageNumSpan.textContent = currentPage;
}

// ========================================================
// 4. 버튼 클릭 이벤트 (무한 루프 로직)
// ========================================================

// [이전 버튼 클릭]
prevBtn.addEventListener("click", () => {
  currentPage--; // 1을 뺌
  if (currentPage < 1) {
    currentPage = totalPage; // 1보다 작아지면 마지막 페이지(3)로 이동
  }
  render(); // 화면 다시 그리기
});

// [다음 버튼 클릭]
nextBtn.addEventListener("click", () => {
  currentPage++; // 1을 더함
  if (currentPage > totalPage) {
    currentPage = 1; // 마지막보다 커지면 첫 페이지(1)로 이동
  }
  render(); // 화면 다시 그리기
});

// ========================================================
// 5. 초기 실행
// ========================================================
// 페이지가 처음 열렸을 때 1페이지를 그려줍니다.
render();
