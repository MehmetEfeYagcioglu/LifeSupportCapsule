import { CapsuleCard } from "./CapsuleCard";

type WaterCapsuleCardProps = {
  level: number;
};

function WaterIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-blue-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3c4 4.5 6 7.4 6 10.2A6 6 0 1 1 6 13.2C6 10.4 8 7.5 12 3Z" />
      <path d="M9 15.5c.8 1.2 1.8 1.7 3 1.7s2.2-.5 3-1.7" />
    </svg>
  );
}

export function WaterCapsuleCard({ level }: WaterCapsuleCardProps) {
  const safeLevel = Math.max(0, Math.min(100, level));

  return (
    <CapsuleCard
      accentClassName="bg-blue-500/25"
      icon={<WaterIcon />}
      subtitle="Su Kapsulu"
      title="SU"
      footerLabel="Rezerv: Normal"
    >
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div className="mx-auto flex justify-center">
          <div className="relative h-64 w-32 overflow-hidden rounded-[30px] border border-blue-300/25 bg-slate-950/70 shadow-[inset_0_0_40px_rgba(59,130,246,0.12)]">
            <div
              className="absolute inset-x-0 bottom-0 rounded-b-[30px] bg-[linear-gradient(180deg,rgba(96,165,250,0.72),rgba(30,64,175,0.85))]"
              style={{ height: `${safeLevel}%` }}
            >
              <div className="absolute inset-x-0 top-0 h-5 rounded-full bg-blue-200/40 blur-[2px]" />
              <div className="absolute inset-x-2 top-2 h-4 rounded-full border border-blue-100/30" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_25%,transparent_70%,rgba(255,255,255,0.05))]" />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-blue-200/70">
              Su Seviyesi
            </p>
            <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
              {safeLevel}
              <span className="ml-2 text-2xl font-medium text-blue-200/85">
                %
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <p className="text-sm text-slate-300">
              Depo doluluk orani stabil seviyede.
            </p>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
