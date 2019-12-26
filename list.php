<?php

require("dbconfig.php");
$studentList=[];


 if(isset($_GET['selId']))
{
	$id=$_GET['selId'];
	$sql = "SELECT * FROM studentregister where stId=$id";
	$result = mysqli_query($conn, $sql);
	$studentList=[];
	if (mysqli_num_rows($result) > 0)
		{
			$count=0;
			
			if($row = mysqli_fetch_assoc($result))
			{
			  $studentList[$count]['stId']=$row['stId'];
			  $studentList[$count]['stFirstName']=$row['stFirstName'];
			  $studentList[$count]['stLastName']=$row['stLastName'];
			  $studentList[$count]['stEmail']=$row['stEmail'];
			  $studentList[$count]['stPassword']=md5($row['stPassword']);
			  $count++;
			}
			echo json_encode($studentList);
		} 
		else {
				echo "0 results";
			}
	
}
else if(isset($_GET['delId']))
{
	$id=$_GET['delId'];
	$sql = "delete FROM studentregister where stId=$id";
	if(mysqli_query($conn, $sql))
	{
		http_response_code(204);
	}
	else{
		return http_response_code(422);
	}
	
}
else{

		$sql = "SELECT * FROM studentregister";
		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) > 0) {
			$count=0;
			// output data of each row
			while($row = mysqli_fetch_assoc($result)) {
				
			  $studentList[$count]['stId']=$row['stId'];
			  $studentList[$count]['stFirstName']=$row['stFirstName'];
			  $studentList[$count]['stLastName']=$row['stLastName'];
			  $studentList[$count]['stEmail']=$row['stEmail'];
			  $studentList[$count]['stPassword']=md5($row['stPassword']);
			  $count++;
			}
			echo json_encode($studentList);
		} else {
			echo "0 results";
		}
	}
?>