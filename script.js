var time1=15;
var downloadTimer=setInterval(function(){
    if(time1<=0)
    {
        clearInterval(downloadTimer);
        document.getElementsByClassName("timer1").innerHTML="Done";   
    }
    else{
        document.getElementsByClassName("timer1").innerHTML=time1+"Seconds remaining";
    }
    time1-=1;
},1000);