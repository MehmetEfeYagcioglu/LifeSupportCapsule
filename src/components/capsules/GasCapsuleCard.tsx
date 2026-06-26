import { CapsuleCard } from "./CapsuleCard";

type GasCapsuleCardProps = {
  value: number;
  percentage?: number;
};

function GasIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-cyan-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 15a5 5 0 1 1 10 0" />
      <path d="M12 10V5" />
      <path d="M10 5h4" />
      <path d="M6 17h12" />
    </svg>
  );
}

export function GasCapsuleCard({ value, percentage }: GasCapsuleCardProps) {
  const hasValue = Number.isFinite(value);
  const displayValue = hasValue ? Math.max(0, value) : "-";
  const hasPercentage = Number.isFinite(percentage);
  const gaugeValue = hasPercentage
    ? Math.max(0, Math.min(100, percentage ?? 0))
    : 0;
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (gaugeValue / 100) * circumference;

  return (
    <CapsuleCard
      accentClassName="bg-cyan-400/25"
      icon={<GasIcon />}
      subtitle="Gaz Sensörü"
      title="GAZ"
      footerLabel="Gaz Durumu: Izleniyor"
    >
      <div className="space-y-10">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">
              Gaz Değeri
            </p>
            <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
              {displayValue}
              {hasValue ? (
                <span className="ml-2 text-2xl font-medium text-cyan-200/85">
                  birim
                </span>
              ) : null}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pt-2">
          <div className="relative overflow-hidden rounded-full">
            <svg className="h-48 w-48 -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-white/8"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-cyan-300"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-semibold text-cyan-100">
                {hasPercentage ? `${Math.round(gaugeValue)}%` : "-"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
