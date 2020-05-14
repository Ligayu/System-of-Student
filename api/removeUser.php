<?php
    header('Content-Type:text/json;charset=utf-8');

    $conn = mysqli_connect("127.0.0.1","root","root","test");

    /*
    开放IP访问权限
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    */

    if (!$conn){
        die('Could not connect: ' . mysqli_error());
    }

    $sql = "DELETE FROM user WHERE id = $_GET[sId]";

    mysqli_query($conn,$sql);

    echo '{"code":0,"msg":"删除成功"}';

    mysqli_close($conn);

?>