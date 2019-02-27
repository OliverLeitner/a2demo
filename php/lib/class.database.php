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
    private $CON = null;

    /**
     * constructor function
     *
     * @param mixed connection properties
     */
    public function __construct($opts)
    {
        $this->CON = new \mysqli(
            $opts->servername,
            $opts->username,
            $opts->password,
            $opts->database
        );

        if ($this->CON->connect_error) {
            return "[{ db: false }]";
        } else {
            return "[{ db: true }]";
        }
    }

    /**
     * cleanup
     */
    public function __destruct()
    {
        $this->CON->close();
    }

    /**
     * write data into the database
     */
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
        $this->CON->query($query);
        return "[{ db_insert: true }]";
        /*} catch (Exception $ex) {
            echo $ex.getMessage();
            return "[{ db_insert: false }]";
            }*/
    }

    /**
     * show everything from the table
     */
    public function selectComments()
    {
        $query = "SELECT * FROM comments";
        $result = $this->CON->query($query);
        return json_encode($result->fetch_all(MYSQLI_ASSOC));
    }
}
