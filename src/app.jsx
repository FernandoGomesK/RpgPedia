import React, { useState } from 'react';
import OBR from '@owlbear-rodeo/sdk';

function App() {
  const [sheetUrl, setSheetUrl] = useState("");
  const [tempUrl, setTempUrl] = useState("");

  const closeExtension = () => {
    if (OBR.isAvailable) {
      OBR.action.close();
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (tempUrl.trim() !== "") {
      setSheetUrl(tempUrl);
    }
  };

  
  // Home

  if (!sheetUrl) {
    return (
      <div className="w-full h-screen bg-[#1e1e24] flex flex-col items-center justify-center p-6 text-white font-sans">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-400 mb-2">RPGpedia</h1>
          <p className="text-sm text-gray-400">Integração Owlbear Rodeo</p>
        </div>

        <form onSubmit={handleSave} className="w-full max-w-xs flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              LINK DA SUA FICHA:
            </label>
            <input 
              type="url" 
              placeholder="https://rpgpedia.com/..."
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded shadow-lg transition-colors"
          >
            Carregar Ficha
          </button>
        </form>

        <button 
          onClick={closeExtension} 
          className="mt-10 text-xs text-gray-500 hover:text-red-400 transition-colors underline"
        >
          Fechar painel
        </button>

      </div>
    );
  }

  
  // Parte da ficha
 
  return (
    <div className="w-full h-screen bg-[#1e1e24] flex flex-col m-0 p-0 overflow-hidden">
      
    
      <div className="w-full bg-[#15151a] border-b border-gray-800 flex justify-end items-center px-2 py-1 gap-2 shrink-0">
        <button 
          onClick={() => setSheetUrl("")}
          className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2.5 py-1 rounded transition-colors"
          title="Editar/Trocar Link"
        >
          ✏️ Trocar
        </button>

        <button 
          onClick={closeExtension}
          className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3 py-1 rounded transition-colors"
          title="Fechar Extensão"
        >
          X
        </button>
      </div>

     
      <iframe
        src={sheetUrl}
        title="Ficha RPGpedia"
        className="w-full grow border-none"
        allowFullScreen
      />
      
    </div>
  );
}

export default App;