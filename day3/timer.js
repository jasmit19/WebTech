/*function setInterval(() => {
    function myFunction()
    {
        let timing=new Date;
        document.getElementsById("liveClock").innerHTML= 
        timing.getHours() + timing.getMinutes() + timing.getSeconds;
    }
}, 1000);*/

setInterval(myFunction,1000);

function myFunction()
{
    let timing=new Date;
    document.getElementById("liveClock").innerHTML = 
    timing.getHours() + ":" +
    timing.getMinutes() + ":" +
    timing.getSeconds();
}

