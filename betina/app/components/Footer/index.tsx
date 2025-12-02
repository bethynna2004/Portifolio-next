
"use client";
import React from "react";
import {
  
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  
  
} from "lucide-react";


export const Footer = () => {
   // getCurrentYear= new Date().getFullYear();
      const year = new Date().getFullYear();
    
    return(
        <>
        <footer>
            <div className="bg-blue-200 p-5 text-center border-t border-gray-300 text-2xl text-black font-bold">
                <p>&copy;{new Date().getFullYear()} Betina Dlambe! </p>
            </div>
            <div>
               
            </div>
        </footer>
        </>
    )
}