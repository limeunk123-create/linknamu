# 링크나무 (link in bio 서비스)

## 프로젝트 개요
Linktree처럼 내 모든 링크를 한 페이지에 모아 두고, 링크별 클릭 수를 집계하는 서비스.

## 기술 스택
- Next.js 16 (App Router)
- Tailwind CSS (v4)
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 주요 기능
- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 링크 클릭 수 집계

## 코드 규칙
- TypeScript 사용
- 컴포넌트는 `src/components/` 아래에 작성
- 환경 변수는 `.env.local`에 저장 (절대 커밋하지 않음)
- 모바일 우선 반응형 디자인 (기본 스타일은 모바일, `sm:` 이상에서 확장)

## 폴더 구조
- `src/app/page.tsx` — 메인 페이지 (서버 컴포넌트, 클릭 수 조회)
- `src/app/api/click/route.ts` — 클릭 집계 API (POST: +1, GET: 전체 조회)
- `src/components/` — Profile, LinkList, LinkCard, LinkIcon
- `src/data/profile.ts` — 프로필·링크 내용 (내용 수정은 여기서만)
- `src/lib/mongodb.ts` — MongoDB 연결 (전역 캐시)
- `src/lib/clicks.ts` — 클릭 수 증가/조회

## 디자인
- 명함 색상: 남색 `#0B3B8F`, 빨간색 `#E1141E` (Tailwind: `navy`, `navy-dark`, `brand-red`)
- 폰트: Pretendard (jsDelivr CDN)

## 참고
- MONGODB_URI가 없으면 클릭 수 없이 페이지만 보여야 한다 (DB 오류로 페이지가 깨지면 안 됨).
- 링크 `id`는 클릭 수 저장 키이므로 한 번 정하면 바꾸지 않는다.
