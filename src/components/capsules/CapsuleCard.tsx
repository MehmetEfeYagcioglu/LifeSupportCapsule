import type { PropsWithChildren, ReactNode } from "react";

type CapsuleCardProps = PropsWithChildren<{
  accentClassName: string;
  icon: ReactNode;
  subtitle: string;
  title: string;
  footerLabel: string;
}>;

export function CapsuleCard({
  accentClassName,
  children,
  icon,
  subtitle,
  title,
  footerLabel,
}: CapsuleCardProps) {
  return (
    <section className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/40 p-7 shadow-[0_18px_50px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:p-8">
      <div
        className={`pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full blur-3xl ${accentClassName}`}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.38em] text-slate-400">
              {subtitle}
            </p>
            <h2 className="text-3xl font-semibold tracking-[0.12em] text-white">
              {title}
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-100">
            {icon}
          </div>
        </div>

        <div className="mt-10 flex-1">{children}</div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-sm tracking-[0.14em] text-slate-300">{footerLabel}</p>
        </div>
      </div>
    </section>
  );
}
