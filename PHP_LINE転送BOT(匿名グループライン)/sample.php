<?php
$userIDs = explode("\n",file_get_contents('./user_id.txt'));
var_dump($userIDs);
for($i = 0;$i < count($userIDs);$i += 1){
echo $userIDs[$i];
			if($userID != $userIDs[$i] && $userIDs[$i] != ''){
				file_put_contents('./sample.txt',$i."番目のIDです\n",FILE_APPEND);
			}
		}
?>