type Products={
    title?: string;
    image?: string;
    price?: string;
    description?: string;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
}
export const useProducts = () => {
    const products = useState<Products | null>('products', () => null);
    return products;
};
export const usePage = () => {
    const products = useState<Products | null>('page', () => null);
    return products;
};
export const useLastPage = () => {
    const products = useState<Products | null>('lastpage', () => null);
    return products;
};
