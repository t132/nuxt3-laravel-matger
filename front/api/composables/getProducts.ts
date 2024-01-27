import ApplicationService from "../services/ApplicationService";
import { useApi } from './useApi';
import { useProducts,usePage,useLastPage } from './useProducts';
export const getProducts = () => {
const Products=useProducts()
const Page=usePage()
const LastPage=useLastPage()
const {callProducts}=useApi()
    async function products(page:any): Promise<any>
     {
        if (page>LastPage) {
            return
        }
       const data= await callProducts.products(page);
         Products.value=[...Products.value , ...data.data]
         console.log(data.data);

    }
    return {
        products
    }
}
