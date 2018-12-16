<?php
        echo  "<script>alert('11')</script>";
        $id=$_POST['id'];
		$pwd=$_POST['pwd'];
		$uname=$_POST['uname'];
        $birdate=$_POST['birdate'];
        $email=$_POST['email'];
		echo  "<script>alert($id)</script>";
		$conn=@new MySQLi("localhost","root","");
		if($conn->connect_error){
			echo "連線資料庫伺服器失敗<br>";
			}else
			{
			//echo "連線資料庫伺服器成功<br>";	
			echo  "<script>alert($id)</script>";
			$conn->select_db("guestdb");	//選擇DB
			$conn->set_charset("utf8");;	//設定編碼
				
			$sql="Insert Into persondata(帳號,密碼,姓名,生日,信箱) Values('$id','$pwd','$uname','$birdate','$email')";	//資料庫新增記錄
			
			if($conn->query($sql)){
				echo "$uname 恭喜您,註冊成功<br>";
				}else{
				echo "$uname 不好意思,無法註冊<br>";
				}
			
			}
            $result->close();
            $mysqli->close();

?>