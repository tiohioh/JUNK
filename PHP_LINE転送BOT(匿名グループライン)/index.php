<?php
$LINE_ACCESS_TOKEN = '*****Your ACCESS TOKEN HERE';
$LINE_ACCESS_TOKEN = 'Bearer ' . $LINE_ACCESS_TOKEN;

$meta = file_get_contents('php://input');
$body = json_decode($meta);
//本来は複数のWebhookについて考慮しないといけないが、この実装では無視する
$request_type = $body->events[0]->type;
//とりあえず、テキストのみ対応にする(画像対応は画像を取得するためにリクエストを投げる必要があるので面倒)

//log 保存
file_put_contents('./logjson.txt',$meta."\n",FILE_APPEND);

if($request_type == "follow"){
	$userID = $body->events[0]->source->userId;
	$token = $body->events[0]->replyToken;
	file_put_contents('./user_id.txt',$userID."\n",FILE_APPEND);
	$return_text = "お友達追加ありがとうございます。\n匿名送信ボットです。このチャットボットに送ったメッセージはこのチャットボットと友達になっている全ての人に再送されます。送った人や受けとる人は利用者からは分かりません。\nこの匿名トークルームには送信取り消し機能はありません。ご注意ください。";
	reply_message($token,$return_text);
}elseif($request_type == 'unfollow'){
	//remove userid from database
	$userID = $body->events[0]->source->userId;
	$write = str_replace($userID."\n",'',file_get_contents('./user_id.txt'));
	file_put_contents('./user_id.txt',$write);
}elseif($request_type == 'message'){
	$message_type = $body->events[0]->message->type;
	if($message_type == 'text'){
		//メッセージの送信処理->送った人以外に送付
		$message = $body->events[0]->message->text;
		$userID = $body->events[0]->source->userId;
		$userIDs = explode("\n",file_get_contents('./user_id.txt'));
		for($i = 0;$i < count($userIDs);$i += 1){
			if($userID != $userIDs[$i] && $userIDs[$i] != ''){
				send_message($userIDs[$i],$message);
				file_put_contents('./sample.txt',$i."番目のIDです\n",FILE_APPEND);
			}
		}
	}else{
		$return_text = "このメッセージタイプはサポートされていません。\n$message_type = {$message_type}\n";
		$token = $body->events[0]->replyToken;
		reply_message($token,$return_text);
	}
}else{
	$return_text = "このイベントタイプは処理されません。\n$request_type = {$request_type}\n";
	$token = $body->events[0]->replyToken;
	reply_message($token,$return_text);
}


http_response_code(200);

function send_message($toID,$message){
	global $LINE_ACCESS_TOKEN;
	
	$LINE_PUSH_URL = 'https://api.line.me/v2/bot/message/push';

	$header = 'Authorization: '.$LINE_ACCESS_TOKEN."\r\n";
	$header .= "Content-Type: application/json\r\n";

	$body = array(
		'to' => $toID,
		'messages' => [array(
			'type' => 'text',
			'text' => $message
		)]
	);
	$context = array(
		'http' => array(
			'method' => 'POST',
			'content'=> json_encode($body),
			'header' => $header,
			'ignore_errors' => true
		)
	);
	
	$result = file_get_contents($LINE_PUSH_URL, false,stream_context_create($context));
	file_put_contents('./sample.txt',$result."\n",FILE_APPEND);
}

function reply_message($replayID,$message){
	global $LINE_ACCESS_TOKEN;####合ってる？
	echo $LINE_ACCESS_TOKEN;
	$LINE_PUSH_URL = 'https://api.line.me/v2/bot/message/reply';
	//必ず:との間にスペースを開けない
	$header = "Authorization: ".$LINE_ACCESS_TOKEN."\r\n";
	$header .= "Content-Type: application/json\r\n";

	$body = array(
		'replyToken' => $replayID,
		'messages' => [array(
			'type' => 'text',
			'text' => $message
		)]
	);
	$context = array(
		'http' => array(
			'method' => 'POST',#POSTは大文字
			'content' => json_encode($body),
			'header' => $header,
			'ignore_errors' => true
		)
	);
	
	$result = file_get_contents($LINE_PUSH_URL,false,stream_context_create($context));
	file_put_contents('./sample.txt',$result."\n",FILE_APPEND);
}
?>