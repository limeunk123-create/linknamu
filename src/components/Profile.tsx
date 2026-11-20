import type { Profile as ProfileData } from "@/data/profile";

export default function Profile({ profile }: { profile: ProfileData }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.photo ? (
        // 사진은 public 폴더에 넣고 profile.ts 의 photo 에 경로를 적으면 됩니다.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          className="h-24 w-24 rounded-full object-cover shadow-lg ring-4 ring-white"
        />
      ) : (
        <div
          aria-label={profile.avatarText}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(90deg,var(--color-navy)_50%,var(--color-brand-red)_50%)] text-lg font-extrabold tracking-tight text-white shadow-lg ring-4 ring-white [text-shadow:0_1px_2px_rgba(0,0,0,.25)]"
        >
          {profile.avatarText}
        </div>
      )}

      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
      <p className="mt-1 text-sm font-semibold text-navy">{profile.role}</p>
      <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-slate-500 [word-break:keep-all]">
        {profile.bio}
      </p>

      <ul className="mt-5 flex flex-wrap justify-center gap-2">
        {profile.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-navy/15 bg-navy/5 px-3 py-1 text-xs font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
    </header>
  );
}
