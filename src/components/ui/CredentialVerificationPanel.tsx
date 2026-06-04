import { credentials } from "@/data/portfolio";

function VerificationMark() {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-white text-accent shadow-[0_0_0_1px_rgba(37,99,235,0.08)]"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-3.5 w-3.5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function StatusPill({ status }: { status: string }) {
  return (
    <span className="shrink-0 self-start rounded-full border border-sky-200/90 bg-[#eef4ff] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600 sm:self-center">
      {status}
    </span>
  );
}

export default function CredentialVerificationPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-sky-200/75 bg-[linear-gradient(180deg,#f4f8ff_0%,#eef4fc_100%)] shadow-[0_1px_0_rgba(37,99,235,0.08)]">
      <div className="flex items-center justify-between gap-4 border-b border-sky-200/65 bg-white/80 px-4 py-2.5 sm:px-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-900/80">
          verified records
        </p>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
          3 credentials
        </p>
      </div>

      <ul className="space-y-2 p-2 sm:p-2.5">
        {credentials.map((credential) => (
          <li key={credential.title}>
            <div className="group relative flex flex-col gap-2.5 rounded-lg border border-sky-100/80 bg-white px-3 py-3.5 transition-[border-color,background-color] duration-200 hover:border-sky-200/90 hover:bg-white sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-4 sm:py-3.5">
              <span
                className="absolute bottom-3 left-0 top-3 w-0.5 rounded-full bg-accent/45"
                aria-hidden="true"
              />
              <div className="flex min-w-0 flex-1 items-start gap-3 pl-2.5">
                <VerificationMark />
                <div className="min-w-0">
                  <p className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-navy">
                    {credential.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {credential.focus}
                  </p>
                </div>
              </div>
              <StatusPill status={credential.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
