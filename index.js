// Code your solutions in this file
let arr=["Ada", "Brendan", "Ali"];
let eve="birthday";
function writeCards(arr,eve){
   var thank=[];
 for (let i=0;i<arr.length;i++){
 thank[i]="Thank you, "+arr[i]+", for the wonderful "+eve+" gift!"
 }
return thank ;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");
//-------------
function countdown(num){
  let arr=[];
 while (num>=0){
  // console.log(`${num}`);
  arr.push(num);
   num=--num;
 }
 return num;
}
countdown(10);