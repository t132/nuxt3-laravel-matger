import { ApiServiceBase } from "./ApiServiceBase";

export default class ProductsService extends ApiServiceBase {
    async products(page:string): Promise<any> {

        const data= await this.call(`/api/products?page=${page}`);
        return data
    }
}
