<?php
/**
 * Doing the db stuff
 */
namespace demoApp;
/**
 * DataBase Class
 */
class DataBase
{
    private $_CON = null;

    /**
     * constructor function
     *
     * @param mixed connection properties
     */
    public function __construct($opts)
    {
        $this->_CON = new \mysqli(
            $opts->servername,
            $opts->username,
            $opts->password,
            $opts->database
        );

        if ($this->_CON->connect_error) {
            return "[{ db: false }]";
        } else {
            return "[{ db: true }]";
        }
    }

    public function __destruct()
    {
        $this->_CON->close();
    }

    public function insertComment($data)
    {
        //insert data into the database
        $query = "INSERT INTO comments 
            (email, name, address, comment) 
            VALUES ('".
                $data["email"]."','".
                $data["name"]."','".
                $data["address"]."','".
                $data["comment"]."')";
        $this->_CON->query($query);
        return "[{ db_insert: true }]";
        /*} catch (Exception $ex) {
            echo $ex.getMessage();
            return "[{ db_insert: false }]";
            }*/
    }

    public function selectComments()
    {
        $query = "SELECT * FROM comments";
        $result = $this->_CON->query($query);
        return json_encode($result->fetch_all(MYSQLI_ASSOC));
    }
}
