interface FetchOptions extends RequestInit {
    skipJsonParsing?: boolean;
}
export declare const useApi: <T>(defaultData?: T | null) => {
    fetchData: (url: string, options?: FetchOptions) => Promise<T | Response>;
    data: T | null;
    loading: boolean;
    error: Error | null;
};
export {};
