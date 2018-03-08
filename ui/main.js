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
var b = document.getElementById("signup");
b.onclick  = function (){
   
    document.getElementById("logoverlay").style.height = "100%";
    document.getElementById("logoverlay").style.width = "100%";
};