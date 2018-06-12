<?php
/**
 * a base loader...
 */
require_once "conf/config.php";
require_once "lib/class.database.php";
//create a db handler
$dbhandler = new \demoApp\DataBase($database);
