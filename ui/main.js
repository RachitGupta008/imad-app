console.log('Loaded!');
(function f(){
    var req =  new XMLHttpRequest();
    req.onreadystatechange = function (){
        
            if(req.readyState == 4 && req.status == 200){
                
                var count = req.responseText;
                console.log(count);
                var span  = document.getElementById("article1no");
                span.innerHTML = count.toString();
            }
        
    };
    req.open('GET','http://rachit88888888.imad.hasura-app.io/api/counter',true);
    req.send(null);
})();
function log(){
    alert('hi');
}
var b = document.getElementById("signup/login");
b.onclick  = function (){
   
    document.getElementById("logoverlay").style.height = "100%";
    document.getElementById("logoverlay").style.width = "100%";
    document.getElementById("loginform").style.display = "block";
};
var login = document.getElementById("login");
var signup = document.getElementById("signup");
var signupInfo = document.getElementById("signupInfo");
var loginInfo = document.getElementById("loginInfo");


function changeAct(e1,e2,e3,e4){
    e1.classList.remove("active");
    e2.classList.add("active");
    e3.classList.remove("hidden");
    e4.classList.add("hidden");
}
var loginbutton = document.getElementById("loginbutton");
var signupbutton = document.getElementById("signupbutton");
signupbutton.onclick = function () {
    var signObj = {
    "username": document.getElementById("signuser").value,
    "password": document.getElementById("signpass").value,
    "name" : document.getElementById("signname").value
    };
    makeReq(signObj);
    
    
};
function makeReq(obj){
    var req =  new XMLHttpRequest();
    req.onreadystatechange = function (){
        if(req.readyState == 4 && req.status == 200){
            console.log(req.responseText);
        }
        
    };
    req.open('POST','/signup');
        req.setRequestHeader("Content-Type","application/json");
        req.send(JSON.stringify(obj));
}

loginbutton.onclick = function (){
var loginObj = {
    "username": document.getElementById("logname").value,
    "password": document.getElementById("logpass").value
    };
   makeReq(loginObj);
};