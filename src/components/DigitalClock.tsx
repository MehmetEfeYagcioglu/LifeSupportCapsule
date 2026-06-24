import { useEffect, useEffectEvent, useState } from "react";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function DigitalClock() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  const syncTime = useEffectEvent(() => {
    setTime(formatTime(new Date()));
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      syncTime();
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [syncTime]);

  return (
    <div className="rounded-2xl border border-sky-400/20 bg-slate-950/50 px-4 py-3 text-right shadow-[0_0_30px_rgba(56,189,248,0.12)] backdrop-blur-md">
      <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
        Sistem Saati
      </p>
      <p className="mt-1 text-lg font-semibold tracking-[0.2em] text-sky-200 sm:text-xl">
        {time}
      </p>
    </div>
  );
}
