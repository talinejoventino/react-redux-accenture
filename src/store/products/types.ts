export enum IProductType{
    TOGGLE_PRODUCT = "TOGGLE_PRODUCT"

}

export interface IProduct{
    id: number;
    title: string;
    value: number;
    modules: IProductModules[];
}

export interface IProductModules{
    id: number;
    title: string;
}

export interface IProductInitialState{
    product ?: IProduct;
    products: IProduct[];
}

export interface IProductAction extends IProductInitialState{
    type: IProductType;
}

export interface IProductState{
    product: IProductInitialState
}