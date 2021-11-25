import React from "react"
import TodoList from "./TodoList";
import ContactCard from "./ContactCard";
import Product from "./Product";

function MyInfo()
{
return(

  <div class="intro">
  

   

    {/* // Contactcard using props */}
    <div className="card">
    <ContactCard 
                imgurl="http://placekitten.com/200/200"
                name="Mr.Apple"
                phone="419-334-2980" 
                email="abc.we@gmail.com" />
            <ContactCard  
                imgurl="http://placekitten.com/250/200"
                name="Mr.Donald"
                phone="419-334-2670" 
                email="Donald.we@gmail.com" 

            />
            <ContactCard 
                imgurl="http://placekitten.com/200/203"
                name="Mr.Blacksmith"
                phone="647-334-2980" 
                email="Blacksmith.we@gmail.com"
            />


    </div></div>
  
  );
}


export default MyInfo