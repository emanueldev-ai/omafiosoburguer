import { BusinessConfig, Product } from './types';

export const BUSINESS_INFO: BusinessConfig = {
  name: "O Mafioso Burger",
  phone: "5515996404996", 
  formattedPhone: "(15) 99640-4996",
  openingHours: "19:30 às 23:59",
  closedDays: "Segunda e Terça-feira",
  address: "Rua João Gomes Munhoz 66"
};

export const CATEGORY_IMAGES = {
  burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
  combos: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
  'hot-dogs': "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&q=80&w=800",
  gourmet: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
  sides: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=800",
  drinks: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
};

const BURGER_EXTRAS_IDS = [
  "ext-hamb-140", "ext-ovo", "ext-alface", "ext-cheddar", "ext-catupiry", 
  "ext-mussarela", "ext-bacon-cubo", "ext-calabresa", "ext-frango", 
  "ext-doritos", "ext-brocolis", "ext-onion", "ext-bacon-tira"
];

const DOG_EXTRAS_IDS = [
  "ext-salsicha", "ext-catupiry-dog", "ext-cheddar-dog", "ext-pure", 
  "ext-bacon-dog", "ext-calabresa-dog", "ext-frango-dog", "ext-queijo-dog", 
  "ext-doritos-dog", "ext-brocolis-dog"
];

export const PRODUCTS: Product[] = [
  // --- COMPLEMENTOS LANCHE ---
  { id: "ext-hamb-140", name: "Hambúrguer 140g", description: "", price: 9.50, imageUrl: "", category: "extra-burger" },
  { id: "ext-ovo", name: "Ovo", description: "", price: 3.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-alface", name: "Alface", description: "", price: 3.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-cheddar", name: "Cheddar", description: "", price: 5.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-catupiry", name: "Catupiry", description: "", price: 5.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-mussarela", name: "Queijo mussarela", description: "", price: 6.50, imageUrl: "", category: "extra-burger" },
  { id: "ext-bacon-cubo", name: "Bacon cubo", description: "", price: 8.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-calabresa", name: "Calabresa", description: "", price: 8.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-frango", name: "Frango", description: "", price: 7.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-doritos", name: "Doritos", description: "", price: 5.50, imageUrl: "", category: "extra-burger" },
  { id: "ext-brocolis", name: "Brócolis", description: "", price: 4.50, imageUrl: "", category: "extra-burger" },
  { id: "ext-onion", name: "Onion ring", description: "", price: 6.00, imageUrl: "", category: "extra-burger" },
  { id: "ext-bacon-tira", name: "Bacon em tira", description: "", price: 9.00, imageUrl: "", category: "extra-burger" },

  // --- COMPLEMENTOS HOT DOG ---
  { id: "ext-salsicha", name: "Salsicha", description: "", price: 4.00, imageUrl: "", category: "extra-dog" },
  { id: "ext-catupiry-dog", name: "Catupiry", description: "", price: 5.00, imageUrl: "", category: "extra-dog" },
  { id: "ext-cheddar-dog", name: "Cheddar", description: "", price: 5.00, imageUrl: "", category: "extra-dog" },
  { id: "ext-pure", name: "Purê", description: "", price: 4.00, imageUrl: "", category: "extra-dog" },
  { id: "ext-bacon-dog", name: "Bacon", description: "", price: 7.50, imageUrl: "", category: "extra-dog" },
  { id: "ext-calabresa-dog", name: "Calabresa", description: "", price: 7.50, imageUrl: "", category: "extra-dog" },
  { id: "ext-frango-dog", name: "Frango", description: "", price: 7.50, imageUrl: "", category: "extra-dog" },
  { id: "ext-queijo-dog", name: "Queijo", description: "", price: 6.00, imageUrl: "", category: "extra-dog" },
  { id: "ext-doritos-dog", name: "Doritos", description: "", price: 5.00, imageUrl: "", category: "extra-dog" },
  { id: "ext-brocolis-dog", name: "Brócolis", description: "", price: 4.00, imageUrl: "", category: "extra-dog" },

  // 1. HAMBÚRGUERES
  { id: "x-burguer", name: "X-Burguer", description: "Pão de hambúrguer, maionese caseira, hambúrguer caseiro 140g, queijo mussarela, tomate e ketchup.", price: 18.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Tomate", "Ketchup"] },
  { id: "x-salada", name: "X-Salada", description: "Pão de hambúrguer, maionese caseira, hambúrguer 140g, queijo mussarela, tomate, alface, ketchup e mostarda.", price: 22.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Tomate", "Alface", "Ketchup", "Mostarda"] },
  { id: "x-milho", name: "X-Milho", description: "Pão de hambúrguer, maionese caseira, hambúrguer 140g, queijo mussarela, tomate, ketchup e milho.", price: 22.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Tomate", "Ketchup", "Milho"] },
  { id: "x-egg", name: "X-Egg", description: "Pão de hambúrguer, maionese caseira, hambúrguer 140g, queijo mussarela, tomate, alface, ovo, ketchup e mostarda.", price: 24.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Tomate", "Alface", "Ovo", "Ketchup", "Mostarda"] },
  { id: "galinhao", name: "Galinhão", description: "Pão de hambúrguer, maionese caseira, vinagrete com cebola, milho, frango em cubos, catupiry original cremoso e ketchup.", price: 24.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Vinagrete", "Milho", "Frango", "Catupiry", "Ketchup"] },
  { id: "x-frango", name: "X-Frango", description: "Pão de hambúrguer, maionese caseira, hambúrguer 140g, queijo mussarela, frango em cubos, tomate e ketchup.", price: 25.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Frango", "Tomate", "Ketchup"] },
  { id: "x-bacon", name: "X-Bacon", description: "Pão de hambúrguer, maionese caseira, hambúrguer 140g, queijo mussarela, bacon em cubos, tomate e ketchup.", price: 26.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Bacon em Cubos", "Tomate", "Ketchup"] },
  { id: "x-calabresa", name: "X-Calabresa", description: "Pão de hambúrguer, maionese caseira, hambúrguer 140g, queijo mussarela, calabresa fatiada, tomate e ketchup.", price: 26.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Calabresa", "Tomate", "Ketchup"] },
  { id: "x-brocolis-bacon-cheddar", name: "X-Brócolis Bacon e Cheddar", description: "Pão, maionese caseira, hambúrguer 140g, queijo mussarela, tomate, ketchup, bacon em cubos, brócolis e cheddar cremoso.", price: 32.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Tomate", "Ketchup", "Bacon", "Brócolis", "Cheddar"] },
  { id: "x-doritos-bacon-cheddar", name: "X-Doritos Bacon e Cheddar", description: "Pão, maionese caseira, hambúrguer 140g, queijo mussarela, tomate, ketchup, bacon em cubos, Doritos e cheddar cremoso.", price: 32.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese Caseira", "Hambúrguer 140g", "Queijo Mussarela", "Tomate", "Ketchup", "Bacon", "Doritos", "Cheddar"] },
  { id: "x-zelao", name: "X-Zélão", description: "Pão, maionese caseira, dois hambúrgueres 140g, queijo mussarela, tomate, alface, ovo, bacon em cubos e cheddar cremoso.", price: 37.50, imageUrl: "", category: "burgers", isFeatured: true, extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese", "2x Hambúrguer", "Queijo", "Tomate", "Alface", "Ovo", "Bacon", "Cheddar"] },
  { id: "furioso", name: "Furioso", description: "Pão, maionese caseira, dois hambúrgueres 140g, queijo mussarela, tomate, ketchup, dois ovos, bacon, calabresa e cheddar cremoso.", price: 43.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese", "2x Hambúrguer", "Queijo", "Tomate", "Ketchup", "2x Ovos", "Bacon", "Calabresa", "Cheddar"] },
  { id: "ze-galinhao", name: "Zé Galinhão", description: "Pão, maionese, hambúrguer 140g, vinagrete, milho, frango, bacon, onion ring, catupiry, ketchup e barbecue.", price: 37.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese", "Hambúrguer", "Vinagrete", "Milho", "Frango", "Bacon", "Onion Ring", "Catupiry", "Ketchup", "Barbecue"] },
  { id: "x-bacon-turbo", name: "X-Bacon Turbo", description: "Pão, maionese caseira, hambúrguer 140g, queijo mussarela, bacon em tiras, tomate, ketchup, cheddar cremoso e onion ring.", price: 35.90, imageUrl: "", category: "burgers", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Maionese", "Hambúrguer", "Queijo", "Bacon em Tiras", "Tomate", "Ketchup", "Cheddar", "Onion Ring"] },
  { id: "x-salada-turbinado", name: "X-Salada Turbinado", description: "Dois hambúrgueres 140g, queijo, tomate, alface, ketchup, mostarda, bacon em tiras, onion ring e cheddar cremoso.", price: 42.99, imageUrl: "", category: "burgers", isFeatured: true, extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["2x Hambúrguer", "Queijo", "Tomate", "Alface", "Ketchup", "Mostarda", "Bacon em Tiras", "Onion Ring", "Cheddar"] },

  // 2. COMBOS
  { id: "combo-familia", name: "COMBO FAMILIA", description: "2 Salada Gourmet, 2 Bacon Cheddar, Porção onion ring, Porção fritas bacon cheddar, 1 Coca-Cola 2L.", price: 129.90, imageUrl: "", category: "combos", isFeatured: true, extraIds: BURGER_EXTRAS_IDS },
  { id: "combo-casal", name: "Combo Casal", description: "2 Salada Gourmet, 1 Porção de fritas com cheddar/bacon, 1 Refri lata.", price: 59.99, imageUrl: "", category: "combos", isFeatured: true, extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["2x Salada Gourmet", "Fritas Cheddar/Bacon", "Refri Lata"] },

  // 5. GOURMET
  { id: "classico-gourmet", name: "Clássico Gourmet", description: "Pão brioche, maionese artesanal, tomate, hambúrguer Angus 170g e queijo cheddar em fatias.", price: 19.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Hambúrguer Angus 170g", "Cheddar Fatias"] },
  { id: "angus-bacon-cheddar", name: "Angus Bacon Cheddar", description: "Pão brioche, maionese artesanal, tomate, hambúrguer Angus 170g, queijo cheddar em fatias, bacon em cubos e cheddar cremoso.", price: 29.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Cubos", "Cheddar Cremoso"] },
  { id: "angus-doritos", name: "Angus Doritos", description: "Pão brioche, maionese artesanal, tomate, hambúrguer Angus 170g, queijo cheddar em fatias, bacon em cubos, cheddar cremoso e Doritos.", price: 33.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Cubos", "Cheddar Cremoso", "Doritos"] },
  { id: "furios-bacon", name: "Furios Bacon", description: "Pão brioche, maionese artesanal, tomate, hambúrguer Angus 170g, queijo cheddar em fatias, bacon em tiras, onion ring e cheddar cremoso.", price: 35.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Tiras", "Onion Ring", "Cheddar Cremoso"] },
  { id: "salada-gourmet", name: "Salada Gourmet", description: "Pão de brioche, maionese artesanal, tomate, cebola roxa, alface americana, hambúrguer Angus 170g, queijo cheddar em fatias.", price: 25.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Cebola Roxa", "Alface Americana", "Hambúrguer Angus 170g", "Cheddar Fatias"] },
  { id: "salada-bacon", name: "Salada Bacon", description: "Pão de brioche, maionese artesanal, tomate, alface americana, hambúrguer Angus 170g, queijo cheddar em fatias, bacon em tiras.", price: 30.99, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Alface Americana", "Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Tiras"] },
  { id: "salada-bacon-rodeio", name: "Salada Bacon Rodeio", description: "Pão de brioche, maionese artesanal, tomate, alface americana, hambúrguer Angus 170g, queijo cheddar em fatias, bacon em tiras, onion ring, cheddar.", price: 36.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Alface Americana", "Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Tiras", "Onion Ring", "Cheddar"] },
  { id: "duplo-bacon-gourmet", name: "Duplo Bacon", description: "Pão de brioche, maionese artesanal, tomate, dois hambúrgueres Angus 170g, queijo cheddar em fatias, bacon em tiras.", price: 39.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "2x Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Tiras"] },
  { id: "duplo-cheddar-cremoso-gourmet", name: "Duplo Cheddar Cremoso", description: "Pão de brioche, maionese artesanal, tomate, dois hambúrgueres Angus 170g, queijo cheddar em fatias, cheddar cremoso.", price: 38.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "2x Hambúrguer Angus 170g", "Cheddar Fatias", "Cheddar Cremoso"] },
  { id: "classico-bacon-gourmet", name: "Clássico Bacon", description: "Pão de brioche, maionese artesanal, tomate, hambúrguer Angus 170g, queijo cheddar em fatias, bacon em tiras.", price: 26.90, imageUrl: "", category: "gourmet", extraIds: BURGER_EXTRAS_IDS, standardIngredients: ["Pão Brioche", "Maionese Artesanal", "Tomate", "Hambúrguer Angus 170g", "Cheddar Fatias", "Bacon Tiras"] },

  // 3. HOT DOG
  { id: "dog-simples", name: "Hot Dog Simples", description: "Pão de hot dog, salsicha Perdigão, maionese caseira, vinagrete com milho e cebola, batata palha, ketchup e mostarda.", price: 13.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese Caseira", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda"] },
  { id: "dog-duplo", name: "Hot Dog Duplo", description: "Pão, duas salsichas Perdigão, maionese caseira, vinagrete com milho e cebola, batata palha, ketchup e mostarda.", price: 17.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["2x Salsicha", "Maionese Caseira", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda"] },
  { id: "dog-catupiry", name: "Hot Dog Catupiry", description: "Salsicha Perdigão, maionese, vinagrete com milho e cebola, batata palha, ketchup, mostarda e Catupiry Original.", price: 18.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda", "Catupiry"] },
  { id: "dog-cheddar", name: "Hot Dog Cheddar", description: "Salsicha Perdigão, maionese, vinagrete com milho e cebola, batata palha, ketchup, mostarda e cheddar cremoso.", price: 18.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda", "Cheddar"] },
  { id: "dog-pure", name: "Hot Dog Purê", description: "Salsicha Perdigão, maionese, vinagrete com milho e cebola, batata palha, ketchup, mostarda e purê de batata cremoso.", price: 17.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda", "Purê"] },
  { id: "dog-bacon", name: "Hot Dog Bacon", description: "Salsicha Perdigão, maionese, vinagrete com milho e cebola, batata palha, ketchup, mostarda, bacon e queijo mussarela.", price: 20.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda", "Bacon", "Queijo Mussarela"] },
  { id: "dog-calabresa", name: "Hot Dog Calabresa", description: "Salsicha Perdigão, maionese, vinagrete com milho e cebola, batata palha, ketchup, mostarda, calabresa e queijo mussarela.", price: 20.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda", "Calabresa", "Queijo Mussarela"] },
  { id: "dog-frango", name: "Hot Dog Frango", description: "Salsicha Perdigão, maionese, vinagrete com milho e cebola, batata palha, ketchup, mostarda, frango em cubos e queijo mussarela.", price: 20.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Milho", "Batata Palha", "Ketchup", "Mostarda", "Frango", "Queijo Mussarela"] },
  { id: "dog-doritos", name: "Hot Dog Doritos", description: "Salsicha, maionese, vinagrete, batata palha, ketchup, mostarda, bacon, mussarela, cheddar cremoso e Doritos.", price: 27.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Batata Palha", "Ketchup", "Mostarda", "Bacon", "Queijo Mussarela", "Cheddar", "Doritos"] },
  { id: "dog-brocolis-bacon-cheddar", name: "Hot Dog Brócolis Bacon Cheddar", description: "Salsicha, maionese, vinagrete, batata palha, ketchup, mostarda, bacon, brócolis, queijo mussarela e cheddar cremoso.", price: 27.50, imageUrl: "", category: "hot-dogs", extraIds: DOG_EXTRAS_IDS, standardIngredients: ["Salsicha", "Maionese", "Vinagrete", "Batata Palha", "Ketchup", "Mostarda", "Bacon", "Brócolis", "Queijo Mussarela", "Cheddar"] },
  { id: "cachorrao", name: "Cachorrão", description: "Duas salsichas, maionese, vinagrete, batata palha, bacon, calabresa, frango, mussarela, cheddar e catupiry original.", price: 37.50, imageUrl: "", category: "hot-dogs", isFeatured: true, extraIds: DOG_EXTRAS_IDS, standardIngredients: ["2x Salsicha", "Maionese", "Vinagrete", "Batata Palha", "Bacon", "Calabresa", "Frango", "Queijo Mussarela", "Cheddar", "Catupiry"] },

  // 4. BEBIDAS
  { id: "coca-2l", name: "Coca-Cola 2L", description: "Gelada e perfeita para acompanhar sua rodada de Mafioso.", price: 15.00, imageUrl: "", category: "drinks" },
  { id: "tuiubaiana-2l", name: "Tuiubaiana 2L", description: "O sabor tradicional da região, geladinha.", price: 10.00, imageUrl: "", category: "drinks" },
  { id: "refri-lata", name: "Refri Lata 350ml", description: "Refrigerante lata 350ml gelado (Coca, Fanta, Guaraná).", price: 7.50, imageUrl: "", category: "drinks" },

  // 6. PORÇÕES
  { id: "batata-p", name: "Batata (P)", description: "Batata frita crocante e sequinha.", price: 13.50, imageUrl: "", category: "sides" },
  { id: "batata-g", name: "Batata (G)", description: "Porção grande de batata frita crocante.", price: 23.50, imageUrl: "", category: "sides" },
  { id: "batata-especial-p", name: "Batata Cheddar e Bacon (P)", description: "Batata frita, cheddar cremoso e bacon em cubos.", price: 23.50, imageUrl: "", category: "sides" },
  { id: "batata-especial-g", name: "Batata Cheddar e Bacon (G)", description: "Batata frita grande, cheddar cremoso e muito bacon em cubos.", price: 33.50, imageUrl: "", category: "sides" }
];