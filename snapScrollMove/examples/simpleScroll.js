//5秒ごとに1つ右のSnapにシフトし最終のSnapのあとに0番に戻る
var ssm = new snapScrollMove(document.querySelector("hoge"));
setInterval(() => ssm.moveTo(ssm.getIndex() + 1), 5000);
