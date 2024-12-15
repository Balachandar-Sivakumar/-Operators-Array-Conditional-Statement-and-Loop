"use strict"

// 1. Get a number input n from the user. Print the numbers 1 to n with the
// following conditions:
 
//   let  num = 60
    
// let output = "";

// for (let i=0;i<=num;i++){

    
    
//         if(i%3==0 && i%5==0){
//             output+= "FIZZBUZZ"+" ";
//             // console.log("bala")
//         }
//         else if(i%3==0){
//             output+="FIZZ"+" ";
//         }
//         else if(i%5==0){
//             output+="BUZZ"+" ";
//         }
     
//     else{
//         output+=i+" ";
//     }
// }
// console.log(output)


// 2. Write a function that takes 5 number input from user a,b,c,d,e and perform the
// operation a + b - c * d / e and return the result
// // Note: Use the function to execute this problem


// let num1 = Number(prompt("Enter a Numb"));
// let num2 = Number(prompt("Enter a Numb"));
// let num3 = Number(prompt("Enter a Numb"));
// let num4 = Number(prompt("Enter a Numb"));
// let num5 = Number(prompt("Enter a Numb"));

// let result = myFunction(num1,num2,num3,num4,num5)

// function myFunction(a,b,c,d,e){

//     let process = (a + b) - (c * (d / e))

//     return process;
// }

// console.log(result)

// 3. Write a function that takes hours as input and converts it into seconds.

// let hours = Number(prompt("Enter hour to convert into seconds"));

// let result = myFunction(hours);

// function myFunction(seconds){

//     let calculation = seconds*60**2;

//     return(calculation);


// }

// console.log(result)


// 4. Write a function that takes years as input and converts it into days.

// let years = Number(prompt("Enter Year to convert into days"));

// let result = myFunction(years);

// function myFunction(days){

//     let calculation = days*365;

//     return(calculation);


// }

// console.log(result)



// 5. Write a program that gets a string from the user as input and the task is to
// count the number of vowels in that given string.
// Vowels: a, e, i, o, u


// let str = "welcome to hello world and DCKAP Palli";
//     str = str.toLowerCase();
//     str = str.split("");

//     let output = 0;
   
//     let result ="";
        
// for (let i=0;i<str.length;i++){
    
    
   
//     if("a"==str[i] || "e"==str[i] || "i"==str[i] || "o"==str[i] || "u"==str[i]){

        
//         output++;
        
//     }
   
// }

// result = output+": vowels are in the setance"; 
// console.log(result)

// 6. Write a program that gets a number n from the user. The task is to print the
// number from 1 to n by mentioning it as odd or even number.


// let num = 20;

// let output = "";

// for (let i=0;i<=num;i++){
//     if(i%2==0){
//         output+= i +"-Even\n"
//     }
//     else{
//         output+= i +"-odd\n"
//     }
// }

// console.log(output)


// 7. Get an array as input. The task is to reverse the array and store it in another
// array without using reverse() method.

// let str = "Hellow Bala Balji l0ki^2 vicky Diva priya Welcome to DCKAP palli";
//     // str = str.split(" ");
//     // console.log(str)
// let output = "";

// for(let i=str.length-1;i>=0;i--){
//     output+=str[i]+"";
   
    
// }
// //  output = output.split(" ");
// console.log(output)

// for (let i=0;i<str.length;i++){

//     // console.log(str[i])
//     if(str[i].length>=5){
//         let reverse = str[i]+" "
//         for(let j=reverse.length-1;j>=0;j--){
//             output+=reverse[j]
//         }
//     }

//     else{
//         output+=" "+str[i]+" "
//     }
// }
// console.log(output)

// 8. Get 2 input from users and store it in two variables. Check whether the strict
// values are equal, values are equal and values are not equal.

// let a = "10";
// let b = 10;


// if(a===b){
//     console.log("Both values and data types are same");
// }
// else if(a==b){
//     console.log("Values are same but different data types")
// }
// else if(typeof(a)===typeof(b)){
//     console.log(" Same data type but Values are not equal ")
// }

// else {console.log("Values are not equal also data types are not equal ")}


// 9. Get a number input from the user and return true whether the given number
// greater than zero, if the number is less than or equal to zero then return false.
// If the given input is not a number return invalid input

// let num = "v";

// if(num>0){
//     console.log("The given number is positive value : True")
// }
// else if(num<0){
//     console.log("The given number is negative value : False")
// }
// else if(num==0){
//     console.log("You have Entered 0 it is Falsy value : False")
// }
// else{
//     console.log("Invalid value")
// }

// 10. Get 2 inputs from the user. It can be numbers, strings, boolean, null,
// undefined, etc. If the given two numbers are truthy values then return true or
// else return false.

// let a = true;
// let b = false;

// if(a && b){
//     console.log("Both have the value : True")
// }
// else if(a){
//     console.log("a have the value but b not have a value : False")
// }
// else if(b){
//     console.log("b have the value but a not have a value : False")
// }
// else{
//     console.log("Both not have a value")
// }


// Ascending order whiout using sort() method


// let arr = [9,4,3,5,7]
// let output="";



//  for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         output=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=output
//         i=-1
//     }

//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             output=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=output
//         }
//     }
//  }

//  console.log(arr)



// 1. Get an array from the users, it can be 1 dimensional array or multi dimensional
// array. The task is to find out whether the given array is 1 dimensional or multi
// dimensional.

// let arr = [4,5,8,[6],9];
// let result1=  "";
// let result = "";
 
//     for(let i=0;i<arr.length;i++){
//     //   console.log(arr[i][0]);
    
//      if(arr[i][0]){
//        result = true;
        
//      }
//      else{
//         result1=false;
//      }
    
      
//     }

//     if(result || result1){
//         console.log("multi dimentional");
        
//     }
//     else{
//         console.log("single dimensional");
        
//     }


// 2. Get two number array from the user. You have to find out whether the first
// array fits inside the second array.

// let arr = [99,3,6,-11];
// let array = [200,4,55,-3];




// function insesideset(arr1,arr2){

//     let arr1min = arr[0];
//     let arr1max = 0;
//     let arr2min = arr[0];
//     let arr2max = 0;

//     for(let i=0;i<arr1.length;i++){
//         if(arr1min > arr1[i])
//          {
//             arr1min = arr1[i]
//          }
//          if(arr1max < arr1[i]){
//                 arr1max = arr1[i]
//              }
//     }

//     for(let j=0;j<arr2.length;j++){

//             if(arr2min > arr2[j]){

//                     arr2min = arr2[j];
//             }
//              if(arr2max < arr2[j]){

//                         arr2max = arr2[j]
//              }       
//     }
//     let output = "";

//     if(arr1min>arr2min && arr1max < arr2max){
//         output = " A array fits in B array"
//     }
//     else if(arr2min > arr1min && arr2max < arr1max){
//         output = " B array fits in A array"
//     }
//     else{
//         output = " Nothing fits"
//     }
//     return output;
    
// }
// let result = insesideset(arr,array)

// console.log(result);


// 3. Get a number array from the user. The task is to create an array whose values
// should be added to the previous index values. The First value should be the
// same, but all the other values should be added up with the previous value.

// let arr = [10,20,30,40,50,60,70,80,99];


  
// let output = [arr[0]];

// for(let i=1;i<arr.length;i++){

    

//     output[i]= arr[i]+arr[i-1]
    
  
// }



// console.log(output);

// for(let i=1;i<arr.length-1;i++){
//     let b =arr[i]
//     arr[i] = arr[i-1]+b[i]
// }

// console.log(arr);

// 1 st question

// let market = [];

// let another;



// while(true){
//     if(another=='done'){

//         alert("Your items are added to your cart")
        
//         break;
//     }
//     else{
//        let item = prompt("Enter item");
//        let quantity = prompt("Enter quantity");
//        let price = prompt("Enter price");
//        let total = quantity*price
//        market.push({item,quantity,price,total})
//         another=prompt("Do you want to continue or done to finish")
//     }

// }  


// let total=0;
// let totalcost=0;
// let highprice=0;
// for(let i=0;i<market.length;i++){

     
//     let price =market[i].price;
//     let item = market[i].item;
//     let quantity = market[i].quantity;
//     total = price*quantity;
//     totalcost+=total
   
//     console.log([i+1]+"."+item+"- Quantity: "+quantity+
//         ", price: "+price+", Total: "+total);

//         if(highprice<price){
//             highprice=price;
            
//         }
//         // 
     
//    }

//    for(let i=0;i<market.length;i++){

//             if(highprice==market[i].price){
//             highprice=highprice*market[i].quantity
//         }
//    }

//    highprice=highprice*(25/100);

   

//    console.log("Total-cost = "+totalcost);
//    console.log("discount "+highprice)

//    let discount = totalcost-highprice;
//    console.log(`After discount :${discount}`)

// //    console.log(market);


// let employee = [];

// let pro = prompt(`Main Menu  Choose an action 1, Add Employee, 2. Update Salary, 3. View Employees, 4. Calculate Total Salaries, 5. Exit`) ;

// while(true){
//     if(pro==1){
//         let name = prompt("Enter Employee Name");
//         let role = prompt("Enter Employee Role");
//         let salary = Number(prompt("Enter Employee salary"));
//         employee.push({name,role,salary})
//         alert(`${name} added as a ${role} with a salary of ${salary}`);
//         pro = prompt(`Main Menu  Choose an action 1, Add Employee, 2. Update Salary, 3. View Employees, 4. Calculate Total Salaries, 5. Exit`) ;
        
//     }
//     else if(pro==2){

//         let name = prompt("Which person salary you wants increment");
//         let update = Number(prompt("Enter update salary"));
        
//         for(let i=0;i<employee.length;i++){
//             if(employee[i].name ==name){
//                 employee[i].salary=update
//             }
//         }

//         alert(`${name} salary is updated`)

//         pro = prompt(`Main Menu  Choose an action 1, Add Employee, 2. Update Salary, 3. View Employees, 4. Calculate Total Salaries, 5. Exit`) ;
        

//     }

//     else if(pro ==3){

//         console.log(employee);

//         pro = prompt(`Main Menu  Choose an action 1, Add Employee, 2. Update Salary, 3. View Employees, 4. Calculate Total Salaries, 5. Exit`) ;
        

//     }
//     else if(pro == 4){
//         let total=0;
         
//         for(let i=0;i<employee.length;i++){
//             total+=employee[i].salary
//         }
//         alert(`Total Employees salary :${total}`)

//         pro = prompt(`Main Menu  Choose an action 1, Add Employee, 2. Update Salary, 3. View Employees, 4. Calculate Total Salaries, 5. Exit`) ;
        
//     }
//     else if(pro==5){
//         alert("Employee Information updated")
//         break;
        
//     }
    
// }

//     console.log(pro)
//     console.log(employee);

// let obj =[{
//     salary:50000
// }]

// let update =599999

// let obj1= obj[0].salary=update

// console.log(obj);





    
  
