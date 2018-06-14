<?php
/**
 * inserting given post
 * from form into db
 */
include "loader.php";
//this might get some
//additional security
//features in production
header("Content-Type: application/json, Content-Charset: UTF-8");
header("Access-Control-Allow-Origin: ".$http_origin);
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST");
if (isset($_POST)) {
    $post = base64_decode(key($_POST));
    $data_array = json_decode($post);
    $var = array();
    foreach ($data_array as $key => $val) {
        $var[$key] = $val;
    }
    echo $dbhandler->insertComment($var);
} else {
    echo "no data to insert";
}
