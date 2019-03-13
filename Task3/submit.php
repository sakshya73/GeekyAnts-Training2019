<?php 
	if(isset($_POST["showtable"]))
	{
		$num = $_POST["tablenum"];
		if(is_numeric($num))
		{
			echo "<center><table border='1' cellpadding='5px' cellspacing='20px'>";
			for($i = 1; $i <= 10; $i++)
			{
				echo "<tr><td>" . $num . " * " . $i . " = " . $num * $i . "</td></tr><br>"; 
			}
			echo "</table></center>";
		}
		else 
			echo "Please enter a number";
	}
 ?>