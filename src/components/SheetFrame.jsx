import React from "react"; 

export function SheetFrame({ url }) {   
  if (!url) return null; 
  
  return (     
    <iframe       
      src={url}       
      title="Ficha RPGpedia"       
      className="w-full grow border-none bg-white"  
      allowFullScreen     
    />   
  ); 
}