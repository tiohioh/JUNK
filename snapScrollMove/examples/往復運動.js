//indexが"0"か"length - 1"地点に来るとスクロールする向きを逆にします
let DOM_header_img_in = document.getElementById("header_img_in");
let adder = 1;
let ssm = new snapScrollMove(DOM_header_img_in);
setInterval(() => {
	adder = ssm.getIndex() >= ssm.length - 1 ? -1 : adder;
	adder = 0 >= ssm.getIndex() ? 1 : adder;
	ssm.moveTo(ssm.getIndex() + adder);
} ,5000);
