export declare const formatDate: (date: Date | string, options?: Intl.DateTimeFormatOptions) => string;
export declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
export declare const classNames: (...classes: (string | undefined | null | false)[]) => string;
export declare const generateId: () => string;
