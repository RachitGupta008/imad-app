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