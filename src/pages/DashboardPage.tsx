import { HeaderBar } from "../components/HeaderBar";
import { GasCapsuleCard } from "../components/capsules/GasCapsuleCard";
import { HumidityCapsuleCard } from "../components/capsules/HumidityCapsuleCard";
import { LightCapsuleCard } from "../components/capsules/LightCapsuleCard";
import { RainCapsuleCard } from "../components/capsules/RainCapsuleCard";
import { SoilCapsuleCard } from "../components/capsules/SoilCapsuleCard";
import { TemperatureCapsuleCard } from "../components/capsules/TemperatureCapsuleCard";
import { useLifeSupportData } from "../hooks/useLifeSupportData";

export function DashboardPage() {
  const { data, isUsingMockData, isLoading } = useLifeSupportData();
  const systemStatus = data?.systemStatus ?? "ONLINE";

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <HeaderBar
        systemStatus={systemStatus}
        isUsingMockData={isUsingMockData}
      />

      {data ? (
        <section className="mt-8 grid flex-1 auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">
          <GasCapsuleCard
            value={data.gas.value}
            percentage={data.gas.percentage}
          />
          <SoilCapsuleCard moisture={data.soil.moisture} />
          <TemperatureCapsuleCard value={data.temperature.value} />
          <HumidityCapsuleCard value={data.humidity.value} />
          <RainCapsuleCard level={data.rain.level} />
          <LightCapsuleCard level={data.light.level} />
        </section>
      ) : (
        <section className="mt-8 grid flex-1 auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-full min-h-[360px] rounded-[30px] border border-white/10 bg-slate-900/30 backdrop-blur-xl"
            />
          ))}
        </section>
      )}
    </main>
  );
}
