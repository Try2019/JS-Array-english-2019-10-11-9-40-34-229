// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log( (a instanceof Array)+' '+(b instanceof Array));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach((i,index)=>a[index]=i*2);
console.log(a.toString());

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
let temp1='',temp2='',temp3='';
colors.forEach((i,index)=>{
    if(index>0){
        temp1+=' ';
        temp2+='+';
        temp3+=',';
    }
    temp1+=i;
    temp2+=i;
    temp3+=i;
})
console.log(temp1);
console.log(temp2);
console.log(temp3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a,b){ return a-b});

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var b=a.sort();
var mark='',sum=1,max=0;
for(let i=0;i<b.length-1;i++){
    if(b[i]===b[i+1]&&(i+1<length-1)){
        sum++;
    }else{
        if(sum>=max){
            max=sum;
            mark=b[i];
        }
        sum=1;
    }
}
console.log(mark);