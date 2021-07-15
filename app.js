// var users = {
//     userA: {
//         name: 'usernameA',
//         pw: 'passwordA'
//     },
//     userB: {
//         name: 'usernameB',
//         pw: 'passwordB'
//     }
// };

function store(){

var userName = document.getElementById("username").value
    var name = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    let stored_users = JSON.parse(localStorage.getItem('users'));
    
    

    if(pw.length ==0 || name.length == 0){
   alert("Please Fill")
       


    }else if(pw.length == 0 || pw.length < 5 ){
        alert('Password minimum leght will be 6 with 1 Uppercase letter and 1 number aatleast');

    }else if(name.length == 0 && pw.length == 0){
        alert('Password And Username Min lenght will be 6');

  

    }else if(!pw.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else if (!name.match(email_validator_regex)){
        alert("Please fill Correct Email")
    }
    else if (stored_users ){
        localStorage.setItem('userName',userName.value)
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        stored_users.push({name: name, password: pw,user_Name: userName});
        localStorage.setItem('users', JSON.stringify(stored_users));
        alert('Your account has been created');
        window.location.href = "login.html"
    }
    else{
        localStorage.setItem('users', JSON.stringify([{name: name, password: pw,user_Name: userName}]));
        alert('Your account has been created');
        window.location.href = "login.html"
        // document.getElementById("signup-form").style.display ="none"
        // document.getElementById("logindiv").style.display = "block"
    }

    
}

//checking
function check(){
    // var storedName = localStorage.getItem('name');
    // var storedPw = localStorage.getItem('pw');
    // var storeUser = localStorage.getItem('userName')

    var userName = document.getElementById('emailcheck').value;
    var userPw = document.getElementById('passwordcheck').value;
    var userRemember = document.getElementById("rememberMe");
    let stored_users = JSON.parse(localStorage.getItem('users'))


    if(stored_users){
        for (let u = 0; u < stored_users.length; u++){
            if(userName == stored_users[u].name && userPw == stored_users[u].password){
                localStorage.setItem("userKey", u);
                alert('You are logged in.');
                window.location.href = "home1.html"
            }
        }
    }
else{
        localStorage.setItem('users', '[]');
    }
    return alert('Access denied. Valid username and password is required.');
    
}
function back (){
    window.location.href = "index.html"
}

var pageURL = window.location.toString();
var pageName = pageURL.slice(pageURL.lastIndexOf("/"));
console.log(pageName)
if(pageName === "/home1.html"){
let stored_users = JSON.parse(localStorage.getItem('users'))
console.log(stored_users[0].name)
var welcome = document.getElementById("ac")
var welcomEmail = document.getElementById("ad")
var userKey = localStorage.getItem("userKey");
welcome.innerText= `Name:  ${stored_users[userKey].user_Name} `
welcomEmail.innerText = `Email : ${stored_users[userKey].name}`
}
function logOut (){
    window.location.href = "login.html" 
}


function deleteAccount(){
    let stored_users = JSON.parse(localStorage.getItem('users'))
    stored_users.splice(userKey, 1);
    localStorage.setItem("stored_users", JSON.stringify(stored_users));
    window.location.href = "index.html"
}

