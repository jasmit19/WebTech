 let s= (a,b,c,d)=>a+b+c+d //add
let v=s(11,13,2,10)
console.log(s(11,13,2,10))

let arr1= ["red","green","blue","pink"] //map
console.log(arr1.map((ele)=>ele.substring(0,3).toUpperCase()))

let oddnumber=['10','9','7','5','3','12']
let a=oddnumber.filter((e)=>{return e%2!=0})
console.log(a)

let n=[]
n.push(12,23)
n.push(21,4)
console.log("initial");
n.forEach(num=>console.log(num));


const numbers = [12, 45, 6, 89, 34, 78, 23];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    
    if (numbers[i] > largestNumber) {

        largestNumber = numbers[i];
    }
}
console.log("The largest number is: " + largestNumber); 
 






