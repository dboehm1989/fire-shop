import { defineStore } from 'pinia';
import { IProduct } from '@/interface/product.i';
import priceJSON from '@/assets/data/products.json';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as IProduct[],
    price: priceJSON,
  }),
  getters: {},
  actions: {},
});
