import type { SystemStatus } from "../types/lifeSupport";

type HeaderBarProps = {
  systemStatus: SystemStatus;
  isUsingMockData: boolean;
};

const statusMap: Record<
  SystemStatus,
  { label: string; dotClassName: string; textClassName: string }
> = {
  ONLINE: {
    label: "AKTIF",
    dotClassName: "bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.85)]",
    textClassName: "text-emerald-300",
  },
  OFFLINE: {
    label: "KAPALI",
    dotClassName: "bg-rose-400 shadow-[0_0_18px_rgba(251,113,133,0.8)]",
    textClassName: "text-rose-300",
  },
  MAINTENANCE: {
    label: "BAKIMDA",
    dotClassName: "bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.75)]",
    textClassName: "text-amber-200",
  },
};

export function HeaderBar({
  systemStatus,
  isUsingMockData,
}: HeaderBarProps) {
  const status = statusMap[systemStatus];

  return (
    <header className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/45 px-5 py-6 shadow-[0_0_45px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/8 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-orange-200">
            Takim Zumruduanka
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-[0.12em] text-white drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] sm:text-3xl xl:text-4xl">
              ZUMRUDUANKA
            </h1>
            <p className="mt-2 text-lg font-medium tracking-[0.18em] text-sky-100">
              EPNI LIFE SUPPORT DASHBOARD
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Gaz, toprak nemi, sicaklik ve yagmur verilerini anlik izleyen
              takim kontrol paneli.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stretch">
          <div className="rounded-2xl border border-emerald-400/20 bg-slate-950/50 px-4 py-4 shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
              Sistem Durumu
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${status.dotClassName}`} />
              <span
                className={`text-sm font-semibold tracking-[0.18em] ${status.textClassName}`}
              >
                {status.label}
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              {isUsingMockData
                ? "Veri Kaynagi: Ornek Veri"
                : "Veri Kaynagi: Firebase"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
