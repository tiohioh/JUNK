<?php
	$ex = file_get_contents("./dat.txt");
	if($_POST["val"] != $ex && $_POST["val"]){
		//書き込み
		file_put_contents("./dat.txt",$_POST["val"]);
		$w = $_POST["val"];
	}else{
		$w = $ex;
	}
#echo $w;
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>WEBMEMO</title>
	<style>
#ta{
width: 100%;
height: 500px;
}
	</style>
</head>
<body>
<div>脆弱性ありScriptタグの入力禁止復旧作業が面倒くさい)</div>
	<button id="submit">送信(更新)</button>
	<button id="clear">クリア</button>
	<button id="copy">落とす</button>
	<button onclick="location.href='./raw.php'">VIEW RAW</button>
	<div id="editor" style="width:50wv;height:80vh"></div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.js"></script>
	<form id="form" style="display:none;" method="POST" action="#">
		<textarea name="val"></textarea>
	</form>
	<script>
<!--
		history.pushState('',"WEBMEMO",location.origin + location.pathname);
		var editor = ace.edit("editor");<!--
		editor.setValue(`<?php echo $w ?>`);//-->
		document.getElementById("submit").onclick = (e) => {
			let f = document.getElementById("form");
			f.val.value = editor.getValue();
			form.submit();
		}
		document.getElementById("clear").onclick = (e) => {
			editor.setValue("");
		}
		document.getElementById("copy").onclick = (e) => {
			const blob = new Blob([editor.getValue()],{type:"text/plain"});
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'WEBMEMO.txt';
			link.click();
		}

-->
	</script>

</body>
</html>
