import { UseFetchOptions } from "./types";
export declare const useApi: <T>(defaultData?: T | null) => {
    fetchData: (url: string, options?: UseFetchOptions) => Promise<T | Response>;
    data: T | null;
    loading: boolean;
    error: Error | null;
};
