<?php

		require("dbconfig.php");

		$postdata = file_get_contents("php://input");
		if(isset($postdata) && !empty($postdata))
		{
						$request = json_decode($postdata,true);
						
						
						$stId=mysqli_real_escape_string($conn,(int)$_GET['upId']);
						$stFirstName = mysqli_real_escape_string($conn, trim($request['firstName']));
						$stLastName = mysqli_real_escape_string($conn, trim($request['lastName']));
						$stEmail = mysqli_real_escape_string($conn, trim($request['email']));
						$stPassword = mysqli_real_escape_string($conn, trim($request['password']));
						
						$sql = "update  studentregister set (stFirstName='$stFirstName', stLastName='$stLastName', stEmail='$stEmail',stPassword='$stPassword') where stId=$stId";
							
							if (mysqli_query($conn, $sql))
								{
									http_response_code(201);
									  $policy = [
										  'firstName' =>$stFirstName,
										  'lastName' => $stLastName,
										   'email' =>$stEmail,
										  'password' => $stPassword,
										  'stId'    => $stId
										];
										echo json_encode($policy);
								 
								} 
								else
								{
									return http_response_code(400);
								}
		}				
?>