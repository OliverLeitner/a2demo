<?php
/**
 * a base loader...
 */
require_once "conf/config.php";
require_once "lib/class.database.php";
//cors checking
$http_origin = "";
//thats where the cors comes from
$test_parm = "HTTP_ORIGIN";
//if the config actually holds the hostname the req came from...
if (in_array($_SERVER[$test_parm], $http_origins)) {
    $http_origin = $_SERVER[$test_parm];
} else {
    die("sorry, no access");
}
//create a db handler
$dbhandler = new \demoApp\DataBase($database);
