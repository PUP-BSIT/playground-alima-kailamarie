<?php
include_once("database.php");
session_start();
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $first_name = trim($request->first_name);
    $last_name = trim($request->last_name);
    $username = trim($request->username);
    $email = trim($request->email);
    $birthday = trim($request->birthday);
    $sex = trim($request->sex);
    $password = trim($request->password);
    $confirmPassword = trim($request->confirmPassword);
    $university = trim($request->university);

    if ($password !== $confirmPassword) {
        $data = array('message' => 'password_mismatch');
        echo json_encode($data);
        exit;
    }

    // Hash the password before storing it
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    // Use prepared statements to prevent SQL injection
    $stmt = $mysqli->prepare("INSERT INTO users (first_name, last_name, username, email, birthday, sex, password, university) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $first_name, $last_name, $username, $email, $birthday, $sex, $passwordHash, $university);

    if ($stmt->execute()) {
        $_SESSION['user'] = $email;
        $data = array('message' => 'success');
        echo json_encode($data);
    } else {
        $data = array('message' => 'failed');
        echo json_encode($data);
    }

    // Close the statement
    $stmt->close();
}
?>
