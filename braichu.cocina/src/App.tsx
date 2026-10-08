import { useState, type SyntheticEvent } from "react";
import {
  BookOpen,
  UtensilsCrossed,
  PackageOpen,
  ChevronRight,
  X,
  MapPin,
} from "lucide-react";

const WHATSAPP_NUMBER = "5493415857565";

type ModalType = "historia" | "precios" | "mayoristas" | null;

interface EmpanadaItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  image: string;
}

const EMPANADAS_MENU: EmpanadaItem[] = [
  {
    id: "1",
    name: "Carne Cortada a Cuchillo",
    description:
      "Carne seleccionada al fuego, verdeo fresco, especias y huevo duro.",
    price: "$1.800",
    badge: "Clásica",
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Pollo al Disco & Verdeo",
    description:
      "Pollo desmenuzado al disco con reducción de puerro y toque ahumado.",
    price: "$1.700",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Jamón & Cuatro Quesos",
    description:
      "Mozzarella fundida, provolone, queso azul suave y jamón seleccionado.",
    price: "$1.750",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Docena Especial Variada",
    description:
      "Caja x12 unidades a elección. Masa casera con repulgue tradicional a mano.",
    price: "$19.500",
    badge: "Promo",
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80",
  },
];

function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({
  className = "w-5 h-5 fill-current",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [logoError, setLogoError] = useState(false);

  const closeModal = (): void => setActiveModal(null);

  const handleImageError = (_e: SyntheticEvent<HTMLImageElement>): void => {
    setLogoError(true);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex justify-center bg-[#0d0c0b] text-stone-100 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-amber-600 selection:text-white">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center brightness-[0.7] contrast-[1.05]"
        style={{ backgroundImage: `url('/fondo.jpg')` }}
      />
      {/* Overlay oscuro y desenfoque suave para contraste óptimo */}
      <div className="fixed inset-0 z-0 bg-black/82 backdrop-blur-[2px] pointer-events-none" />
      {/* Pantalla central tipo Linktree / Landing Mobile */}
      <main className="relative z-10 w-full max-w-[420px] min-h-[100dvh] flex flex-col justify-between px-5 py-10 sm:py-12">
        {/* Cabecera / Identidad */}
        <header className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-b from-amber-500/40 via-stone-700/50 to-stone-900 shadow-2xl mb-4 transition-transform hover:scale-105 duration-300">
            <div className="w-full h-full rounded-full bg-[#181614] overflow-hidden flex items-center justify-center border border-amber-500/20 shadow-inner">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Braichu Cocina"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <span className="text-2xl font-bold tracking-widest text-amber-200/90 font-serif">
                  BC
                </span>
              )}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Playfair_Display',serif] drop-shadow-md">
            braichu.cocina
          </h1>

          <p className="text-xs sm:text-sm text-amber-400 font-semibold tracking-[0.22em] uppercase mt-1.5">
            Braichu & Nicki
          </p>

          <p className="text-sm sm:text-base text-stone-200/90 mt-3 font-normal max-w-[320px] leading-relaxed">
            Empanadas caseras de autor, masa propia y horneado artesanal al
            momento.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium mt-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Rosario · Funes</span>
          </div>
        </header>

        {/* Botones Principales */}
        <section className="w-full flex flex-col gap-3.5 my-8">
          {/* Botón 1: Historia */}
          <button
            type="button"
            onClick={() => setActiveModal("historia")}
            className="w-full p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-amber-500/30 backdrop-blur-md transition-all duration-150 flex items-center justify-between text-left cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/10 text-stone-300 flex items-center justify-center group-hover:text-amber-400 group-hover:scale-105 transition-all">
                <BookOpen className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white tracking-wide">
                  Nuestra Historia
                </h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  El origen de nuestra cocina familiar
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-stone-300 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Botón 2: Menú */}
          <button
            type="button"
            onClick={() => setActiveModal("precios")}
            className="w-full p-4 rounded-2xl bg-amber-500/[0.08] hover:bg-amber-500/[0.14] border border-amber-500/35 hover:border-amber-500/60 backdrop-blur-md transition-all duration-150 flex items-center justify-between text-left cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30 group-hover:scale-105 transition-all">
                <UtensilsCrossed className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-white tracking-wide">
                    Carta & Pedidos
                  </h2>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/30">
                    Abierto
                  </span>
                </div>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  Variedades clásicas, especiales y promos
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-amber-400/80 group-hover:text-amber-200 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Botón 3: Mayoristas */}
          <button
            type="button"
            onClick={() => setActiveModal("mayoristas")}
            className="w-full p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-amber-500/30 backdrop-blur-md transition-all duration-150 flex items-center justify-between text-left cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/10 text-stone-300 flex items-center justify-center group-hover:text-amber-400 group-hover:scale-105 transition-all">
                <PackageOpen className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white tracking-wide">
                  Canal Mayorista
                </h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Para comercios, eventos y reventa
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-stone-300 group-hover:translate-x-0.5 transition-all" />
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center pt-2">
          <p className="text-xs text-stone-400 font-normal tracking-wide">
            Cocina artesanal · Rosario y Funes
          </p>
        </footer>
      </main>

      {/* Modales Responsive (Bottom Sheet en mobile / Pop-up centrado en tablet o escritorio) */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-150"
          onClick={closeModal}
        >
          <div
            className="bg-[#161514] border border-white/10 w-full sm:max-w-[440px] rounded-t-[28px] sm:rounded-2xl p-5 sm:p-6 relative shadow-2xl max-h-[85dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra táctil mobile */}
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-3 shrink-0 sm:hidden" />

            {/* Botón cerrar */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1.5 rounded-full bg-white/5 transition z-10 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ================= MODAL HISTORIA ================= */}
            {activeModal === "historia" && (
              <>
                <div className="shrink-0 pr-8 mb-3">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">
                    Nosotros
                  </p>
                  <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif] mt-0.5">
                    Historia de Braichu
                  </h3>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-3">
                  <div className="w-full h-44 rounded-xl overflow-hidden border border-white/10 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=700&q=80"
                      alt="Cocina y empanadas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 text-sm text-stone-300 leading-relaxed font-normal">
                    <p>
                      Somos{" "}
                      <strong className="font-semibold text-white">
                        Braichu & Nicki
                      </strong>
                      . Nuestro proyecto comenzó como una pasión familiar por
                      rescatar el sabor de la empanada casera tradicional: masa
                      estirada a mano, rellenos abundantes y horneado justo.
                    </p>
                    <p>
                      Cuidamos cada ingrediente para garantizar que cada pedido
                      que llegue a tu mesa en Rosario o Funes tenga la misma
                      calidad y calidez con la que cocinamos para nuestra propia
                      familia.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pt-3 mt-2 border-t border-white/5">
                  <a
                    href={createWhatsAppLink(
                      "¡Hola Braichu & Nicki! Leí su historia y me gustaría hacerles una consulta.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-semibold py-3.5 px-4 rounded-xl text-sm tracking-wide transition shadow-lg shadow-emerald-500/10 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                </div>
              </>
            )}

            {/* ================= MODAL PRECIOS ================= */}
            {activeModal === "precios" && (
              <>
                <div className="shrink-0 pr-8 mb-2">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">
                    Menú
                  </p>
                  <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif] mt-0.5">
                    Carta & Sabores
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Elaboradas en el día. Hacé tu pedido directo a cocina:
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-2.5 my-2">
                  {EMPANADAS_MENU.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white/[0.03] rounded-xl border border-white/5 flex gap-3.5 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-white truncate">
                            {item.name}
                          </h4>
                          <span className="text-sm font-bold text-amber-400 shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 mt-0.5 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="shrink-0 pt-3 border-t border-white/5">
                  <a
                    href={createWhatsAppLink(
                      "¡Hola Braichu! Me gustaría hacer un pedido de empanadas.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-semibold py-3.5 px-4 rounded-xl text-sm tracking-wide transition shadow-lg shadow-emerald-500/10 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Hacer pedido por WhatsApp</span>
                  </a>
                </div>
              </>
            )}

            {/* ================= MODAL MAYORISTAS ================= */}
            {activeModal === "mayoristas" && (
              <>
                <div className="shrink-0 pr-8 mb-3">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">
                    Comercial
                  </p>
                  <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif] mt-0.5">
                    Precios Mayoristas
                  </h3>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-3">
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-stone-300 leading-relaxed font-normal">
                    Servicio pensado para{" "}
                    <strong className="font-semibold text-white">
                      rotiserías, locales gastronómicos, bares, revendedores y
                      organizadores de eventos
                    </strong>{" "}
                    que buscan incorporar un producto artesanal con margen
                    comercial atractivo.
                  </div>

                  <div className="space-y-2.5 text-sm text-stone-300">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span>Listas horneadas o congeladas crudas.</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span>Escala con bonificaciones por volumen.</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span>Entregas coordinadas en Rosario y Funes.</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 pt-3 mt-2 border-t border-white/5">
                  <a
                    href={createWhatsAppLink(
                      "¡Hola Braichu! Quisiera recibir la lista de precios mayorista para comercios/eventos.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-semibold py-3.5 px-4 rounded-xl text-sm tracking-wide transition shadow-lg shadow-emerald-500/10 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Solicitar lista mayorista</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
