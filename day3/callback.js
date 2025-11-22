function myDisplayer(something)
{
    //"demo" is called by it's id tag and value of "something" will replace it
    document.getElementById("demo").innerHTML = something
}

function myCalculator(n1,n2,myCallback)
{
    let sum=n1+n2;

    myCallback(sum);
}

myCalculator(10,11,myDisplayer);