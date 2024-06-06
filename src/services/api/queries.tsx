import { client } from "../api";

export async function getProduct() {
    const {data} = await client ("products");
    return data;

    
}

export async function getProductItem({id}:{id:string}) {
    const {data} = await client (`/products/${id}`);
    return data;

    
}