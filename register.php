<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Registration system PHP and MySQL</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/Navigation-Clean.css">
    <link rel="stylesheet" href="assets/css/Navigation-with-Button.css">
</head>
<body>


<nav class="navbar navbar-dark navbar-expand-lg fixed-top navigation-clean-button">
    <div class="container"><a class="navbar-brand" href="#">E-HUB</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse"
            id="navcol-1">
            <ul class="nav navbar-nav mr-auto">
                <li class="nav-item" role="presentation"><a class="nav-link" href="index2.html">Home</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="newwithoutcourses.html">News</a></li>
               
            </ul><span class="navbar-text actions"><a class="login" href="aboutuswithoutcourses.html">About us</a><a class="login" href="login.php">Log In</a><a class="btn btn-light action-button" role="button" href="register.php">Sign Up</a></span></div>
    </div>
</nav>



	<div class="header">
		<h2>Register</h2>
	</div>
	
	<form method="post" action="register.php">

		<?php include('errors.php'); ?>

		<div class="input-group">
			<label>Username</label>
			<input type="text" name="username" value="<?php echo $username; ?>">
		</div>
		<div class="input-group">
			<label>Email</label>
			<input type="email" name="email" value="<?php echo $email; ?>">
		</div>
		<div class="input-group">
			<label>Password</label>
			<input type="password" name="password_1">
		</div>
		<div class="input-group">
			<label>Confirm password</label>
			<input type="password" name="password_2">
		</div>
		<div class="input-group">
			<button type="submit" class="btn btn-light" name="reg_user">Register</button>
		</div>
		<p class="text text-dark">
			Already a member? <a href="login.php">Sign in</a>
		</p>
	</form>
</body>
</html>