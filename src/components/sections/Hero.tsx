import { HeroCta } from "@/components/molecules/HeroCta";

const VIDEO_POSTER =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=70&auto=format&fit=crop";
const VIDEO_WEBM =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm";

export const Hero = () => (
  <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden bg-slate-900">
    <div className="absolute inset-0 z-0">
      <video
        className="h-full w-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        poster={VIDEO_POSTER}
        preload="metadata"
      >
        <source src={VIDEO_WEBM} type="video/webm" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/80"
        aria-hidden
      />
    </div>
    <div className="relative z-10 flex h-full min-h-[62vh] w-full max-w-4xl flex-col items-center justify-center space-y-3 px-4 py-16 text-center text-white">
      <h1 className="font-display text-balance text-4xl font-extrabold drop-shadow-xl md:text-6xl">
        Brinquedos que brilham nos olhos das crianças
      </h1>
      <p className="max-w-xl text-lg opacity-90">
        Entrega digital + Pix sem complicação
      </p>
      <HeroCta price={89.9} productId="1" />
    </div>
  </section>
);
