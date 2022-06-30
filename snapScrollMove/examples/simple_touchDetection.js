//タッチディバイスで要素にタッチ反応があったときは自動スクロールを停止する
let DOM_header_img_in = document.getElementById("huga");//snapscrollの親要素のDOMの取得
let touchnum = 0;//現在反応している指の数
let ssm = new snapScrollMove(DOM_header_img_in);
let auto_move_header_img_in = () => setInterval(() => ssm.moveTo(ssm.getIndex() + 1) ,5000);//Intervalの設定
let touchinterval = auto_move_header_img_in();//Intervalの実行
DOM_header_img_in.addEventListener('touchstart',(e) => {//タッチ検知時
	if(!touchnum){//(複数の指が検知したとき)最初に反応した指であるなら(touchnum != 0)
		clearInterval(touchinterval);
	}
	touchnum++;
});
DOM_header_img_in.addEventListener('touchend',(e) => {
	touchnum--;
	if(!touchnum){//(複数の指が検知したとき)離れた指であるなら(touchnum != 0)
		touchinterval = auto_move_header_img_in();
	}
});
