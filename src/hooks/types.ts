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
  threshold?: number; // px scroll to trigger header shadow
  disableHysteresis?: boolean;
  throttleMs?: number; 
  showScrollTop?: boolean; // show “scroll to top” button
  scrollTopThreshold?: number; // px scrolled before showing button
  showScrollBottom?: boolean; // show “scroll to bottom” button
  scrollBottomThreshold?: number; // px from bottom to show button
}