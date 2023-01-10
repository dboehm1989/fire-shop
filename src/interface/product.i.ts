interface IMedia {
  targetAttr: string;
  path: string;
  sortOrder: number;
}

interface IProductDetails {
  title: string;
  text: string;
  iconTarget: string;
  sortOrder: number;
}

export interface IProduct {
  id: string;
  category: string;
  title: string;
  subTitle: string;
  sku: string;
  shortDescription: string;
  isActive: boolean;
  medias: IMedia[];
  productDetails: {
    title: string;
    data: IProductDetails[];
  };
  productSpecifications: {
    title: string;
    data: IProductDetails[];
  };
  relatedProducts: string[];
}

export interface IProductPrice {
  id: string;
  isActive: boolean;
  price: number;
  priceFormatted: string;
}
