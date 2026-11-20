import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

export default function LinkList({
  links,
  counts,
}: {
  links: LinkItem[];
  counts: Record<string, number>;
}) {
  return (
    <nav aria-label="링크 목록" className="flex flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} initialCount={counts[link.id]} />
      ))}
    </nav>
  );
}
