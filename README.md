# 💊 React Pharmacy Frontend - Sistema Farmacêutico

## 🎯 Objetivo de Aprendizado
Frontend desenvolvido para estudar **gestão farmacêutica** e **React com Redux**. Implementa interface completa para sistema de farmácia com **gerenciamento de produtos**, **processamento de pedidos** e **design responsivo**, aplicando padrões avançados de desenvolvimento frontend.

## 🛠️ Tecnologias Utilizadas
- **Framework:** React.js
- **State Management:** Redux
- **HTTP Client:** Axios
- **Roteamento:** React Router
- **Estilização:** TailwindCSS
- **Testes:** Jest, React Testing Library (planejado)
- **Build:** Create React App

## 🚀 Demonstração
```jsx
// Componente ProductCard
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      nome: product.nome,
      preco: product.preco,
      quantidade: 1
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.nome}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.descricao}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            R$ {product.preco.toFixed(2)}
          </span>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};
```

## 📁 Estrutura do Projeto
```
react-pharmacy-front/
├── src/
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Header/              # Cabeçalho da aplicação
│   │   ├── ProductCard/         # Card de produto
│   │   ├── Cart/                # Carrinho de compras
│   │   └── Loading/             # Componente de loading
│   ├── pages/                   # Páginas da aplicação
│   │   ├── Home/                # Página inicial
│   │   ├── Products/            # Listagem de produtos
│   │   ├── Cart/                # Carrinho de compras
│   │   └── Checkout/            # Finalização de pedido
│   ├── store/                   # Configuração Redux
│   │   ├── slices/              # Redux slices
│   │   └── index.js             # Store configuration
│   ├── services/                # Serviços de API
│   │   └── api.js               # Configuração Axios
│   ├── hooks/                   # Custom hooks
│   ├── utils/                   # Funções utilitárias
│   └── App.js                   # Componente raiz
├── public/                      # Arquivos públicos
└── package.json                 # Dependências
```

## 💡 Principais Aprendizados

### 🏪 Pharmacy Management
- **Product catalog:** Catálogo de medicamentos e produtos
- **Inventory tracking:** Controle de estoque
- **Order processing:** Processamento de pedidos
- **Search & filter:** Busca e filtros por categoria
- **Prescription handling:** Gestão de receitas (planejado)

### 🔄 Redux State Management
- **Global state:** Estado global da aplicação
- **Actions & reducers:** Ações e redutores
- **Middleware:** Middleware para async actions
- **Selectors:** Seletores para dados derivados
- **DevTools:** Ferramentas de desenvolvimento

### 📱 Responsive Design
- **Mobile-first:** Abordagem mobile-first
- **Breakpoints:** Pontos de quebra responsivos
- **Touch-friendly:** Interface amigável ao toque
- **Performance:** Otimização para dispositivos móveis
- **Accessibility:** Acessibilidade web

## 🧠 Conceitos Técnicos Estudados

### 1. **Redux Store Configuration**
```jsx
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 2. **Products Slice**
```jsx
// store/slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

// Async thunk para buscar produtos
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filters: {
      category: '',
      priceRange: [0, 1000],
      searchTerm: '',
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: '',
        priceRange: [0, 1000],
        searchTerm: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
```

### 3. **Custom Hook for Cart**
```jsx
// hooks/useCart.js
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state) => state.cart);

  const addItem = (product) => {
    dispatch(addToCart(product));
  };

  const removeItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const updateItemQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  const getItemQuantity = (productId) => {
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    items,
    total,
    itemCount,
    addItem,
    removeItem,
    updateItemQuantity,
    clearAllItems,
    getItemQuantity,
  };
};
```

## 🚧 Desafios Enfrentados
1. **State complexity:** Gerenciamento de estado complexo
2. **Performance:** Otimização de re-renders
3. **API integration:** Sincronização com backend Spring
4. **User experience:** Interface intuitiva para farmácia
5. **Error handling:** Tratamento robusto de erros

## 📚 Recursos Utilizados
- [React Documentation](https://reactjs.org/docs/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Generation Brasil Bootcamp](https://brazil.generation.org/) - Bootcamp onde o projeto foi desenvolvido

## 📈 Próximos Passos
- [ ] Implementar sistema de receitas médicas
- [ ] Adicionar sistema de entrega
- [ ] Criar dashboard administrativo
- [ ] Implementar sistema de fidelidade
- [ ] Adicionar chat de suporte
- [ ] Criar sistema de notificações

## 🔗 Projetos Relacionados
- [Spring Pharmacy CRUD](../spring-pharmacy-crud/) - Backend da aplicação
- [React GameStore Front](../react-gamestore-front/) - E-commerce similar
- [React E-commerce TT](../react-ecommerce-tt/) - E-commerce avançado

---

**Desenvolvido por:** Felipe Macedo  
**Contato:** contato.dev.macedo@gmail.com  
**GitHub:** [FelipeMacedo](https://github.com/felipemacedo1)  
**LinkedIn:** [felipemacedo1](https://linkedin.com/in/felipemacedo1)

> 💡 **Reflexão:** Este projeto proporcionou experiência prática com Redux e gerenciamento de estado complexo. A implementação de um sistema farmacêutico demonstrou como aplicar padrões React em domínios específicos de negócio.