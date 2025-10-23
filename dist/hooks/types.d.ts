export interface UseLocalStorageResult<T> {
    value: T;
    setValue: (value: T | ((prev: T) => T)) => void;
    removeValue: () => void;
}
export interface UseApiResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
export interface UseFetchOptions extends RequestInit {
    skipJsonParsing?: boolean;
}
export interface UseScrollDirection {
    vertical: "up" | "down" | "none";
    horizontal: "left" | "right" | "none";
}
export interface UseScrollPosition {
    x: number;
    y: number;
    direction: UseScrollDirection;
    isAtTop: boolean;
    isAtBottom: boolean;
}
export interface UseScrollTriggerOptions {
    threshold?: number;
    disableHysteresis?: boolean;
    throttleMs?: number;
    showScrollTop?: boolean;
    scrollTopThreshold?: number;
    showScrollBottom?: boolean;
    scrollBottomThreshold?: number;
}
