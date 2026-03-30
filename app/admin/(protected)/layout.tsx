import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-dark-50">
      <header className="border-b border-dark-200 bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              V
            </div>
            <span className="text-lg font-semibold text-dark-900">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-dark-500">{session.user?.email}</span>
            <form action="/api/auth/signout" method="POST">
              <button
                type="submit"
                className="rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:bg-dark-100"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="hidden w-64 border-r border-dark-200 bg-white lg:block">
          <nav className="space-y-1 p-4">
            {[
              { label: "Dashboard", href: "/admin" },
              { label: "Leads / Queries", href: "/admin/leads" },
              { label: "Content", href: "/admin/content" },
              { label: "Team", href: "/admin/team" },
              { label: "Settings", href: "/admin/settings" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-dark-700 hover:bg-primary-50 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
