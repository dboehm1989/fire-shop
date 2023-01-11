import { defineStore } from 'pinia';
import { IProduct, IProductPrice } from '@/interface/product.i';
import ProductService from '@/services/productService';

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedSku: 'GOA535',
    products: [] as IProduct[],
    price: [] as IProductPrice[],
  }),
  getters: {
    getItem: state => state.products.find(item => item.sku === state.selectedSku),
    getPrice: state => state.price.find(item => item.sku === state.selectedSku),
  },
  actions: {
    async loadProducts() {
      this.products = await ProductService.getProducts();
    },
    async loadProductPrice() {
      this.price = await ProductService.getProductPrice();
    },
    getRelatedPiecesProduct(sku?: string) {
      if (!sku) return;
      const product = this.products.find(item => item.sku === sku);
      const price = this.price.find(item => item.sku === sku);

      return {
        sku,
        price: price?.price,
        priceFormatted: price?.priceFormatted,
        subTitle: product?.subTitle,
        category: product?.category,
      };
    },
  },
});
