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
header("Access-Control-Allow-Methods: GET, OPTIONS");
echo $dbhandler->selectComments();
