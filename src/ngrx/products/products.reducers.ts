import { IProduct } from './../../app/models/product';
export enum ProductsEnumState {
    INITIAL = "Initial",
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error"
}
export interface ProductsState {
    products: IProduct[],
    dataSatate: ProductsEnumState,
    errorMessage: string
}