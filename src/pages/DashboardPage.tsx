import { HeaderBar } from "../components/HeaderBar";
import { AirCapsuleCard } from "../components/capsules/AirCapsuleCard";
import { SoilCapsuleCard } from "../components/capsules/SoilCapsuleCard";
import { WaterCapsuleCard } from "../components/capsules/WaterCapsuleCard";
import { useLifeSupportData } from "../hooks/useLifeSupportData";

export function DashboardPage() {
  const { data, errorMessage, isUsingMockData } = useLifeSupportData();

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <HeaderBar
        systemStatus={data.systemStatus ?? "ONLINE"}
        isUsingMockData={isUsingMockData}
      />

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/35 px-4 py-3 text-sm text-slate-300 backdrop-blur-md">
        {errorMessage ?? "Kapsul verileri senkronize edildi."}
      </div>

      <section className="mt-8 grid flex-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <AirCapsuleCard
          temperature={data.air.temperature}
          humidity={data.air.humidity}
        />
        <WaterCapsuleCard level={data.water.level} />
        <SoilCapsuleCard moisture={data.soil.moisture} />
      </section>
    </main>
  );
}
