console.log('Loaded!');
(function f(){
    var req =  new XMLHttpRequest();
    req.onreadystatechange = function (){
        
            if(req.status === 200){
                var count = req.responseText;
                alert(count);
                var span  = document.getElementById("article1no");
                span.innerHTML = count.toString();
            }
        
    };
    
    req.open('GET',"/count",true);
    req.send();
})();