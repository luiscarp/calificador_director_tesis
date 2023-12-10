// components/SearchBox.js
import { useState } from 'react';

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState('universidad');

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
      <div className="md:flex">
        <div className="w-full p-4">
          <div className="flex mb-4">
            <button 
              onClick={() => setActiveTab('universidad')} 
              className={`w-1/2 bg-gray-200 p-2 ${activeTab === 'universidad' ? 'bg-blue-500 text-white' : ''}`}
            >
              Universidad
            </button>
            <button 
              onClick={() => setActiveTab('asesor')} 
              className={`w-1/2 bg-gray-200 p-2 ${activeTab === 'asesor' ? 'bg-blue-500 text-white' : ''}`}
            >
              Asesor
            </button>
          </div>
          <div>
            <input 
              type="text" 
              className="w-full p-2 mb-4 border border-gray-200 rounded" 
              placeholder={activeTab === 'universidad' ? 'Buscar Universidad' : 'Buscar Asesor'}
            />
            <button 
              className="w-full bg-blue-500 text-white p-2 rounded"
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
