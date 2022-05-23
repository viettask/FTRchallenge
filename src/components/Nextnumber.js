import React from "react";

function checkFib(num)
{
    let a = 0;
    let b = 1;
    if (num==a || num==b) return true;
    let c = a+b;
    while(c<=num)
    {
        if(c == num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

const handleClick = () => {

   const num = document.getElementById("numberadded").value.trim();
   let numArr = [];


 
   if((sessionStorage.getItem("frequency") === null))  
   {
       alert("Please enter the frequency value first");
   }
   else{
        

        if ((sessionStorage.getItem("numberList") === null)) {
            if (!isNaN(num) && num!=="") {
                sessionStorage.setItem('numberList', num);
                //document.getElementById("numberentered").innerHTML += checkFib(num);
                let str = checkFib(num)?"<p> The first number is " + num+" - <b>FIB</b> </p>":"<p> The first number is " + num+"</p>";
                document.getElementById("numberentered").innerHTML += str;

                document.getElementById("numberadded").value = "";
                document.getElementById("numberadded").placeholder = "Please enter the next number";
                
            }
            else {
                alert("The value must be a number. Please enter again!");
                document.getElementById("numberadded").value = "";
                document.getElementById("numberadded").placeholder = "Please enter the first number";
            }
        }
        else {
            if (!isNaN(num) && num!=="") {
                numArr.push(sessionStorage.getItem("numberList"));
                numArr.push(num);
                sessionStorage.setItem('numberList', [...numArr]);
               // document.getElementById("numberentered").innerHTML += checkFib(num);
                let str = checkFib(num)?"<p> The next number is " + num+" - <b>FIB</b> </p>":"<p> The first number is " + num+"</p>";
                document.getElementById("numberentered").innerHTML += str;


                document.getElementById("numberadded").value = "";
                document.getElementById("numberadded").placeholder = "Please enter the next number";
            }
            else {
                alert("The value must be a number. Please enter again!");
            }
        }
   }

};




export default function Nextnumber() {


    return (
        <div className="frame">
        <input type="text" placeholder="Please enter the first number" name="" id="numberadded" />
        <button type="" className="enterBtn" onClick={handleClick}>Confirm</button>
        </div>
    )
}