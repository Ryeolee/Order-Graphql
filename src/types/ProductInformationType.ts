import { ProductImage } from 'src/entity/ProductImage';

export type ProductInformationType = {
  productImages: ProductImage[];
  id: number;
  name: string;
  category: string;
};
