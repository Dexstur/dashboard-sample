import { TProduct } from "@/mock/product/types";
import { IFilter } from "@/types";

export type ProductState = {
  loading: boolean;
  products: TProduct[];
  selected: TProduct | null;
  total: number;
  filters: IFilter;
};
