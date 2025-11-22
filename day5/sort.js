var data = [12, 3, 45, 1, 20]

data.sort((n1, n2) => { return (n1 - n2) })

console.log("sorted array="+data);

var arr1 = [{ fname: 'Janvi', age: 21, marks: 90 },
{ fname: 'Aditya', age: 22, marks: 80 },
{ fname: 'Hushi', age: 23, marks: 88 },
{ fname: 'Hriday', age: 20, marks: 81 }]
console.log("before sorting ", arr1)
arr1.sort((s1, s2) => {
  if (s1.marks > s2.marks) return 1;
  if (s1.marks < s2.marks) return -1;
  else return 0;
})
console.log("after sorting ", arr1)

let i = 5;

for (let i = 0; i < 10; i++) 
{
    if(s1.marks> s2.marks) {
      return 1;
    }
    if(s1.marks< s2.marks) 
      {
        return -1;
      }
    else 
      {
        return 0;
      }
        
}
console.log(after )

var arr2 = [{ fname: 'ttt', age: 21, marks: 90 },
{ fname: 'Aaa', age: 22, marks: 80 },
{ fname: 'qw', age: 23, marks: 88 },
{ fname: 'fdsa', age: 20, marks: 81 }]
console.log("before sorting ", arr2)
arr2.sort((s1, s2) => {
  if (s1.marks > s2.marks) 
    {
    return 1;
    }
  if (s1.marks < s2.marks) 
    {
      return -1;
    }
  else 
    {
    return 0;
  }

})
console.log("after sorting ", arr2)
