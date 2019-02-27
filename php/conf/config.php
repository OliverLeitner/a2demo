<?php
/**
 * configuration
 */
//database configuration
$database = (object) array (
    "servername" => "localhost",
    "username" => "user",
    "password" => "pass",
    "database" => "guestbook"
);

//CORS origins allowed
$http_origins = array(
    "http://dev.ip:4200",
    "http://angular.neverslair-blog.net"
);
