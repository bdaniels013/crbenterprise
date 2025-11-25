export default function Schedule() {
  return (
    <div className="min-h-screen">
      <main className="container-wide mx-auto px-6 py-12">
        <h1 className="font-display text-2xl mb-2">Schedule Your Call</h1>
        <p className="mb-6">Your payment was confirmed. Choose a time below.</p>
        <div className="rounded-xl border border-crbGreen/20 bg-white p-6">
          <p className="text-sm">Embed your scheduling link here.</p>
        </div>
        <div className="mt-6">
          <a className="text-sm underline" href="/">Return to landing page</a>
        </div>
      </main>
    </div>
  );
}
