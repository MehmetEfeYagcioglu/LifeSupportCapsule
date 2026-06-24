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
      <path d="M12 21V11" />
      <path d="M12 11c0-3.8 2.3-6.3 6.5-7-1 4.6-3.3 7-6.5 7Z" />
      <path d="M12 15c0-3.1-1.9-5.1-5.8-5.8.8 3.8 2.8 5.8 5.8 5.8Z" />
    </svg>
  );
}

export function SoilCapsuleCard({ moisture }: SoilCapsuleCardProps) {
  const safeMoisture = Math.max(0, Math.min(100, moisture));

  return (
    <CapsuleCard
      accentClassName="bg-emerald-400/20"
      icon={<SoilIcon />}
      subtitle="Toprak Kapsulu"
      title="TOPRAK"
      footerLabel="Biyom: Verimli"
    >
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-200/70">
            Toprak Nemi
          </p>
          <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
            {safeMoisture}
            <span className="ml-2 text-2xl font-medium text-emerald-200/85">
              %
            </span>
          </p>
        </div>

        <div className="rounded-[28px] border border-emerald-300/15 bg-slate-950/55 p-6">
          <div className="flex items-end gap-5">
            <div className="relative flex h-40 flex-1 items-end gap-3">
              {[0.4, 0.58, 0.82].map((ratio, index) => (
                <div key={index} className="flex flex-1 items-end justify-center">
                  <div
                    className="w-full rounded-t-[18px] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.85),rgba(6,95,70,0.72))] shadow-[0_0_16px_rgba(52,211,153,0.24)]"
                    style={{ height: `${Math.max(24, safeMoisture * ratio)}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex h-40 w-28 flex-col items-center justify-center rounded-[24px] border border-emerald-300/15 bg-emerald-400/5">
              <div className="mb-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 p-3">
                <SoilIcon />
              </div>
              <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                NEM
              </span>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
