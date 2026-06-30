import { useState, useEffect } from "react"; 

const STORAGE_KEY = "rpgpedia-sheet-url"; 
const START_URL = "https://rpgpedia.com/"; 

export function useSheetUrl() {   
  
  const [sheetUrl, setSheetUrl] = useState(() => localStorage.getItem(STORAGE_KEY) || "");   
  
  
  const [currentUrl, setCurrentUrl] = useState(sheetUrl || "");   
  const [isEditing, setIsEditing] = useState(false);   
  const [tempUrl, setTempUrl] = useState("");   

  const save = (url = tempUrl) => {     
    const cleanUrl = url.trim();     
    if (!cleanUrl) return;     
    
    
    localStorage.setItem(STORAGE_KEY, cleanUrl);     
    setSheetUrl(cleanUrl);     
    setCurrentUrl(cleanUrl);     
    setIsEditing(false);   
  };   

  return {     
    startUrl: START_URL,     
    sheetUrl,     
    currentUrl,     
    isEditing,     
    tempUrl,     
    setTempUrl,     
    setCurrentUrl,     
    setIsEditing,     
    save,   
  }; 
}