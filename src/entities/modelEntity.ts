import { BrandEntity } from "./brandEntity";
import { CategoryEntity } from "./categoryEntity";

export interface ModelEntity {
  id: number;
  name: string;
  category: CategoryEntity,
  categoryId: number,
  brand: BrandEntity,
  brandId: number
}
