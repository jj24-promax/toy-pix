export function trackFbq(
  event: string,
  params?: Record<string, string | number | string[] | undefined>
) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", event, params);
}

export function trackTikTok(
  event: string,
  params?: Record<string, string | number | undefined>
) {
  if (typeof window === "undefined") return;
  window.ttq?.track(event, params);
}

export function pushDataLayer(obj: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}
