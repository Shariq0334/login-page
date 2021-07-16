let allUsers ;
let savedUsers = localStorage.getItem("allUsers")
if (savedUsers){
    allUsers = JSON.parse(savedUsers)
}else {
    allUsers=[]
}
function store(){

var userName = document.getElementById("username").value
    var name = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var nameMatch = /^[a-zA-Z]+/g;
    var passMatch =/^[A-Za-z]\w{7,14}$/g;
    let user = {
        userName: userName,
        email:name,
        password:pw
    }
    
    

    if(!userName.match(nameMatch) || userName.length < 6 ){
   alert("Please fill correct Username minimum 6 leteters long")}
       
   else if(!name.match(email_validator_regex)){
        alert('Please fill Correct Email');

    }else if(!pw.match(passMatch)){
        alert('Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter');
    }
    else{
        var flag = false
        // localStorage.setItem('users', JSON.stringify([{name: name, password: pw,user_Name: userName}]));
        for(i=0 ; i<allUsers.length; i++ ){
            if(allUsers[i].email === name){
                flag = true
                
            }
        }
        if(flag){
            alert("This email is already registered")
        }else{
        allUsers.push(user)
    localStorage.setItem("allUsers",JSON.stringify(allUsers))
        alert('Your account has been created');
        window.location.href = "login.html"
        console.log(allUsers[0].email)
        // document.getElementById("signup-form").style.display ="none"
        // document.getElementById("logindiv").style.display = "block"
        }
    }


   
    
   
    
    

    
}

//checking
function check(){
    // var storedName = localStorage.getItem('name');
    // var storedPw = localStorage.getItem('pw');
    // var storeUser = localStorage.getItem('userName')

    var userName = document.getElementById('emailcheck').value;
    var userPw = document.getElementById('passwordcheck').value;
    let stored_users = JSON.parse(localStorage.getItem('allUsers'))

let flag= false
        for (let u = 0; u < stored_users.length; u++){
        if(userName == stored_users[u].email && userPw == stored_users[u].password){
                localStorage.setItem("userKey", u);
                flag = true
        }
        }    
         
         if(flag){
            alert('You are logged in.');
            window.location.href = "home1.html"
         }else{
             alert("Please Sign Up First")
         }
    }


    // return alert('Access denied. Valid username and password is required.');
    

function back (){
    window.location.href = "index.html"
}

var pageURL = window.location.toString();
var pageName = pageURL.slice(pageURL.lastIndexOf("/"));
console.log(pageName)
if(pageName === "/home1.html"){
let stored_users = JSON.parse(localStorage.getItem('allUsers'))
console.log(stored_users[0].userName)
var welcome = document.getElementById("ac")
var welcomEmail = document.getElementById("ad")
var userKey = localStorage.getItem("userKey");
welcome.innerText= `Name:  ${stored_users[userKey].userName} `
welcomEmail.innerText = `Email : ${stored_users[userKey].email}`
}
function logOut (){
    window.location.href = "login.html" 
}



function deleteAccount(){
    let stored_users = JSON.parse(localStorage.getItem('allUsers'))
    var toDelete = confirm("Are you sure?");
    if (toDelete) {
     stored_users.splice(userKey, 1);
     localStorage.setItem("stored_users", JSON.stringify(stored_users));
      window.location.replace("index.html");
    }else{
        alert("not deleted")
    }
   

//    let show = localStorage.removeItem(stored_users[userKey])
//    console.log(show)
//    console.log(stored_users.splice(userKey, 1));
    //localStorage.setItem("stored_users", JSON.stringify(stored_users));
    // window.location.href = "index.html"

}
