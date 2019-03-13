<?php 

	if(isset($_COOKIE[session_name()]))
	{
		setcookie(session_name(),'',time()-86400,'/');
	}
	session_unset();

	//session_destroy();

	echo "You have been logged out<br>";

	echo "<p><a href='index.php'>Start a new Session</a></p>";

 ?>