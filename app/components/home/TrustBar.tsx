export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-200">

      <div className="container py-10">

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

          <div className="text-center">

            <h3
              className="text-5xl text-slate-900"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              100+
            </h3>

            <p className="mt-3 uppercase tracking-[0.2em] text-sm text-slate-500">
              Legal Matters
            </p>

          </div>

          <div className="text-center">

            <h3
              className="text-5xl text-slate-900"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              50+
            </h3>

            <p className="mt-3 uppercase tracking-[0.2em] text-sm text-slate-500">
              Corporate Clients
            </p>

          </div>

          <div className="text-center">

            <h3
              className="text-5xl text-slate-900"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              24/7
            </h3>

            <p className="mt-3 uppercase tracking-[0.2em] text-sm text-slate-500">
              Legal Support
            </p>

          </div>

          <div className="text-center">

            <h3
              className="text-5xl text-orange-500"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              MLF
            </h3>

            <p className="mt-3 uppercase tracking-[0.2em] text-sm text-slate-500">
              Integrity • Excellence
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}