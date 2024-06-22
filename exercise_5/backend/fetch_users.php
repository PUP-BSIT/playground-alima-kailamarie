<?php
include 'db.php';

$sql = "SELECT * FROM user";
$result = $conn->query($sql);

$users = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

echo json_encode($users);

$conn->close();
?>