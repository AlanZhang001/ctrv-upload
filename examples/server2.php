<?php

    header("Content-type:text/plain;charset=utf-8");

    //上传文件路径
    $destination_folder = "uploadimg/";

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        // 接受到的数据
        $base_64 = $_POST["content"];

        // decode 之后的数据
        $base64_decode = base64_decode($base_64);

        if (!file_exists($destination_folder)) {
            mkdir($destination_folder);
        }

        $filepath = $destination_folder.md5($base64_decode).".png";

        file_put_contents($filepath, $base64_decode);

        $fileInfo = array(
                            'image_size' => getimagesize($file),
                            'url' => $filepath,
                            'info' => pathinfo( $filepath ),
                            'link' => "//".$_SERVER["SERVER_NAME"].dirname($_SERVER['SCRIPT_NAME'])."/".$filepath
                         );

        echo json_encode( $fileInfo );
    }

?>