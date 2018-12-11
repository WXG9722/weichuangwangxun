function carouselMap(tabID, tabHeadID, tabHeadTagName, tabBodyID, tabBodyTagName, tabHeadGoal, tabBodyGoal){
    var tab = document.getElementById(tabID)
    var oHeadDiv = document.getElementById(tabHeadID);
    var aLi = oHeadDiv.getElementsByTagName(tabHeadTagName);
    var oBodyDiv = document.getElementById(tabBodyID);
    var aDiv = oBodyDiv.getElementsByTagName(tabBodyTagName);
    var iNow = 0;
    var timer;

    function change(idx){
        for(var i=0 ;i<aLi.length; i++){
            aLi[i].className = "";
            aDiv[i].className = "";
        }
        aLi[idx].className = tabHeadGoal;
        aDiv[idx].className = tabBodyGoal;
    }
    function run(){
        timer = setInterval(function(){
            iNow++;
            if(iNow >= aLi.length){
                iNow = 0;
            }
            change(iNow);
        },1000)
    }
    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            change(this.index);
            iNow = this.index;
        }
    }
    run();
    tab.onmouseover = function(){
        clearInterval(timer);
    }
    tab.onmouseout = function(){
        run();
    }
    
}
// 执行
carouselMap('slide-box','slide-btn-box','li','slide-img-box','a','slide-selected','slide-active');
carouselMap('floor-tab-item','floor-tab-head','li','floor-tab-body','ul','selected','active');