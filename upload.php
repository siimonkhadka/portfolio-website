<?php
include 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['resume'])) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["resume"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    if ($fileType != "pdf") {
        echo "Sorry, only PDF files are allowed.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    } else {
        if (move_uploaded_file($_FILES["resume"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars(basename($_FILES["resume"]["name"])). " has been uploaded.";

 
            $stmt = $conn->prepare("INSERT INTO resumes (file_name) VALUES (:file_name)");
            $stmt->bindParam(':file_name', basename($_FILES["resume"]["name"]));
            $stmt->execute();
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>
