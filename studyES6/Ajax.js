var ajax = function(){
    var url = '';
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('GET', url, true);
    // xhr.open('POST', url ,true);
    // xhr.sendRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let obj = JSON.parse(xhr.responseText);
        }
    });
}