
import React, { useMemo } from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const isOpen = useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;
    
    // Converte "19:30" e "23:59" para minutos totais do dia
    const start = 19 * 60 + 30;
    const end = 23 * 60 + 59;
    
    // Verifica se é dia útil (não segunda/terça)
    const day = now.getDay(); // 0=dom, 1=seg, 2=ter...
    const isClosedDay = day === 1 || day === 2;

    return !isClosedDay && currentTime >= start && currentTime <= end;
  }, []);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address + " O Mafioso Burger")}`;

  return (
    <header className="w-full bg-black pt-10 pb-12 border-b-4 border-red-700 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Brand Logo Identity */}
        <div className="mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase italic leading-none">
            <span className="text-red-600">O</span> Mafioso
          </h1>
          <p className="text-white tracking-[0.4em] text-xs md:text-sm uppercase font-bold mt-2">Burgers & Dogs</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] md:text-xs text-neutral-400 font-bold uppercase tracking-widest">
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${isOpen ? 'bg-green-600/10 border-green-600 text-green-500' : 'bg-red-600/10 border-red-600 text-red-500'}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span>{isOpen ? 'Estamos Abertos' : 'Fechado Agora'}</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-white">
            <i className="fa-solid fa-motorcycle text-red-600"></i>
            <span>Delivery</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-white">
            <i className="fa-solid fa-bag-shopping text-red-600"></i>
            <span>Retirada</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
           <div className="flex items-center gap-2">
            <i className="fa-solid fa-clock text-red-600/50"></i>
            <span>{BUSINESS_INFO.openingHours}</span>
          </div>
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-red-500 transition-colors group"
            title="Ver no Google Maps"
          >
            <i className="fa-solid fa-location-dot text-red-600/50 group-hover:text-red-600"></i>
            <span className="group-hover:underline decoration-red-600/30 underline-offset-4">{BUSINESS_INFO.address}</span>
          </a>
        </div>
      </div>
      
      {/* Visual Texture Background */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <i className="fa-solid fa-skull text-9xl text-white"></i>
      </div>
    </header>
  );
};

export default Header;
