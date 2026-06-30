import React from "react";
import OBR from "@owlbear-rodeo/sdk";
import { useSheetUrl } from "./hooks/useSheetUrl";
import { usePlayerRole } from "./hooks/usePlayerRole";
import { Toolbar } from "./components/Toolbar";
import { SheetFrame } from "./components/SheetFrame";

function App() {
  const sheet = useSheetUrl();
  const role = usePlayerRole();


  const closeExtension = () => {
    if (OBR.isAvailable) {
      OBR.action.close();
    }
  };

  
  if (!sheet.currentUrl) {
    return (
      <div className="w-full h-screen bg-[#1e1e24] flex flex-col items-center justify-center p-6 text-white font-sans m-0">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-400 mb-2">RPGpedia</h1>
          <p className="text-sm text-gray-400">Integração Owlbear Rodeo</p>
        </div>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            sheet.save();
          }} 
          className="w-full max-w-xs flex flex-col gap-4"
        >
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              LINK DA SUA FICHA:
            </label>
            <input
              type="url"
              autoFocus
              placeholder="https://rpgpedia.com/..."
              value={sheet.tempUrl}
              onChange={(e) => sheet.setTempUrl(e.target.value)}
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

  
  return (
    <div className="w-full h-screen bg-[#1e1e24] flex flex-col m-0 p-0 overflow-hidden">
      <Toolbar 
        {...sheet} 
        role={role} 
        closeExtension={closeExtension} 
      />
      <SheetFrame url={sheet.currentUrl} />
    </div>
  );
}

export default App;