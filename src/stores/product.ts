import { defineStore } from 'pinia';
import productsJSON from '@/assets/data/products.json';
import priceJSON from '@/assets/data/products.json';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: productsJSON,
    price: priceJSON,
  }),
  getters: {},
  actions: {},
});
