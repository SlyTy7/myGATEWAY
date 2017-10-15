$(document).ready(function(){
	getIntro();
});

var outputDiv = $(".header");
var output = "";
var accounts = [
	{
		email: "admin@gmail.com",
		firstname: "Administrator",
		lastname: "",
		password: "admin"
	},
	{
		email: "johnsmith@gmail.com",
		firstname: "John",
		lastname: "Smith",
		password: "password"
	},
	{
		email: "tylerwest@gmail.com",
		firstname: "Tyler",
		lastname: "West",
		password: "fakepassword"
	}
];

//function that builds and takes you to home page
function getIntro(){
	$("#in-out")[0].text = "Log In";
	$("#in-out").attr("onclick","getLogin()");

	output = `
		<h1 class="text-primary">Welcome</h1>
		<hr>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultricies nibh. Proin ac elementum arcu, in euismod eros. Nullam tempus, odio ac elementum bibendum, mauris lectus feugiat odio, eu tempor lectus enim in sem. Nulla efficitur aliquet ligula at rutrum. Fusce ut pretium nulla. Ut luctus aliquam felis ac auctor.</p>
		<br>
		<div class="intro-buttons text-right">
			<a href="#" class="btn btn-primary" id="login" onclick="getLogin()">Log In</a>
			<a href="#" class="btn btn-secondary" id="signup" onclick="getCreateAccount()">Sign Up</a>
		</div>
	`;
	outputDiv.html(output);
}

//function that builds and takes you to log in screen
function getLogin(){
	console.log("login button pressed");
	output = `
		<h1 class="text-primary">Log In</h1>
		<hr>
		<div class=form-group>
			<p>Email Address</p>
			<input type="email" name="email" class="form-control" placeholder="name@email.com" id="email">
		</div>
		<div class=form-group>
			<p>Password</p>
			<input type="password" name="password" class="form-control" placeholder="Your Password" id="password">
		</div>
		<br>
		<div class="login-buttons text-left">
			<a href="#" class="btn btn-primary" id="verify" onclick="verify()">Log In</a>
		</div>
	`;
	outputDiv.html(output);
}

//function that checks if email and password are correct
function verify(){
	var email = $("#email").val();
	var password = $("#password").val();
	var error = "<p class='text-danger error'>Incorrect email/password.  Please try again!</p>";
	console.log(email);
	console.log(password);


	for(var i=0; i<accounts.length; i++){
		//email verificiation
		if(email == accounts[i].email){

			//password verification
			if(password == accounts[i].password){
				$("#in-out")[0].text = "Log Out";
				$("#in-out").attr("onclick","getIntro()");

				output = `
					<h1 class="text-primary">Welcome Back, ${accounts[i].firstname}!</h1>
					<hr>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultricies nibh. Proin ac elementum arcu, in euismod eros. Nullam tempus, odio ac elementum bibendum, mauris lectus feugiat odio, eu tempor lectus enim in sem. Nulla efficitur aliquet ligula at rutrum. Fusce ut pretium nulla. Ut luctus aliquam felis ac auctor.</p>
				`

				return outputDiv.html(output);
			}else{
				console.log("password verification failed")
				outputDiv.html(output + error);
			}
		}else{
			console.log("email verification failed!")
			outputDiv.html(output + error);
		}
	}
}
