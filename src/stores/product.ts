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
    getRelatedPiecesProduct(sku: string) {
      if (!sku || !this.products?.length || !this.price?.length) return;
      const product = this.products.find(item => item.sku === sku) as IProduct;
      const productPrice = this.price.find(item => item.sku === sku) as IProductPrice;

      const { id, subTitle, category, medias } = product;
      const { price, priceFormatted } = productPrice;
      const path = medias.find(media => media.targetAttr === 'sliderImage')?.path;
      const imgPath = path ? new URL(`/src/assets/img/${path}`, import.meta.url).href : undefined;
      return { id, sku, price, priceFormatted, subTitle, category, imgPath } as IRelatedPieces;
    },
    getSortedRelatedPieces(sortType: 'min' | 'max') {
      const relatedProductsSku = this.getItem?.relatedProducts;
      if (!relatedProductsSku?.length) return [];
      const relatedProducts = relatedProductsSku?.map(this.getRelatedPiecesProduct) as IRelatedPieces[];
      return relatedProducts?.sort((a, b) => (sortType === 'max' ? b.price - a.price : a.price - b.price));
    },
  },
});
