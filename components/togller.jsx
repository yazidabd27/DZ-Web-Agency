"use client";
import { useState } from "react";

const Togller = () => {
    const[open, setOpen]=useState(false);
    
    const openNav=(e)=>{
        const navBar=document.querySelector('.nav-bar');
        if(open===false){
            navBar.classList.add('drop');
            
        }else{
            navBar.classList.remove('drop');
        }
        setOpen(!open);
    }

    return ( 
        <div className="togller" onClick={openNav}>
            <i class={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
     );
}
 
export default Togller;