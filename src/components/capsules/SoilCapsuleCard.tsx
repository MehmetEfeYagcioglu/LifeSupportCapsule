import { CapsuleCard } from "./CapsuleCard";

type SoilCapsuleCardProps = {
  moisture: number;
};

function SoilIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-emerald-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 20v-6" />
      <path d="M9 20h6" />
      <path d="M8.5 13.5c0-2.7 1.5-4.5 3.5-5.5 2 1 3.5 2.8 3.5 5.5" />
      <path d="M6.5 10.5c1.7.1 2.9.8 3.8 2.2" />
      <path d="M17.5 10.5c-1.7.1-2.9.8-3.8 2.2" />
    </svg>
  );
}

export function SoilCapsuleCard({ moisture }: SoilCapsuleCardProps) {
  const hasValue = Number.isFinite(moisture);
  const displayMoisture = hasValue ? moisture : "-";

  return (
    <CapsuleCard
      accentClassName="bg-emerald-400/20"
      icon={<SoilIcon />}
      subtitle="Toprak Nem Sensörü"
      title="TOPRAK"
      footerLabel="Biyom: Verimli"
    >
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-200/70">
            Toprak Nemi
          </p>
          <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
            {displayMoisture}
            {hasValue ? (
              <span className="text-2xl font-medium text-emerald-200/85">%</span>
            ) : null}
          </p>
        </div>

        <div className="rounded-[28px] border border-emerald-300/15 bg-slate-950/55 p-6">
          <div className="flex items-center justify-center">
            <div className="flex h-40 w-[220px] items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-400/5">
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 p-4 shadow-[0_0_20px_rgba(52,211,153,0.18)]">
                <SoilIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
