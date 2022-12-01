let arr=[1,7,4,3,90,45,2];

let max=arr[0];

for(let i=1;i<arr.length;i++)
{
if(max<arr[i])
{
    max=arr[i];
  
}
}
console.log(max)