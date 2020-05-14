<?php 
    header('Content-Type:text/json;charset=utf-8');

    $con = mysqli_connect("127.0.0.1","root","root","test");

    /*
    开放IP访问权限
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    */

    if (!$con){
        die('Could not connect: ' . mysqli_error());
    }

    date_default_timezone_set('PRC');
    $createTime = date("Y-m-d H:i:s",time());

    $sql="INSERT INTO user (name, sex, academy,introduce,createTime)
    VALUES
    ('$_POST[name]','$_POST[sex]','$_POST[academy]','$_POST[introduce]','$createTime')";


    if (!mysqli_query($con,$sql)){
      die('Error: ' . mysqli_error());
    }


    echo '{"code":0,"msg":"添加成功"}';

    mysqli_close($con)

?>