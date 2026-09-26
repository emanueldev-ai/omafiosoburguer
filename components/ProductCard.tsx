
// Added React import to provide the React namespace for React.FC
import React, { memo } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  currentCartQuantity: number;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  currentCartQuantity,
  onAddToCart 
}) => {
  return (
    <div 
      onClick={() => onAddToCart(product, 1)}
      className="smooth-animate group relative bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-neutral-100 active:scale-[0.98] flex flex-col justify-between h-full"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-xl font-black text-black leading-tight uppercase italic tracking-tighter">
                {product.name}
              </h3>
              {product.isFeatured && (
                <span className="shrink-0 bg-red-600 text-white text-[6px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full shadow-md">
                  Destaque
                </span>
              )}
            </div>
          </div>
          <p className="mt-3 text-neutral-500 text-[10px] md:text-xs leading-relaxed font-medium opacity-90">
            {product.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-50">
        <div className="flex flex-col">
          <span className="text-[8px] text-red-600 font-black uppercase tracking-widest mb-1 italic">Tradição Mafiosa</span>
          <span className="text-2xl font-black text-black italic leading-none">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          {currentCartQuantity > 0 && (
            <span className="bg-black text-white text-[10px] font-black px-3 py-1.5 rounded-lg border-b-2 border-red-600 animate-in zoom-in duration-300">
              {currentCartQuantity}x
            </span>
          )}
          <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-red-600 transition-all duration-300">
            <i className="fa-solid fa-plus text-xs"></i>
          </div>
        </div>
      </div>
      
      {currentCartQuantity > 0 && (
        <div className="absolute top-0 left-10 right-10 h-1 bg-red-600 rounded-b-full shadow-[0_2px_10px_rgba(220,38,38,0.4)]"></div>
      )}
    </div>
  );
};

export default memo(ProductCard);