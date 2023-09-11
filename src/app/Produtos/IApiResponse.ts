import { Produto } from "./Produto";

export interface IApiResponse {
  products: Produto[];
  total: number;
  skip: number;
  limit: number;
}