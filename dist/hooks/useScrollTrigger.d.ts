interface ScrollDirection {
    vertical: "up" | "down" | "none";
    horizontal: "left" | "right" | "none";
}
interface UseScrollTriggerOptions {
    threshold?: number;
    disableHysteresis?: boolean;
    throttleMs?: number;
    showScrollTop?: boolean;
    scrollTopThreshold?: number;
    showScrollBottom?: boolean;
    scrollBottomThreshold?: number;
}
export declare const useScrollTrigger: ({ threshold, disableHysteresis, throttleMs, showScrollTop, scrollTopThreshold, showScrollBottom, scrollBottomThreshold, }?: UseScrollTriggerOptions) => {
    trigger: boolean;
    scrollTo: (options: ScrollToOptions) => void;
    showTopButton: boolean;
    showBottomButton: boolean;
    x: number;
    y: number;
    direction: ScrollDirection;
    isAtTop: boolean;
    isAtBottom: boolean;
};
export {};
