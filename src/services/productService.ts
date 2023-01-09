import axios from 'axios';
import { IProduct } from '@/interface/product.i';

class ProductService {
  async getProducts() {
    try {
      const response = await axios.get('/src/assets/data/products.json');
      return response.data as IProduct[];
    } catch (error) {
      console.error(error);
      return [] as IProduct[];
    }
  }
}

export default new ProductService();
