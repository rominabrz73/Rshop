import { client } from "../api";

export async function getProduct() {
    const {data} = await client ("products");
    return data;

    
}