"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { buttonVariants } from "@/components/atoms/Button";
import { CatalogProductCard } from "@/components/catalog/CatalogProductCard";
import {
  getPriceBounds,
  products,
  type ProductGender,
} from "@/data/products";
import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

type SortKey = "relevance" | "price-asc" | "price-desc" | "name";

const spotlights: {
  title: string;
  subtitle: string;
  category: string;
  gradient: string;
}[] = [
  {
    title: "Montar e criar",
    subtitle: "Blocos, kits e imaginação",
    category: "Montar e criar",
    gradient: "from-mint-500/90 to-skyplay-600/85",
  },
  {
    title: "Bonecas e histórias",
    subtitle: "Personagens e casinha",
    category: "Bonecas e casinha",
    gradient: "from-bubblegum-500/90 to-lilac-500/85",
  },
  {
    title: "Pistas e carrinhos",
    subtitle: "Velocidade com segurança",
    category: "Veículos e pistas",
    gradient: "from-skyplay-600/90 to-mint-700/80",
  },
  {
    title: "Jogos e puzzle",
    subtitle: "Desafios e concentração",
    category: "Jogos e puzzle",
    gradient: "from-sun-400/95 to-skyplay-500/85",
  },
];

const trustBadges = [
  "Checkout Pix seguro",
  "Envio rápido para todo o Brasil",
  "Garantia de 7 dias",
];

const socialCounters = [
  { label: "Famílias felizes", value: "12.400+" },
  { label: "Pedidos neste mês", value: "3.180" },
  { label: "Avaliação média", value: "4,9/5" },
];

const testimonials = [
  {
    author: "Emily R.",
    text: "Minha filha ficou encantada. O checkout foi rápido e os avisos de entrega vieram certinhos.",
  },
  {
    author: "Nathan B.",
    text: "Parece loja premium de brinquedos. Excelente custo-benefício e pagamento via Pix muito fácil.",
  },
  {
    author: "Sofia M.",
    text: "Comprei em menos de 2 minutos. A qualidade do produto veio exatamente como nas fotos.",
  },
];

function toggleInList(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
      <legend className="mb-3 text-sm font-bold text-slate-900">{title}</legend>
      <div className="space-y-2">{children}</div>
    </fieldset>
  );
}

function CheckboxRow({
  id,
  label,
  checked,
  onChange,
  count,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  count?: number;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-lg py-1.5 pl-1 pr-2 text-sm text-slate-700 transition hover:bg-mint-50/80"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 rounded border-slate-300 text-primary focus:ring-primary"
      />
      <span className="flex-1 leading-tight">{label}</span>
      {count != null ? (
        <span className="tabular-nums text-xs text-slate-400">({count})</span>
      ) : null}
    </label>
  );
}

type FilterPanelProps = {
  categories: string[];
  brands: string[];
  genders: ProductGender[];
  ages: string[];
  selectedCategories: string[];
  setSelectedCategories: (v: string[]) => void;
  selectedBrands: string[];
  setSelectedBrands: (v: string[]) => void;
  selectedGenders: ProductGender[];
  setSelectedGenders: (v: ProductGender[]) => void;
  selectedAges: string[];
  setSelectedAges: (v: string[]) => void;
  priceCeiling: number;
  setPriceCeiling: (n: number) => void;
  priceBounds: { min: number; max: number };
  categoryCounts: Record<string, number>;
  brandCounts: Record<string, number>;
  onClear: () => void;
  className?: string;
};

function FilterPanel({
  categories,
  brands,
  genders,
  ages,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  selectedGenders,
  setSelectedGenders,
  selectedAges,
  setSelectedAges,
  priceCeiling,
  setPriceCeiling,
  priceBounds,
  categoryCounts,
  brandCounts,
  onClear,
  className,
}: FilterPanelProps) {
  return (
    <aside
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-display text-lg font-bold text-slate-900">
          Filtrar por
        </h2>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Limpar
        </button>
      </div>

      <div className="space-y-5">
        <FilterSection title="Categoria">
          {categories.map((c) => (
            <CheckboxRow
              key={c}
              id={`cat-${c}`}
              label={c}
              checked={selectedCategories.includes(c)}
              count={categoryCounts[c]}
              onChange={() =>
                setSelectedCategories(toggleInList(selectedCategories, c))
              }
            />
          ))}
        </FilterSection>

        <FilterSection title="Marca">
          {brands.map((b) => (
            <CheckboxRow
              key={b}
              id={`brand-${b}`}
              label={b}
              checked={selectedBrands.includes(b)}
              count={brandCounts[b]}
              onChange={() =>
                setSelectedBrands(toggleInList(selectedBrands, b))
              }
            />
          ))}
        </FilterSection>

        <FilterSection title="Gênero">
          {genders.map((g) => (
            <CheckboxRow
              key={g}
              id={`gender-${g}`}
              label={g}
              checked={selectedGenders.includes(g)}
              onChange={() => {
                setSelectedGenders(
                  selectedGenders.includes(g)
                    ? selectedGenders.filter((x) => x !== g)
                    : [...selectedGenders, g]
                );
              }}
            />
          ))}
        </FilterSection>

        <FilterSection title="Faixa etária">
          {ages.map((a) => (
            <CheckboxRow
              key={a}
              id={`age-${a}`}
              label={a}
              checked={selectedAges.includes(a)}
              onChange={() =>
                setSelectedAges(toggleInList(selectedAges, a))
              }
            />
          ))}
        </FilterSection>

        <FilterSection title="Preço máximo">
          <p className="mb-2 text-xs text-slate-500">
            Até{" "}
            <span className="font-bold text-slate-800">
              R$ {formatBRL(priceCeiling)}
            </span>
          </p>
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            step={5}
            value={priceCeiling}
            onChange={(e) => setPriceCeiling(Number(e.target.value))}
            className="w-full accent-primary"
            aria-valuemin={priceBounds.min}
            aria-valuemax={priceBounds.max}
            aria-valuenow={priceCeiling}
            aria-label="Preço máximo"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>R$ {formatBRL(priceBounds.min)}</span>
            <span>R$ {formatBRL(priceBounds.max)}</span>
          </div>
        </FilterSection>
      </div>
    </aside>
  );
}

export function ProductCatalog() {
  const priceBounds = useMemo(() => getPriceBounds(products), []);
  const [priceCeiling, setPriceCeiling] = useState(priceBounds.max);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<ProductGender[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("relevance");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    []
  );
  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    []
  );
  const genders: ProductGender[] = ["Unissex", "Menina", "Menino"];
  const ages = useMemo(
    () => Array.from(new Set(products.map((p) => p.ageLabel))).sort(),
    []
  );

  const categoryCounts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const p of products) m[p.category] = (m[p.category] ?? 0) + 1;
    return m;
  }, []);
  const brandCounts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const p of products) m[p.brand] = (m[p.brand] ?? 0) + 1;
    return m;
  }, []);

  const filtered = useMemo(() => {
    const list = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category))
        return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand))
        return false;
      if (selectedGenders.length && !selectedGenders.includes(p.gender))
        return false;
      if (selectedAges.length && !selectedAges.includes(p.ageLabel))
        return false;
      if (p.price > priceCeiling) return false;
      return true;
    });

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  }, [
    selectedCategories,
    selectedBrands,
    selectedGenders,
    selectedAges,
    priceCeiling,
    sort,
  ]);

  const filterKey = `${selectedCategories.join(",")}|${selectedBrands.join(",")}|${selectedGenders.join(",")}|${selectedAges.join(",")}|${priceCeiling}|${sort}`;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filterKey]);

  useEffect(() => {
    if (!mobileFiltersOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileFiltersOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileFiltersOpen]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedGenders([]);
    setSelectedAges([]);
    setPriceCeiling(priceBounds.max);
  };

  const filterProps: FilterPanelProps = {
    categories,
    brands,
    genders,
    ages,
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    selectedGenders,
    setSelectedGenders,
    selectedAges,
    setSelectedAges,
    priceCeiling,
    setPriceCeiling,
    priceBounds,
    categoryCounts,
    brandCounts,
    onClear: clearFilters,
  };

  return (
    <div className="space-y-8">
      <section
        className="overflow-hidden rounded-3xl border border-mint-100/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_25px_50px_-25px_rgba(15,23,42,0.85)] md:p-8"
        aria-labelledby="catalog-intro"
      >
        <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-mint-100">
          Em alta agora
        </p>
        <h1
          id="catalog-intro"
          className="mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl"
        >
          Transforme tempo de tela em momentos mágicos de brincadeira
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
          Brinquedos de alta procura, selecionados para pais modernos. Estoque
          limitado nos campeões de venda, confirmação rápida e checkout Pix seguro.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
            >
              {badge}
            </span>
          ))}
        </div>
        <a
          href="#catalog-grid"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "mt-6 inline-flex min-h-12 px-8 text-base font-extrabold"
          )}
        >
          Comprar mais vendidos
        </a>
        <details className="group mt-4 max-w-2xl rounded-2xl border border-slate-200/80 bg-white/70 p-4 backdrop-blur-sm">
          <summary className="cursor-pointer list-none font-semibold text-slate-800 transition marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              Ler mais sobre a loja
              <span
                className="text-primary transition group-open:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            A Toy Pix reúne curadoria infantil com foco em segurança e diversão.
            Trabalhamos com marcas parceiras e descrições claras para você
            escolher com confiança. Dúvidas? Use o FAQ na página principal ou
            fale conosco após o pedido.
          </p>
        </details>
      </section>

      <section className="grid gap-3 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-mint-50/50 p-4 shadow-sm md:grid-cols-3 md:p-6">
        {socialCounters.map((counter) => (
          <article key={counter.label} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
            <p className="font-display text-2xl font-bold text-slate-900">{counter.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {counter.label}
            </p>
          </article>
        ))}
      </section>

      <section
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white"
        aria-label="Destaque da coleção"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
        <div className="relative grid gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-mint-100">
              Coleção em destaque
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold md:text-3xl">
              Diversão garantida para cada fase
            </h2>
            <p className="mt-2 max-w-md text-sm text-slate-200 md:text-base">
              Kits espaciais, pistas neon e arte criativa — tudo com checkout Pix
              simples para compra direta do produto.
            </p>
            <Link
              href="/#oferta"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "mt-6 inline-flex"
              )}
            >
              Ver oferta principal
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {spotlights.map((s) => (
              <button
                key={s.category}
                type="button"
                onClick={() => {
                  setSelectedCategories([s.category]);
                  setMobileFiltersOpen(false);
                  document
                    .getElementById("catalog-grid")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "flex min-h-[100px] flex-col justify-end rounded-2xl bg-gradient-to-br p-4 text-left text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
                  s.gradient
                )}
              >
                <span className="leading-tight">{s.title}</span>
                <span className="mt-1 text-xs font-normal text-white/90">
                  {s.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="trust-proof-heading">
        <div className="flex items-end justify-between gap-2">
          <h2
            id="trust-proof-heading"
            className="font-display text-2xl font-bold text-slate-900 md:text-3xl"
          >
            Amado pelos pais, aprovado pelas crianças
          </h2>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Avaliações reais
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.author}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-slate-700">“{t.text}”</p>
              <p className="mt-3 text-sm font-bold text-slate-900">{t.author}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="hidden shrink-0 lg:block lg:w-72">
          <FilterPanel {...filterProps} className="sticky top-20" />
        </div>

        <div className="min-w-0 flex-1 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full min-h-11 sm:hidden"
              )}
              onClick={() => setMobileFiltersOpen(true)}
            >
              Filtros
            </button>
            <p className="text-sm text-slate-600">
              Exibindo{" "}
              <span className="font-bold tabular-nums text-slate-900">
                {visible.length}
              </span>{" "}
              de{" "}
              <span className="font-bold tabular-nums text-slate-900">
                {filtered.length}
              </span>{" "}
              produtos
            </p>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <span className="shrink-0 font-semibold">Ordenar</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="min-h-11 w-full min-w-[200px] rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:w-auto"
              >
                <option value="relevance">Relevância</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="name">Nome (A–Z)</option>
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center">
              <p className="font-semibold text-slate-800">
                Nenhum produto com esses filtros.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "mt-4 inline-flex"
                )}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <>
              <div
                id="catalog-grid"
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {visible.map((p) => (
                  <CatalogProductCard key={p.id} product={p} />
                ))}
              </div>
              {hasMore ? (
                <div className="flex flex-col items-center gap-3 pt-2">
                  <div
                    className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-slate-100"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={filtered.length}
                    aria-valuenow={visible.length}
                    aria-label="Progresso da listagem"
                  >
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{
                        width: `${Math.min(100, (visible.length / filtered.length) * 100)}%`,
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((c) =>
                        Math.min(c + PAGE_SIZE, filtered.length)
                      )
                    }
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "min-h-11 px-8"
                    )}
                  >
                    Mostrar mais
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileFiltersOpen ? (
          <>
            <motion.button
              type="button"
              tabIndex={-1}
              aria-label="Fechar filtros"
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.aside
              id="mobile-filters-sheet"
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl border border-slate-200 bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-float lg:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              role="dialog"
              aria-modal="true"
              aria-label="Filtros de produtos"
            >
              <div
                className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200"
                aria-hidden
              />
              <FilterPanel {...filterProps} className="border-0 shadow-none" />
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "mt-4 w-full"
                )}
              >
                Ver resultados
              </button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
