console.log('Hello jee');

let lastname='babbar';
let firstname=new String('love');

let message='this is my first message';
let copy=message.split(' ');
console.log(copy);

let message2 =`this
is my new message using backtik`;
console.log(message2);

let tarik=new Date();
console.log(tarik);



let tarik2=new Date(1998,11,20,7)
console.log(tarik2);

tarik2.setFullYear(2002);
tarik2.getFullYear();
console.log(tarik2);


// Arrays 
let arr=[1,2,3,4,5];
console.log(arr);

// insertion in array 
arr.push(9); //used to insert number at the end
arr.unshift(8); //used to insert element at starting
arr.splice(4,0,6); //used to insert element at any position
console.log(arr);

// Searching 
console.log(arr.indexOf(9));


// if we want to check number is present in an array or not 
console.log(arr.indexOf(9)!=-1)
console.log('present');

// best practise for searching a number in an Array
console.log(arr.includes(9));

// array of objects
let courses=[
    {no:1,name:'Love'},
    {no:2,name:'rahul'}
];
// if i want to find something in objects then i have to use find method with the help of arrow function
let course= courses.find(course => course.name==='Kilvish');
console.log(course);

//Removing Element
let number=[1,2,3,4,5,6,7,8,9];
number.pop();
number.shift();
number.splice(2,1 )
console.log(number);


// Emptying an Array 
num=[1,2,3,45,67,455,76];
num1=num;
num=[];
console.log(num);
console.log(num1);
// this is not the correct way to empty an array
// we just make length zero of given array 

num.length=0;
console.log(num);

// combining and slicing array 
ar=[2,4,6,78,8,9];
ar1=[4,67,895,85];
let combined=ar.concat(ar1);
console.log(combined);

let sliced =combined.slice(2,9);
console.log(sliced);

// spread operator 
com=[2,3,4,5,67,9];
com1=[45,657,876,56,90];
com2=[...com,...com1];
console.log(com2);

// copy kaise kere 
let another=[...com2];
console.log(another);


// traversing 
let arrr=[1,2,3,4,5,6,7,8];
for(let value of arrr){
    console.log(value);
}

// for each loop 
arrr.forEach(number =>console.log(number));

// joining an array 
jo=[1,2,3,4,5,6,7,8,9];
let joined =jo.join(',');
console.log(joined);

// split 
mes="this is my message";
let splited = mes.split(' ');
console.log(splited);

// sorting 
let numm=[4,5,6,73,7682,1];
numm.sort();
console.log(numm);
numm.reverse();
console.log(numm);

// filtering array  

let fil=[1,-1,3,-5]
let filtered = fil.filter(value=> value>=0);
console.log(filtered);

// mapping an array 
// maps each element of array with something else 

let mp=[7,8,9,10,11];
let mapped=mp.map(value=>'student_no'+ value);
console.log(mapped);


// map with objects chaining
let ofil=[1,2,3,4,-9];
let ofiltered=ofil.filter(value=> value>=0);

let omp=ofiltered.map(function(num){
    return {value:num};
})

