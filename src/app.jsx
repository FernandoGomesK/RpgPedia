import React, { useState, useEffect } from 'react';
import pencilIcon from '../src/assets/pencil.png'; 

function App() {
  const startUrl = "https://rpgpedia.com/";
  
  
  const [sheetUrl, setSheetUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  
  const [isEditing, setIsEditing] = useState(false);
  const [tempUrl, setTempUrl] = useState("");

  
  useEffect(() => {
    if (sheetUrl === "") {
      setIsEditing(true);
    }
  }, [sheetUrl]);

  const handleSave = () => {
    setSheetUrl(tempUrl);
    setCurrentUrl(tempUrl);
    setIsEditing(false);
  };

  return (
    <div className="w-full h-screen bg-[#606098] flex flex-col overflow-hidden m-0 p-0">
      
      <div className="w-full bg-black/40 text-white flex justify-between items-center px-4 py-2 shadow-md z-10">
        <button 
          onClick={() => setCurrentUrl(startUrl)}
          className="bg-gray-600 hover:bg-gray-500 text-gray-300 text-xs font-bold px-3 py-1.5 rounded"
        >
          RPGpedia
        </button>
        
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <input 
                type="text" 
                placeholder="Cole o link da ficha..."
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                className="bg-gray-700 text-white text-xs px-2 py-1 rounded w-48"
              />
              <button onClick={handleSave} className="text-green-400 text-xs font-bold">OK</button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setCurrentUrl(sheetUrl)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded"
              >
                Minha Ficha
              </button>
              <button onClick={() => setIsEditing(true)}>
                <img src={pencilIcon} alt="Editar link" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100" />
              </button>
            </>
          )}
        </div>
      </div>

      {currentUrl ? (
        <iframe
          src={currentUrl}
          title="Ficha RPGpedia"
          className="w-full grow border-none"
          allowFullScreen
        />
      ) : (
        <div className="grow flex items-center justify-center text-white text-sm">
          Por favor, insira o link da sua ficha para começar.
        </div>
      )}
      
    </div>
  );
}

export default App;