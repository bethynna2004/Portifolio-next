
"use client";
import React from "react";

import {
  
  Phone,
  Mail,

  

  
  
} from "lucide-react";


export const Footer = () => {
   // getCurrentYear= new Date().getFullYear();
      const year = new Date().getFullYear();
    
    return(
        <>
        <footer>
            
            <div className="bg-gradient-to-r to-black to-blue-500 p-10 text-center border-t border-gray-300 text-2xl text-black font-bold">
                <p>&copy;{new Date().getFullYear()} Betina Dlambe! </p>
            <Phone/>
            <Mail />
          
            
            </div>
            
        </footer>
        </>
    )
}