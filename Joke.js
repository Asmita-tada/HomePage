import React from "react"

function Joke(props)
{

    return(
        <div>
        <h1>Question: {props.que}</h1>
        <h2>Answer: {props.ans} </h2>
        </div>
    )
}



export default Joke