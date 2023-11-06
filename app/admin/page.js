import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="container">
      <h1>Admin</h1>
      <section className="grid">
        <article>
          <Link href="/admin/menu">Manage Menu 📝</Link>
        </article>
        <article>
          <Link href="/admin/">Manage Tables 🪑</Link>
        </article>
        <article>
          <Link href="/admin/">Manage Shop 🏪</Link>
        </article>
      </section>
    </main>
  );
}
