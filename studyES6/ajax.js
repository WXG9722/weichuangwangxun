// 作者：王鑫广
// 名称：Promise封装Ajax
// 时间：2019.1.21
const $ajax = function(type, url){
    return new Promise((resolve, reject) => {
        let xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    console.log('成功');
                    resolve(this.responseText);
                }else{
                    reject(new Error(this.statusText));
                }
            }
        }
        if(type == 'GET'){
            xhr.open('GET', url, true);
            xhr.send();
        }else if(type == 'POST'){
            xhr.open('POST', url, true);
            xhr.setRequsetHeader('Content-type', 'application/www-xxx-form-urlencoded');
            xhr.send();
        } 
    })
}