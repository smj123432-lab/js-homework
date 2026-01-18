// server.js
Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // 루트 경로면 component.html 보여주기
    if (url.pathname === "/") {
      return new Response(Bun.file("index.html"));
    }

    // 나머지는 파일 그대로 서빙
    const filePath = url.pathname.slice(1); // 맨 앞 '/' 제거
    const file = Bun.file(filePath);

    // 파일이 존재하는지 확인
    if (await file.exists()) {
      return new Response(file);
    }

    // 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log(":rocket: 서버 실행: http://localhost:3000");
