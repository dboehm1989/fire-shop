import { defineStore } from 'pinia';
import { IProduct, IProductPrice, IRelatedPieces } from '@/interface/product.i';
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
      if (!sku || !this.products || !this.price) return;
      const product = this.products.find(item => item.sku === sku) as IProduct;
      const productPrice = this.price.find(item => item.sku === sku) as IProductPrice;

      const { subTitle, category, medias } = product;
      const { price, priceFormatted } = productPrice;
      const imgPath = medias.find(media => media.targetAttr === 'sliderImage')?.path;

      return { sku, price, priceFormatted, subTitle, category, imgPath } as IRelatedPieces;
    },
    getSortedRelatedPieces() {
      const relatedProducts = this.getItem?.relatedProducts?.map(this.getRelatedPiecesProduct) as IRelatedPieces[];
      return relatedProducts?.sort((a, b) => b.price - a.price);
    },
  },
});
