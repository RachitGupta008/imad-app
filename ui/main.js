console.log('Loaded!');
(function f(){
    var req =  new XMLHttpRequest();
    req.onreadystatechange = function (){
        
            if(req.readyState == 4 && req.status == 200){
                console.log(req.responseText);
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


function changeAct(e1,e2){
    e1.classList.remove("active");
    e2.classList.add("active");
}