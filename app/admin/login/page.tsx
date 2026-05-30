import AdminLoginForm from "./login-form";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16 text-white">
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
        <div className="w-full rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
              Admin CRM
            </p>
            <h1 className="mt-2 text-2xl font-extrabold">Login</h1>
            <p className="mt-2 text-sm text-slate-600">
              Access lead submissions and follow-up activity.
            </p>
          </div>
          <AdminLoginForm />
        </div>
      </div>
    </main>
  );
}
