<?php
	$server = "127.0.0.1";
	$username = "root";
	$password = "goldtree9";
	$db = "ToDo_App_DB";

	$conn = mysqli_query($server,$username,$password,$db);

	if(!$conn)
		die("Failed to Connect" )
 ?>