<?php
	if(isset($_POST["login"]))
	{
		echo $_POST["name"];
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Login Form</title>
</head>
<body>
	<h1>Login Form</h1>
	<form action="submit.php" method="post">
		<input type="text" name="name" placeholder="Enter Your Name">
		<input type="submit" name="login">
	</form>
</body>
</html>