import React from "react";

function ContactCard(props)
{
    return(
  

        //ref to Myinfo
        <div className="contacts">
                <img src={props.imgurl}  />
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
           </div>


    )
}

export default ContactCard