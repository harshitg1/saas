import AdminLogoutButton from "./logout-button";

export default function AdminLogoutPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16">
      <div className="mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-extrabold text-slate-950">Logout</h1>
        <p className="mt-2 text-sm text-slate-600">
          End your admin session on this device.
        </p>
        <AdminLogoutButton />
      </div>
    </main>
  );
}
