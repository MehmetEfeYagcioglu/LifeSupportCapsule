import { CapsuleCard } from "./CapsuleCard";

type AirCapsuleCardProps = {
  humidity: number;
  temperature: number;
};

function AirIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-cyan-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 9c1.2-2 3-3 5.2-3 3.8 0 4.8 4 8 4 1 0 1.9-.3 2.8-1" />
      <path d="M3 14c1.3-1.8 3-2.7 5-2.7 3.4 0 4.8 3.7 8.1 3.7 1.5 0 2.9-.5 4-1.5" />
      <path d="M6 18c1-.8 2.2-1.2 3.4-1.2 2.4 0 3.7 2.2 6 2.2 1 0 2-.2 2.9-.8" />
    </svg>
  );
}

export function AirCapsuleCard({
  humidity,
  temperature,
}: AirCapsuleCardProps) {
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, humidity));
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <CapsuleCard
      accentClassName="bg-cyan-400/25"
      icon={<AirIcon />}
      subtitle="Hava Kapsulu"
      title="HAVA"
      footerLabel="Atmosfer: Dengeli"
    >
      <div className="grid gap-10 xl:grid-cols-[1.15fr_0.95fr] xl:items-center">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">
              Sicaklik
            </p>
            <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
              {temperature}
              <span className="ml-2 text-2xl font-medium text-cyan-200/85">
                °C
              </span>
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">
              Nem
            </p>
            <p className="mt-3 text-4xl font-semibold text-cyan-100">
              {humidity}%
            </p>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center">
          <div className="relative">
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
                className="stroke-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                Nem Orani
              </span>
              <span className="mt-3 text-3xl font-semibold text-cyan-100">
                {humidity}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </CapsuleCard>
  );
}
