import { CapsuleCard } from "./CapsuleCard";

type RainCapsuleCardProps = {
  level: number;
};

function RainIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-sky-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 16a4 4 0 1 1 .8-7.9A5.5 5.5 0 0 1 18 10a3.5 3.5 0 0 1-.5 6H7Z" />
      <path d="M9 18l-1 2" />
      <path d="M13 18l-1 2" />
      <path d="M17 18l-1 2" />
    </svg>
  );
}

export function RainCapsuleCard({ level }: RainCapsuleCardProps) {
  const hasValue = Number.isFinite(level);
  const displayLevel = hasValue ? level : "-";
  const visualLevel = hasValue ? Math.max(0, Math.min(100, level)) : 0;

  return (
    <CapsuleCard
      accentClassName="bg-sky-400/20"
      icon={<RainIcon />}
      subtitle="Yağmur Sensörü"
      title="YAĞMUR"
      footerLabel="Yagis Durumu: Izleniyor"
    >
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-sky-200/70">
            Yağmur Seviyesi
          </p>
          <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
            {displayLevel}
            {hasValue ? (
              <span className="ml-2 text-2xl font-medium text-sky-200/85">
                %
              </span>
            ) : null}
          </p>
        </div>

        <div className="rounded-[28px] border border-sky-300/15 bg-slate-950/55 p-6">
          <div className="space-y-4">
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(125,211,252,0.95),rgba(14,165,233,0.9))]"
                style={{ width: `${visualLevel}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
              <span>Kuru</span>
              <span>Yağışlı</span>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
