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
echo $dbhandler->selectComments();
