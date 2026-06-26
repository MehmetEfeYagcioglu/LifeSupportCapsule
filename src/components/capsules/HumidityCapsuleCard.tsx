import { CapsuleCard } from "./CapsuleCard";

type HumidityCapsuleCardProps = {
  value: number;
};

function HumidityIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-teal-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3c4 4.5 6 7.4 6 10.2A6 6 0 1 1 6 13.2C6 10.4 8 7.5 12 3Z" />
      <path d="M9.5 15.5c.7.9 1.5 1.3 2.5 1.3s1.8-.4 2.5-1.3" />
    </svg>
  );
}

export function HumidityCapsuleCard({ value }: HumidityCapsuleCardProps) {
  const hasValue = Number.isFinite(value);
  const displayValue = hasValue ? value : "-";
  const visualValue = hasValue ? Math.max(0, Math.min(100, value)) : 0;

  return (
    <CapsuleCard
      accentClassName="bg-teal-400/20"
      icon={<HumidityIcon />}
      subtitle="Nem Sensörü"
      title="NEM"
      footerLabel="Nem Durumu: Izleniyor"
    >
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-teal-200/70">
            Hava Nemi
          </p>
          <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
            {displayValue}
            {hasValue ? (
              <span className="ml-2 text-2xl font-medium text-teal-200/85">
                %
              </span>
            ) : null}
          </p>
        </div>

        <div className="rounded-[28px] border border-teal-300/15 bg-slate-950/55 p-6">
          <div className="space-y-4">
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(153,246,228,0.95),rgba(20,184,166,0.9))]"
                style={{ width: `${visualValue}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
              <span>Kuru Hava</span>
              <span>Nemli Hava</span>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
