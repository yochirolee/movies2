import React,{useState} from "react";
import "./navigation.css"

export default function NavigationActive() {

     

       const HandleOnClick=(event)=>{
          event.preventDefault();
        let myUl=  document.getElementById("nav-ylee");
       
        let childrens= myUl.children;
      
        
        var result = Object.entries(childrens); 
       
        result.forEach(element => {
          if(element[1].children[0].className==="nav-link active")
              element[1].children[0].className="nav-link";
            if(event.target.id=== element[1].children[0].id)
            element[1].children[0].className="nav-link active";
              
        });
            


        
       }

  return (
    <section>
      <div className="nav-lee mb-3">
        <ul className="nav" id="nav-ylee">
          <li className="nav-item">
            <a className="nav-link active" href="" id="1" onClick={(event)=>HandleOnClick(event)}>
              Populars
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="" id="2"  onClick={(event)=>HandleOnClick(event)}>
              Streaming
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="" id="3"  onClick={(event)=>HandleOnClick(event)}>
              TV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
