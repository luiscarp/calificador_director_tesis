// components/SearchBox.js
import { useState } from 'react';

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState('universidad');

  return (
    <div className="max-w-md mx-auto bg-cyan-50 rounded-lg overflow-hidden md:w-1/2">
      <div className="md:flex">
        <div className="w-full p-4">
          <div className="flex mb-4">
            <button 
              onClick={() => setActiveTab('universidad')} 
              className={`w-1/2 bg-gray-200 p-2 ${activeTab === 'universidad' ? 'bg-blue-500 text-yellow-950 font-bold md:text-2xl' : 'md:text-2xl'}`}
            >
              Universidad
            </button>
            <button 
              onClick={() => setActiveTab('asesor')} 
              className={`w-1/2 bg-gray-200 p-2 ${activeTab === 'asesor' ? 'bg-blue-500 text-yellow-950 font-bold md:text-2xl' : 'md:text-2xl'}`}
            >
              Asesor
            </button>
          </div>
          <div>
            <input 
              type="text" 
              className="w-full p-2 mb-4 border border-gray-200 rounded md:text-2xl" 
              placeholder={activeTab === 'universidad' ? 'Buscar Universidad' : 'Buscar Asesor'}
            />
            <button 
              className="w-full mb-10 bg-blue-500 text-white p-2 rounded"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
