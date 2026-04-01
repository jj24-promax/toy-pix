export {};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page: () => void;
    };
  }
}
