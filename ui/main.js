console.log('Loaded!');
(function f(){
    var req =  new XMLHttpRequest();
    req.onreadystatechange = function (){
        if(req.onreadystatechange === XMLHttpRequest.DONE){
            if(req.status === 200){
                var count = req.responseText;
                var span  = document.getElementById("article1no");
                span.innerHTML = count;
            }
        }
    };
    
    req.open('GET',"/count",true);
    req.send();
})();