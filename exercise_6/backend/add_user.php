<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$last_name = $data['last_name'];
$given_name = $data['given_name'];
$email = $data['email'];

$sql = "INSERT INTO user (last_name, given_name, email) VALUES ('$last_name', '$given_name', '$email')";

if ($conn->query($sql) === TRUE) {
    $response = ["status" => "success", "id" => $conn->insert_id];
} else {
    $response = ["status" => "error", "message" => $conn->error];
}

echo json_encode($response);

$conn->close();
?>