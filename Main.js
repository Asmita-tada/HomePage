import React from "react";
import reactDom from "react-dom";
import Footer from "./Footer";



function Main()
{
    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if(hours < 12)
    {
        timeofDay = "morning"

    } else if ( hours >=12 && hours <17)
    {
        timeofDay = "Afternoon"
    } else 
    {
        timeofDay = "night"
    }


    return(
        <div class="main" >
        <h1>Good {timeofDay}!!</h1>
    
        </div>
    )
}


export default Main