import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-['Space_Grotesk'] text-slate-100 antialiased">
      <div className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_85%_15%,_rgba(244,114,24,0.14),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_24%),linear-gradient(160deg,_#020617_0%,_#0f172a_42%,_#1c1917_72%,_#020617_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,_rgba(249,115,22,0.18),_transparent_58%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(180deg,transparent_0%,rgba(120,53,15,0.22)_55%,rgba(68,26,3,0.42)_100%)]" />
        <Outlet />
      </div>
    </div>
  );
}
