import { Action } from "@ngrx/store";
// Action Type 
export enum ProductsActionsTypes {
    GET_ALL_PRODUCTS = "[Products] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All Products Success",
    GET_ALL_PRODUCTS_ERROR = "[Products] Get All Products Error"
}

export class GetAllProductsActions implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any) {
    }
}

export class GetAllProductsActionsSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: any) {
    }
}

export class GetAllProductsActionsError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) {
    }
}

export type ProductsActions =
    GetAllProductsActions | GetAllProductsActionsSuccess | GetAllProductsActionsError
    ;