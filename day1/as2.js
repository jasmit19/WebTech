let s=(a,b,c)=>a+b+c;
let v=s(10,11,12)
console.log(s(10,11,12))


function add(a,b)
{
    console.log("addition="+(a+b));
}

add(33,44)

let oddnumber=['10','9','7','5','3','12']
let a=oddnumber.filter((e)=>{return e%2!=0})
console.log(a)

let arr1=["Apple","Mango","Banana","Pie"]
console.log(arr1.map((ele)=>ele.substring(0,6).toUpperCase()))
