<?php
include 'db.php';

$id = $_GET['id'];

$sql = "SELECT * FROM user WHERE id = $id";
$result = $conn->query($sql);

$user = null;
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
}

echo json_encode($user);

$conn->close();
?>