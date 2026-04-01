import Script from "next/script";
import { SiteHeader } from "@/components/layout/SiteHeader";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "";

const loadGtm = Boolean(GTM_ID && !GTM_ID.includes("XXXX"));
const loadFb = Boolean(FB_PIXEL_ID && !FB_PIXEL_ID.includes("REPLACE"));
const loadTiktok = Boolean(TIKTOK_PIXEL_ID && !TIKTOK_PIXEL_ID.includes("REPLACE"));

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Pular para o conteúdo
      </a>
      {loadGtm ? (
        <Script id="gtm-base" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>
      ) : null}
      {loadFb ? (
        <Script id="fb-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init','${FB_PIXEL_ID}');
        fbq('track','PageView');
      `}</Script>
      ) : null}
      {loadTiktok ? (
        <Script id="tiktok-pixel" strategy="afterInteractive">{`
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
          ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
          ttq.setAndDefer=function(o,m){o[m]=function(){o.push([m].concat(Array.prototype.slice.call(arguments,0)))};};
          for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
          ttq.instance=function(id){var x=ttq._i[id]||[];for(var j=0;j<ttq.methods.length;j++)ttq.setAndDefer(x,ttq.methods[j]);return x;};
          ttq.load=function(id,opt){
            var u="https://analytics.tiktok.com/i18n/pixel/events.js";
            ttq._i=ttq._i||{};ttq._i[id]=[];ttq._i[id]._u=u;ttq._t=ttq._t||{};ttq._t[id]=+new Date;ttq._o=ttq._o||{};ttq._o[id]=opt||{};
            var s=d.createElement("script");s.type="text/javascript";s.async=!0;s.src=u+"?sdkid="+id+"&lib="+t;
            var f=d.getElementsByTagName("script")[0];f.parentNode.insertBefore(s,f);
          };
          ttq.load('${TIKTOK_PIXEL_ID}');
          ttq.page();
        }(window, document, 'ttq');
      `}</Script>
      ) : null}
      {loadGtm ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      ) : null}
      <SiteHeader />
      <main id="conteudo-principal" className="min-h-[60vh]">
        {children}
      </main>
      <footer className="border-t border-mint-100 bg-white py-10 text-center text-sm text-slate-600">
        <p className="font-medium text-slate-800">
          © {new Date().getFullYear()} Toy Pix
        </p>
        <p className="mt-1 text-slate-500">
          Pagamentos com Pix · Voucher digital · Atendimento em horário comercial
        </p>
      </footer>
    </>
  );
}
