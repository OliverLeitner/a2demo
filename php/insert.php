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
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
if (!empty($vars)) {
    // decode base64 and turn the utf8 stuff
    $post = utf8_encode(base64_decode(key($vars)));
    // trim any newlines and empty chars
    $post = trim(preg_replace('/\s\s+/', ' ', $post));
    $data_array = json_decode($post, true);
    $var = array();
    foreach ($data_array as $key => $val) {
        $var[$key] = $val;
    }
    echo $dbhandler->insertComment($var);
} else {
    echo "no data to insert";
}
