import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    removeItem: (state, action) => {
      const removedItem = state.items.find(item => item.name === action.payload);
      if (removedItem) {
        state.totalItems -= removedItem.quantity;
        state.items = state.items.filter(item => item.name !== action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        state.totalItems += (quantity - itemToUpdate.quantity);
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectTotalItems = state => state.cart.totalItems;

// Exporting a constant to keep track of the number of items
export const totalItemsCount = state => state.cart.items.reduce((acc, item) => acc + item.quantity, 0);

export default CreatSlice.reducer;