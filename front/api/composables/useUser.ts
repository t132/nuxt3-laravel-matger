type User={
    name: string;
    email?: string;
    email_verified_at?: Date;
}
export const useUser = () => {
    const config = useRuntimeConfig();
    const user = useState<User | null>(config.public.api.userKey, () => null);

    return user;
};
