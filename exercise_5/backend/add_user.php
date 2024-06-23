<?php
include 'db.php';

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Validate the data
if (
    isset($data->last_name) &&
    isset($data->given_name) &&
    isset($data->email)
) {
    $last_name = $data->last_name;
    $given_name = $data->given_name;
    $email = $data->email;

    // Insert the data into the database
    $sql = "INSERT INTO user (last_name, given_name, email) VALUES ('$last_name', '$given_name', '$email')";

    if ($conn->query($sql) === TRUE) {
        $response = array("status" => "success", "message" => "User added successfully.");
    } else {
        $response = array("status" => "error", "message" => "Error: " . $conn->error);
    }
} else {
    $response = array("status" => "error", "message" => "Invalid input.");
}

echo json_encode($response);

$conn->close();
?>