import { CapsuleCard } from "./CapsuleCard";

type TemperatureCapsuleCardProps = {
  value: number;
};

function TemperatureIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-orange-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 14V5a2 2 0 1 0-4 0v9a4 4 0 1 0 4 0Z" />
      <path d="M10 9h2" />
    </svg>
  );
}

export function TemperatureCapsuleCard({
  value,
}: TemperatureCapsuleCardProps) {
  const hasValue = Number.isFinite(value);
  const displayValue = hasValue ? value : "-";
  const visualValue = hasValue ? Math.max(-50, Math.min(100, value)) : -20;
  const barHeight = Math.max(
    12,
    Math.min(100, ((visualValue + 20) / 80) * 100),
  );

  return (
    <CapsuleCard
      accentClassName="bg-orange-400/20"
      icon={<TemperatureIcon />}
      subtitle="Sicaklik Sensoru"
      title="SICAKLIK"
      footerLabel="Isi Durumu: Dengeli"
    >
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div className="mx-auto flex justify-center">
          <div className="relative h-64 w-20 rounded-full border border-orange-300/25 bg-slate-950/70 p-3 shadow-[inset_0_0_40px_rgba(249,115,22,0.12)]">
            <div className="absolute bottom-3 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.45)]" />
            <div className="absolute inset-x-1/2 bottom-8 w-4 -translate-x-1/2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="absolute bottom-0 left-0 right-0 rounded-full bg-[linear-gradient(180deg,rgba(253,186,116,0.95),rgba(234,88,12,0.9))]"
                style={{ height: `${barHeight}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-orange-200/70">
              Sicaklik
            </p>
            <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
              {displayValue}
              {hasValue ? (
                <span className="ml-2 text-2xl font-medium text-orange-200/85">
                  °C
                </span>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
