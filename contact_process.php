<?php
	$name=$_POST['name'];
	$email=$_POST['email'];
	$website=$_POST['website'];
	$message=$_POST['message'];

	echo 'name: '.$name.'<br/>email: '.$email.'<br/>website: '.$website.'<br/>message: '.$message;
	
	/* --Saved as comment for future implementation-- **
	require_once '/lib/Twilio/autoload.php';
	use Twilio\Rest\Client;
	
	$sid = "AC1871712e322c9f8a44b2add986751743";
	token = "4d9503721126ade5ee188ec66eb2cb04";
	$client = new Client($sid, $token);
	
	$client->messages->create(
		"+16139798527",
		array(
			'from' => '+16135193466',
			'body' => "name: $name <br/>email: $email <br/>website: $website <br/>message: $message",
		)
	);
	*/
?>
