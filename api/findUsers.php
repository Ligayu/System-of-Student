<?php 
    header('Content-Type:application/json;charset=utf-8');

    // require 'db.php';
    $conn = mysqli_connect("127.0.0.1","root","root","test");

    /*
    开放IP访问权限
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    */

    if (!$conn){
        die('Could not connect: ' . mysqli_error());
    }

    $sql="select *,(select count(*) from user) as total from user order by id desc";

    $result = mysqli_query($conn,$sql);

    $list = array();
    $total = 0;

    while($row = mysqli_fetch_array($result)){
        $item = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'sex' => $row['sex'],
            'academy' => $row['academy'],
            'introduce' => $row['introduce'],
            'createTime' => $row['createTime'],
        );
        array_push($list,$item);
        $total = $row['total'];
    }

    echo json_encode(
        array(
            'code'=>0,
            'msg'=>'查询数据成功',
            'list'=>$list,
            'total'=> intval($total)
        )
    );

    mysqli_close($conn);

?>