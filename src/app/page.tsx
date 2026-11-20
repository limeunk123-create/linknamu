import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";
import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";

// 클릭 수가 항상 최신으로 보이도록 요청마다 새로 그립니다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-12 sm:pt-16">
      <Profile profile={profile} />

      <section className="mt-8">
        <LinkList links={links} counts={counts} />
      </section>

      <footer className="mt-auto pt-12 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {profile.name} · 안행<span className="text-brand-red">119</span>
      </footer>
    </main>
  );
}
