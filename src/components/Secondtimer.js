import React from "react"


const handleChange = () => { 
    const num = document.getElementById("timing").value;
    if(!isNaN(num.trim()) && num.trim()!==""){
        sessionStorage.setItem('frequency',num)
        document.getElementById("freBtn").disabled = true;

        document.getElementById("numberentered").innerHTML = "<p>The frequency entered is "+num+" (in seconds) </p>"
        document.getElementById("timing").disabled = true;


        document.getElementById("timing").value = num.trim();


    }
    else
    {
        alert("The frequency value must be a number. Please enter again!");
        document.getElementById("timing").value = "";
        document.getElementById("timing").placeholder = "Please input the amount of time between emitting numbers and their frequency";
    }
 };




 

export default function Secondtimer() {

    // state = { check: false };
    // handleCheck = () => {
    //   console.log("hello");
    //   this.setState({ check: !this.state.check });
    // };
    // componentDidMount() {
    //   setTimeout(() => {
    //     this.handleCheck();
    //   }, 10000);
    // }
    // timer = () => {
    //   setTimeout(() => {
    //     this.handleCheck();
    //   }, 10000);
    // }


    return (
        <div className="frame">
        <input type="text" placeholder="Please input the amount of time between emitting numbers and their frequency" name="" id="timing" onKeyUp=""/> 
        <button type="" id="freBtn" className="enterBtn" onClick={handleChange}> Confirm</button>
        <p>(in seconds)</p>
        </div>
    )
}