<?php
session_start();
	if(isset($_POST["del"]))
	{
		array_splice($_SESSION['todoCollection'], $_POST['index'], 1);
		header("Location:index.php");
	}

	if(isset($_POST["done"]))
	{
		if($_SESSION['todoCollection'][$_POST['index']]['isCompleted'] == 'completed')
		{
			$_SESSION['todoCollection'][$_POST['index']]['isCompleted'] = 'pending';	
		}
		else
			$_SESSION['todoCollection'][$_POST['index']]['isCompleted'] = 'completed';

		header("Location:index.php");
	}
 ?>