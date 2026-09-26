
import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { PRODUCTS, BUSINESS_INFO, CATEGORY_IMAGES } from './constants';
import { CartItem, Product } from './types';

const ExtrasModal: React.FC<{
  product: Product;
  extras: Product[];
  onClose: () => void;
  onConfirm: (extras: Product[], removed: string[], observation: string) => void;
}> = ({ product, extras, onClose, onConfirm }) => {
  const [selectedExtras, setSelectedExtras] = useState<Product[]>([]);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const [observation, setObservation] = useState('');

  const toggleExtra = (extra: Product) => {
    setSelectedExtras(prev => 
      prev.find(e => e.id === extra.id) 
        ? prev.filter(e => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const toggleRemoved = (ingredient: string) => {
    setRemovedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const itemTotal = useMemo(() => 
    product.price + selectedExtras.reduce((acc, curr) => acc + curr.price, 0),
    [product.price, selectedExtras]
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-white/20 backdrop-blur-md p-0 sm:p-4 transition-all duration-200">
      <div className="bg-white w-full max-w-xl rounded-t-[2.5rem] sm:rounded-[3rem] max-h-[90vh] overflow-hidden flex flex-col shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-t border-neutral-100">
        
        {/* Pull Indicator */}
        <div className="w-full flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-12 h-1.5 bg-neutral-200 rounded-full"></div>
        </div>

        <div className="p-6 sm:p-8 border-b border-neutral-100 flex justify-between items-center bg-white">
          <div>
            <p className="text-[10px] text-red-600 uppercase tracking-widest font-black mb-1">Adicionar ao pedido</p>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-black">{product.name}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-2xl text-black active:scale-90 transition-transform">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-10 no-scrollbar">
          {product.standardIngredients && product.standardIngredients.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-4 italic">Retirar algum item?</p>
              <div className="flex flex-wrap gap-2">
                {product.standardIngredients.map(ing => {
                  const isRemoved = removedIngredients.includes(ing);
                  return (
                    <button
                      key={ing}
                      onClick={() => toggleRemoved(ing)}
                      className={`px-4 py-2.5 rounded-2xl border-2 font-black text-[9px] uppercase tracking-wider transition-all active:scale-95 ${
                        isRemoved ? 'bg-red-50 border-red-600 text-red-600 line-through' : 'bg-white border-neutral-100 text-neutral-500'
                      }`}
                    >
                      {ing}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {extras.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-6 italic">Adicionais extras</p>
              <div className="grid grid-cols-1 gap-3">
                {extras.map(extra => {
                  const isSelected = !!selectedExtras.find(e => e.id === extra.id);
                  return (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra)}
                      className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-3xl border-2 transition-all active:scale-[0.99] ${
                        isSelected ? 'border-red-600 bg-red-50' : 'border-neutral-100 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                          isSelected ? 'bg-red-600 border-red-600' : 'border-neutral-200 bg-white'
                        }`}>
                          {isSelected && <i className="fa-solid fa-check text-white text-[8px]"></i>}
                        </div>
                        <span className={`font-black text-sm uppercase italic tracking-tight ${isSelected ? 'text-black' : 'text-neutral-500'}`}>
                          {extra.name}
                        </span>
                      </div>
                      <span className="text-xs font-black text-red-600">
                        + R$ {extra.price.toFixed(2).replace('.', ',')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="pb-4">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-6 italic">Alguma observação?</p>
            <textarea
              value={observation}
              onChange={(e) => setObservation(e.target.value.slice(0, 150))}
              placeholder="Ex: Ponto da carne, sem picles..."
              className="w-full h-24 p-5 bg-neutral-50 border-2 border-neutral-100 rounded-[1.5rem] text-sm font-bold focus:outline-none focus:border-red-600 transition-colors resize-none placeholder:text-neutral-300"
            />
          </div>
        </div>

        <div className="p-8 sm:p-10 bg-white border-t border-neutral-100">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Valor do item</span>
              <span className="text-3xl font-black text-black italic leading-none">R$ {itemTotal.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
          <button
            onClick={() => onConfirm(selectedExtras, removedIngredients, observation)}
            className="w-full bg-red-600 text-white font-black py-6 rounded-[1.5rem] flex items-center justify-center gap-4 transition-all active:scale-95 shadow-xl shadow-red-100 uppercase tracking-[0.2em] text-[10px]"
          >
            <span>Adicionar ao carrinho</span>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<'burgers' | 'combos' | 'hot-dogs' | 'drinks' | 'gourmet' | 'sides'>('burgers');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const sections = [
    { id: 'burgers', title: 'Burgers' },
    { id: 'combos', title: 'Combos' },
    { id: 'gourmet', title: 'Gourmet' },
    { id: 'hot-dogs', title: 'Dog' },
    { id: 'drinks', title: 'Bebidas' },
    { id: 'sides', title: 'Porções' },
  ];

  const currentProducts = useMemo(() => 
    PRODUCTS.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  const handleAddToCart = useCallback((product: Product, quantity: number, extras: Product[] = [], removed: string[] = [], observation: string = '') => {
    setCartItems(prev => {
      const extrasId = extras.map(e => e.id).sort().join('-');
      const removedId = removed.sort().join('-');
      const cartId = `${product.id}-${extrasId}-${removedId}-${observation.trim()}`;
      
      const existing = prev.find(item => item.cartId === cartId);
      if (existing) {
        return prev.map(item => 
          item.cartId === cartId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { cartId, product, quantity, selectedExtras: extras, removedIngredients: removed, observation }];
    });
    setModalProduct(null);
  }, []);

  const updateCartQuantity = useCallback((cartId: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.cartId === cartId) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  }, []);

  const removeCartItem = useCallback((cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  }, []);

  const getExtrasForProduct = useCallback((product: Product): Product[] => {
    if (!product.extraIds) return [];
    return PRODUCTS.filter(p => product.extraIds?.includes(p.id));
  }, []);

  const handleProductClick = (product: Product) => {
    if (product.category === 'drinks' || product.category === 'sides') {
      handleAddToCart(product, 1);
    } else {
      setModalProduct(product);
    }
  };

  const getProductQuantityInCart = useCallback((productId: string) => {
    return cartItems
      .filter(item => item.product.id === productId)
      .reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartItems]);

  const categoryBanner = CATEGORY_IMAGES[activeCategory] || CATEGORY_IMAGES['burgers'];

  return (
    <div className="min-h-screen pb-24 bg-neutral-50 font-sans selection:bg-red-600/10">
      <Header />

      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-100">
        <div className="container mx-auto max-w-5xl">
          <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
            {sections.map(s => (
              <button 
                key={s.id}
                onClick={() => {
                  setActiveCategory(s.id as any);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex-none py-5 px-6 relative transition-all group`}
              >
                <span className={`text-[10px] font-black uppercase italic tracking-wider ${
                  activeCategory === s.id ? 'text-red-600' : 'text-neutral-400'
                }`}>
                  {s.title}
                </span>
                {activeCategory === s.id && (
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-red-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Banner de Categoria Otimizado */}
      <div className="w-full h-44 md:h-80 relative overflow-hidden bg-black">
        <img 
          src={categoryBanner} 
          alt={activeCategory} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
           <h2 className="text-4xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-1 drop-shadow-lg">
              {sections.find(s => s.id === activeCategory)?.title}
            </h2>
            <p className="text-white font-bold uppercase tracking-[0.3em] text-[9px] opacity-90 italic">Tradição & Respeito</p>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 max-w-5xl mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {currentProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              currentCartQuantity={getProductQuantityInCart(product.id)}
              onAddToCart={handleProductClick}
            />
          ))}
        </div>
      </main>

      {modalProduct && (
        <ExtrasModal 
          product={modalProduct}
          extras={getExtrasForProduct(modalProduct)}
          onClose={() => setModalProduct(null)}
          onConfirm={(extras, removed, obs) => handleAddToCart(modalProduct, 1, extras, removed, obs)}
        />
      )}

      <Cart 
        items={cartItems} 
        onUpdateQuantity={updateCartQuantity} 
        onRemoveItem={removeCartItem} 
      />

      <footer className="py-20 bg-white text-center mt-20 border-t border-neutral-100">
        <h2 className="text-black text-2xl font-black italic mb-2 uppercase tracking-tighter">
          <span className="text-red-600">O</span> Mafioso
        </h2>
        <p className="text-neutral-400 text-[8px] uppercase tracking-[0.4em] font-bold">O MAFIOSO BURGER — DESDE SEMPRE</p>
      </footer>
    </div>
  );
};

export default App;