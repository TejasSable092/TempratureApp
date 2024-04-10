import React, { useState } from "react";
import "./Temp.css";
const Temp = () => {
    const[temp, setTemp]=useState(12);
    const[color, setColor]=useState("#34495e");
    const[btncolor, setBtncolor]=useState("orange")
    const[subbtn, setSubbtn]=useState("orange")

    const ADD=()=>{
        setTemp(temp+1);
        if(temp >=20){
            setColor("red");
            setBtncolor("red");
            }
        if(temp<=10)
        {
            setSubbtn("orange");
        }
        // if(temp>=19){
        //     setBtncolor("red")
        // }
        // if(temp>=10){
        //     setSubbtn("orange")
        // }
        // setTemp((prevTemp)=>{
        //     const newTemp =prevTemp+1;
        //     if(newTemp>=19){
        //         setColor("red");
        //     }
        //     return newTemp;
        // })
    }

    const Sub=()=>{
        setTemp(temp-1);
        if(temp<=20){
            setColor("#34495e");
            setBtncolor("orange")
            
          }
          if(temp<=10){
            setColor("cyan")
            setSubbtn("cyan");
          }
          
          
        //   if(temp<=10){
        //     setSubbtn("cyan")
        // }
        // if(temp<20){
        //     setBtncolor("orange")
        // }
    }
  return (
    <>
      <div className="temp-app">
        <div className="actual-temp">
          <h1 className="Degree" style={{backgroundColor:color}}>{temp}°C</h1>

          <div className="temp-mob">
        <img src="src\assets\mob-removebg-preview.png" alt="temp-mob" />
          </div>
          
          <div className="temp-btn">
            <button style={{backgroundColor: btncolor}} onClick={ADD}>+</button>
            <button style={{backgroundColor: subbtn}} onClick={Sub}>-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
