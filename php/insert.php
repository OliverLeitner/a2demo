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
header("Access-Control-Allow-Origin: http://angular.neverslair-blog.net");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST");
if (isset($_POST)) {
    $data = (array)json_decode(key($_POST));
    echo $dbhandler->insertComment($data);
} else {
    echo "no data to insert";
}
