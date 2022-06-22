<?php
php
/*
Plugin Name: Analytics Tag Inserter
Version: 1.0.0
Description: Remove HTML Tag, When you login.
*Knowledge of php is required to use this plugin.It should not be used by people without knowledge.
Author: ****
Author URI: ****
Plugin URI: 
Requires at least: 4.6
Requires PHP: 5.6
*/

//Tag ~ You want to show When you do not login
$a_tag = <<< EOF
insert analytics tag here.
EOF;

add_action("wp_head","insert_head");
function insert_head(){
	if(!is_user_logged_in()){
		global $a_tag;
		echo $a_tag;
	}
}
