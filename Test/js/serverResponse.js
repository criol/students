    var serverResponse;
	
    var xhr = ("XMLHttpRequest" in window) ? new XMLHttpRequest() : new ActiveXObject("Msxml3.XMLHTTP");
    xhr.open("GET", 'http://localhost:51204/Api/GetDektop', true);
    //xhr.setRequestHeader("Content-Type","application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            serverResponse = xhr.responseText;
            //var arr_from_json = JSON.parse(serverResponse);
            console.log(arr_from_json);
        }
    };
    xhr.send(null);