function store(){

var userName = document.getElementById("username")
    var name = document.getElementById('email');
    var pw = document.getElementById('password');
    var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0 || pw.value.length < 5 ){
        alert('Password minimum leght will be 6 with 1 Uppercase letter and 1 number aatleast');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Password And Username Min lenght will be 6');

  

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else if (!name.value.match(email_validator_regex)){
        alert("Please fill Correct Email")
    }
    else if (userName.value.length < 5  ){
alert ("Please fill At least 6 letters in UserName ")
    }
    else{
        localStorage.setItem('userName',userName.value)
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        window.location.href = "login.html"
        // document.getElementById("signup-form").style.display ="none"
        // document.getElementById("logindiv").style.display = "block"
    }

    
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var storeUser = localStorage.getItem('userName')

    var userName = document.getElementById('emailcheck');
    var userPw = document.getElementById('passwordcheck');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.location.href = "home1.html"
       
    }else{
        alert('Please Sign up First');
    }
    
}
function back (){
    window.location.href = "index.html"
}
var storeUser = localStorage.getItem('userName')
var welcome = document.getElementById("ac")
console.log(welcome)
welcome.innerText= ` ${storeUser} `

function logOut (){
    window.location.href = "login.html" 
}

