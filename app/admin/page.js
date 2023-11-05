import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="container">
      <h1>Admin</h1>
      <section className="grid">
        <article>
          <a href="/admin/menu">Manage Menu 📝</a>
        </article>
        <article>
          <a href="/admin/">Manage Tables 🪑</a>
        </article>
        <article>
          <a href="/admin/">Manage Shop 🏪</a>
        </article>
      </section>
    </main>
  );
}
