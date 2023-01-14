interface IProductDetailsData {
  title: string;
  text: string;
  iconTarget: string;
  sortOrder: number;
}

export interface IMedia {
  targetAttr: string;
  sortOrder: number;
  path: string;
  preview?: string;
}

export interface IProductDetails {
  title: string;
  data: IProductDetailsData[];
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
  productDetails: IProductDetails;
  productSpecifications: IProductDetails;
  relatedProducts: string[];
}

export interface IProductPrice {
  id: string;
  sku: string;
  isActive: boolean;
  price: number;
  priceFormatted: string;
}

export interface IRelatedPieces {
  id: string;
  sku: string;
  price: number;
  priceFormatted: string;
  subTitle: string;
  category: string;
  imgPath: string;
}
