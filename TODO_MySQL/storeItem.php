<?php 
	session_start();
	if (isset($_GET['submitForm'])) {
        array_push($_SESSION['todoCollection'], ['caption' => $_GET['addtodo'], 'isCompleted' => false]);
    }
	header("Location: index.php");
 ?>