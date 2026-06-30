import React from "react";

export function Toolbar({
  startUrl,
  sheetUrl,
  setCurrentUrl,
  role,
  closeExtension
}) {
  return (
    <div className="w-full bg-[#15151a] border-b border-gray-800 flex justify-between items-center px-3 py-1.5 shrink-0 shadow-md">
      
      
      <div className="flex gap-2">

        {role === "GM" && (
          <button
            onClick={() => setCurrentUrl("https://rpgpedia.com/colecoes/campanhas")} 
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-2.5 py-1 rounded shadow transition-colors"
          >
            Campanhas
          </button>
        )}

        <button
          onClick={() => setCurrentUrl(sheetUrl)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-2.5 py-1 rounded shadow transition-colors"
        >
          Minha Ficha
        </button>
      </div>

      
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentUrl("")} 
          className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2.5 py-1 rounded transition-colors"
          title="Inserir novo link de ficha"
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
      
    </div>
  );
}