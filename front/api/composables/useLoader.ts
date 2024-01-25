export const useLoader = () => {
    const loader = useState('loader', () => false);
    return {
        loader
    };
};
