import { CapsuleCard } from "./CapsuleCard";

type LightCapsuleCardProps = {
  level: number;
};

function LightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-amber-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2.5" />
      <path d="M12 18.5V21" />
      <path d="M3 12h2.5" />
      <path d="M18.5 12H21" />
      <path d="M5.6 5.6l1.8 1.8" />
      <path d="M16.6 16.6l1.8 1.8" />
      <path d="M18.4 5.6l-1.8 1.8" />
      <path d="M7.4 16.6l-1.8 1.8" />
    </svg>
  );
}

export function LightCapsuleCard({ level }: LightCapsuleCardProps) {
  const hasValue = Number.isFinite(level);
  const displayLevel = hasValue ? level : "-";
  const visualLevel = hasValue ? Math.max(0, Math.min(100, level)) : 0;

  return (
    <CapsuleCard
      accentClassName="bg-amber-400/20"
      icon={<LightIcon />}
      subtitle="LDR Isik Sensoru"
      title="ISIK"
      footerLabel="Isik Durumu: Izleniyor"
    >
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-amber-200/70">
            Isik Seviyesi
          </p>
          <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
            {displayLevel}
            {hasValue ? (
              <span className="ml-2 text-2xl font-medium text-amber-200/85">
                %
              </span>
            ) : null}
          </p>
        </div>

        <div className="rounded-[28px] border border-amber-300/15 bg-slate-950/55 p-6">
          <div className="space-y-4">
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(253,224,71,0.95),rgba(245,158,11,0.9))]"
                style={{ width: `${visualLevel}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
              <span>Karanlik</span>
              <span>Aydinlik</span>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
