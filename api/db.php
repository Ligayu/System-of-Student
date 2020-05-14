<?php
    // $con = mysql_connect("127.0.0.1","root","root");
    $con = mysqli_connect("127.0.0.1","root","root","test");

    /*
    开放IP访问权限
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    */

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }
    // mysqli_select_db("test", $con);

    // mysqli_query("set character set 'utf8'");
    // mysqli_query("set names 'utf8'");

    // usleep(50000);
?>