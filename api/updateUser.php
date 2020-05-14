<?php 
    header('Content-Type:text/json;charset=utf-8');

    $con = mysqli_connect("127.0.0.1","root","root","test");

    /*
    开放IP访问权限
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    */

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }

    date_default_timezone_set('PRC');
    $createTime = date("Y-m-d H:i:s",time());

    $sql = "UPDATE user SET name='$_POST[name]',sex='$_POST[sex]',academy='$_POST[academy]',introduce='$_POST[introduce]',createTime='$createTime' where id='$_POST[id]'";

    if (!mysqli_query($con,$sql)){
      die('Error: ' . mysqli_error());
    }

    echo '{"code":0,"status":"ok"}';

    mysqli_close($con)

?>