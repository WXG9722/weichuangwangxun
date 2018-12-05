var oHeadDiv = document.getElementById('floor-tab-head');
var aLi = oHeadDiv.getElementsByTagName('li');
var oBodyDiv = document.getElementById('floor-tab-body');
var aUl = oBodyDiv.getElementsByTagName('ul');

for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        for(var j=0 ;j<aLi.length; j++){
            aLi[j].className = "";
            aUl[j].className = "";
        }
        this.className = "selected";
        aUl[this.index].className = "active";
    }
}
console.log(aUl)