
import React, { useState, useEffect, useMemo } from 'react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../constants';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'dinheiro' | 'cartao' | ''>('');
  const [changeFor, setChangeFor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [address, setAddress] = useState({
    street: '',
    number: '',
    neighborhood: '',
    reference: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setErrorMessage('');
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const total = useMemo(() => {
    return items.reduce((acc, item) => {
        const extrasTotal = item.selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
        return acc + (item.product.price + extrasTotal) * item.quantity;
    }, 0);
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    if (deliveryMethod === 'delivery') {
      if (!address.street.trim() || !address.number.trim() || !address.neighborhood.trim()) {
        setErrorMessage("Por favor, preencha o endereço completo (rua, número e bairro) para entrega.");
        return;
      }
    }

    if (!paymentMethod) {
      setErrorMessage("Por favor, selecione a forma de pagamento (Pix, Dinheiro ou Cartão).");
      return;
    }

    setErrorMessage('');

    let message = "🍔 *PEDIDO O MAFIOSO BURGER*\n";
    message += "------------------------------\n\n";
    
    items.forEach(item => {
      const itemPrice = (item.product.price + item.selectedExtras.reduce((acc, e) => acc + e.price, 0));
      message += `✅ *${item.quantity}x* ${item.product.name.toUpperCase()}\n`;
      
      if (item.removedIngredients.length > 0) {
        message += `   ❌ _Retirar:_ ${item.removedIngredients.join(', ')}\n`;
      }

      if (item.selectedExtras.length > 0) {
        message += `   ➕ _Adicionais:_\n`;
        item.selectedExtras.forEach(extra => {
          message += `      • ${extra.name}\n`;
        });
      }

      if (item.observation) {
        message += `   📝 _Obs: ${item.observation}_\n`;
      }
      
      message += `   *Unit: R$ ${itemPrice.toFixed(2).replace('.', ',')}*\n\n`;
    });
    
    message += `------------------------------\n`;
    message += `💰 *TOTAL PRODUTOS: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    
    if (deliveryMethod === 'delivery') {
      message += `🛵 _Taxa de entrega a combinar no WhatsApp_\n\n`;
    }

    message += `🛵 *FORMA DE RECEBIMENTO:*\n`;
    if (deliveryMethod === 'delivery') {
      message += `*DELIVERY / ENTREGA*\n`;
      message += `📍 *ENDEREÇO:* ${address.street}, ${address.number}\n`;
      message += `🏙️ *BAIRRO:* ${address.neighborhood}\n`;
      if (address.reference) message += `📝 *REF:* ${address.reference}\n`;
    } else {
      message += `*RETIRADA NO LOCAL*\n`;
    }

    message += `\n💳 *FORMA DE PAGAMENTO:*\n`;
    const payments = { pix: 'PIX', dinheiro: 'DINHEIRO', cartao: 'CARTÃO' };
    message += `*${payments[paymentMethod as keyof typeof payments]}*\n`;
    if (paymentMethod === 'dinheiro' && changeFor) {
      message += `💵 *Troco para:* R$ ${changeFor}\n`;
    }
    
    message += `\n*Obrigado pelo respeito e tradição!*`;
    
    window.open(`https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (items.length === 0 && !isOpen) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90]">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white flex items-center gap-4 px-6 py-4 rounded-[2rem] shadow-2xl hover:scale-105 transition-all active:scale-95 border-2 border-white/20"
        >
          <div className="relative">
            <i className="fa-solid fa-bag-shopping text-xl"></i>
            {itemCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-black text-white text-[9px] font-black w-6 h-6 flex items-center justify-center rounded-full ring-4 ring-red-600">
                {itemCount}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-black uppercase text-[10px] tracking-wider mb-0.5">Meu Pedido</span>
            <span className="font-bold text-xs">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-white/20 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 bottom-0 w-[90%] sm:max-w-md bg-white shadow-[0_0_60px_rgba(0,0,0,0.1)] flex flex-col border-l border-neutral-100"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 flex justify-between items-center border-b border-neutral-100 bg-white">
              <div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-black">Carrinho</h2>
                <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">Confirme para finalizar</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-2xl text-black active:scale-90"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar">
              {items.length === 0 ? (
                <div className="text-center py-20 opacity-30">
                  <i className="fa-solid fa-cart-shopping text-6xl mb-4 text-neutral-200"></i>
                  <p className="font-black uppercase text-xs">Seu carrinho está vazio</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {items.map(item => (
                      <div key={item.cartId} className="bg-neutral-50 p-4 rounded-[1.5rem] border border-neutral-100">
                        <div className="flex justify-between items-start">
                          <h4 className="font-black text-black text-xs uppercase italic truncate pr-2">{item.product.name}</h4>
                          <p className="text-red-600 font-black text-xs whitespace-nowrap">R$ {((item.product.price + item.selectedExtras.reduce((s, e) => s + e.price, 0)) * item.quantity).toFixed(2).replace('.', ',')}</p>
                        </div>
                        
                        <div className="space-y-1 mt-2">
                          {item.removedIngredients.length > 0 && (
                            <p className="text-[8px] text-red-500 font-bold uppercase">
                              Remover: {item.removedIngredients.join(', ')}
                            </p>
                          )}
                          {item.selectedExtras.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {item.selectedExtras.map(extra => (
                                <span key={extra.id} className="text-[8px] bg-white border border-neutral-200 text-neutral-500 font-bold uppercase px-1.5 py-0.5 rounded-md">
                                  + {extra.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center bg-white border border-neutral-200 rounded-lg p-1">
                            <button onClick={() => onUpdateQuantity(item.cartId, -1)} className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-black">-</button>
                            <span className="text-[10px] font-black w-6 text-center">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.cartId, 1)} className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-black">+</button>
                          </div>
                          <button onClick={() => onRemoveItem(item.cartId)} className="text-[9px] text-neutral-400 hover:text-red-600 uppercase font-black">Remover</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-[2rem] border border-neutral-100 space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase italic mb-3">Opções de recebimento</p>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => setDeliveryMethod('delivery')}
                          className={`py-3 px-2 rounded-xl border-2 transition-all font-black text-[9px] uppercase flex flex-col items-center gap-1 ${
                            deliveryMethod === 'delivery' ? 'border-red-600 bg-white text-red-600 shadow-sm' : 'border-neutral-100 bg-white text-neutral-300'
                          }`}
                        >
                          <i className="fa-solid fa-motorcycle"></i>
                          <span>Delivery</span>
                        </button>
                        <button 
                          onClick={() => setDeliveryMethod('pickup')}
                          className={`py-3 px-2 rounded-xl border-2 transition-all font-black text-[9px] uppercase flex flex-col items-center gap-1 ${
                            deliveryMethod === 'pickup' ? 'border-red-600 bg-white text-red-600 shadow-sm' : 'border-neutral-100 bg-white text-neutral-300'
                          }`}
                        >
                          <i className="fa-solid fa-shop"></i>
                          <span>Retirada</span>
                        </button>
                      </div>
                    </div>

                    {deliveryMethod === 'delivery' && (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <input 
                              type="text" placeholder="Rua" 
                              className="flex-grow bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs font-bold focus:border-red-600 focus:outline-none"
                              value={address.street}
                              onChange={e => setAddress({...address, street: e.target.value})}
                            />
                            <input 
                              type="text" placeholder="Nº" 
                              className="w-16 bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs font-bold focus:border-red-600 focus:outline-none"
                              value={address.number}
                              onChange={e => setAddress({...address, number: e.target.value})}
                            />
                          </div>
                          <input 
                            type="text" placeholder="Bairro" 
                            className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs font-bold focus:border-red-600 focus:outline-none"
                            value={address.neighborhood}
                            onChange={e => setAddress({...address, neighborhood: e.target.value})}
                          />
                          <input 
                            type="text" placeholder="Ponto de Referência" 
                            className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs font-bold focus:border-red-600 focus:outline-none"
                            value={address.reference}
                            onChange={e => setAddress({...address, reference: e.target.value})}
                          />
                        </div>
                        
                        <p className="text-[8px] font-bold text-neutral-500 uppercase tracking-tighter text-center px-2">
                          A taxa de entrega será informada e confirmada após o envio do endereço no WhatsApp.
                        </p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-[10px] font-black text-neutral-400 uppercase italic mb-3">Forma de Pagamento</p>
                      <div className="grid grid-cols-3 gap-2">
                        <button 
                          onClick={() => setPaymentMethod('pix')}
                          className={`py-3 px-1 rounded-xl border-2 transition-all font-black text-[8px] uppercase flex flex-col items-center gap-1 ${
                            paymentMethod === 'pix' ? 'border-red-600 bg-white text-red-600 shadow-sm' : 'border-neutral-100 bg-white text-neutral-300'
                          }`}
                        >
                          <i className="fa-brands fa-pix text-xs"></i>
                          <span>Pix</span>
                        </button>
                        <button 
                          onClick={() => setPaymentMethod('dinheiro')}
                          className={`py-3 px-1 rounded-xl border-2 transition-all font-black text-[8px] uppercase flex flex-col items-center gap-1 ${
                            paymentMethod === 'dinheiro' ? 'border-red-600 bg-white text-red-600 shadow-sm' : 'border-neutral-100 bg-white text-neutral-300'
                          }`}
                        >
                          <i className="fa-solid fa-money-bill-1 text-xs"></i>
                          <span>Dinheiro</span>
                        </button>
                        <button 
                          onClick={() => setPaymentMethod('cartao')}
                          className={`py-3 px-1 rounded-xl border-2 transition-all font-black text-[8px] uppercase flex flex-col items-center gap-1 ${
                            paymentMethod === 'cartao' ? 'border-red-600 bg-white text-red-600 shadow-sm' : 'border-neutral-100 bg-white text-neutral-300'
                          }`}
                        >
                          <i className="fa-solid fa-credit-card text-xs"></i>
                          <span>Cartão</span>
                        </button>
                      </div>

                      {paymentMethod === 'dinheiro' && (
                        <div className="mt-3 animate-in fade-in duration-300">
                          <input 
                            type="text" 
                            placeholder="Troco para quanto?" 
                            className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs font-bold focus:border-red-600 focus:outline-none"
                            value={changeFor}
                            onChange={e => setChangeFor(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-white border-t border-neutral-100">
                <div className="mb-6">
                  {errorMessage && (
                    <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[10px] font-bold flex items-center gap-2">
                      <i className="fa-solid fa-circle-exclamation text-xs"></i>
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-end pt-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1">Subtotal Produtos</span>
                      <span className="text-3xl font-black text-red-600 italic leading-none">R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-green-600 text-white font-black py-5 rounded-[1.5rem] flex items-center justify-center gap-4 transition-all active:scale-95 shadow-xl shadow-green-50 uppercase tracking-[0.2em] text-[10px]"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  <span>Enviar para o WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
