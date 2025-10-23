import { UseScrollDirection, UseScrollTriggerOptions } from "./types";
export declare const useScrollTrigger: ({ threshold, disableHysteresis, throttleMs, showScrollTop, scrollTopThreshold, showScrollBottom, scrollBottomThreshold, }?: UseScrollTriggerOptions) => {
    trigger: boolean;
    scrollTo: (options: ScrollToOptions) => void;
    showTopButton: boolean;
    showBottomButton: boolean;
    x: number;
    y: number;
    direction: UseScrollDirection;
    isAtTop: boolean;
    isAtBottom: boolean;
};
