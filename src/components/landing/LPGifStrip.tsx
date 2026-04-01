"use client";

const gifItems = [
  { src: "/gifs/video1.gif", alt: "Criança brincando com kit no banho" },
  { src: "/gifs/video2.gif", alt: "Demonstração do efeito colorido na água" },
  { src: "/gifs/video3.gif", alt: "Brincadeira com espuma colorida em família" },
];

export function LPGifStrip() {
  const loopItems = [...gifItems, ...gifItems];

  return (
    <section className="bg-white pb-12 md:pb-16" aria-labelledby="gif-strip-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="gif-strip-heading"
          className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl"
        >
          Veja a Magia Acontecer!
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600 md:text-base">
          Resultados reais em poucos segundos: as cores se espalham e transformam
          o banho em brincadeira inesquecível.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 p-3">
          <div className="animate-marquee flex w-max gap-3">
            {loopItems.map((gif, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${gif.src}-${i}`}
                src={gif.src}
                alt={gif.alt}
                className="h-60 w-[18rem] shrink-0 rounded-2xl object-cover shadow-sm md:h-72 md:w-[22rem]"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
