import { IProductPrice } from '@/interface/product.i';
import axios from 'axios';
import { IProduct } from '@/interface/product.i';
import exampleProducts from '@/assets/data/products.json';
import examplePrice from '@/assets/data/price.json';

class ProductService {
  async getProducts() {
    try {
      const response = await axios.get('/src/assets/data/products.json');
      return response.data as IProduct[];
    } catch (error) {
      console.error(error);
      return exampleProducts;
    }
  }
  async getProductPrice() {
    try {
      const response = await axios.get('/src/assets/data/price.json');
      return response.data as IProductPrice[];
    } catch (error) {
      console.error(error);
      return examplePrice;
    }
  }
}

export default new ProductService();
