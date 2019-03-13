<?php

    session_start();

    if(!isset($_SESSION['todoCollection'])) {
        $_SESSION['todoCollection'] = [];
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>ToDo List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body style="background-color:powderblue; ">

    <div class="container">
        <h1 style="padding: 20px; color: white;" class="row justify-content-center">ToDo List</h1>
        <div class="jumbotron column">
            <form class="text-center" action="storeItem.php" method="get">
                <input type="text" name="addtodo">
                <input type="submit" name="submitForm">
            </form>
            <br>

            <div>
                <?php for($i = 0; $i < sizeof($_SESSION['todoCollection']); $i++) { ?>
                    
                <form class="text-center" action="del.php" method="post">
                    <input style="display: none;" type="number" name="index" value="<?php echo $i; ?>">
                    <div>
                    <?php 

                        // <input type="submit" name="done" value="done">
                                if ($_SESSION['todoCollection'][$i]['isCompleted'] == 'pending') {
                                    echo "<p> ". $_SESSION['todoCollection'][$i]['caption'] . "</p>";
                                    echo "<input type='submit' name='done' value='Pending'>";
                                }
                                else {
                                    
                                    echo "<p style='text-decoration: line-through;'> ". $_SESSION['todoCollection'][$i]['caption'] . "</p>";
                                    echo "<input type='submit' name='done' value='Done'>";
                                }
                               echo '<input style="margin:5px;" type="submit" name="del" value="delete">';
                    ?>
                    </div>
                </form>
                <?php } ?>
            </div>
            </div>
        <a href="logout.php">Exit Session</a>

    </div>

    <script src=“https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js” integrity=“sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM” crossorigin=“anonymous”></script>
</body>
</html>