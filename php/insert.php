<?php
/**
 * inserting given post
 * from form into db
 */
include "loader.php";
//this might get some
//additional security
//features in production
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
if (isset($_POST)) {
    $data = (array)json_decode(key($_POST));
    echo $dbhandler->insertComment($data);
} else {
    echo "no data to insert";
}
