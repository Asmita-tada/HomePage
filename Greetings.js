import React from "react";

class Greetings extends React.Component {

    constructor()
    {
        super()
        this.state = {
            name: "Asmita",
            age: 16
        }
    }

    render() {
        return(

            <div>

            <h1>{this.state.name}</h1>
            <h2> {this.state.age}  years old</h2>
            </div>

        )
    }
}



export default Greetings
