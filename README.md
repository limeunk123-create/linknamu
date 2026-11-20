# 링크나무 🌳

내 링크를 한 페이지에 모아 보여 주고, 링크별 클릭 수를 세는 페이지예요.

## 처음 실행하는 방법

컴퓨터에 [Node.js](https://nodejs.org) (20 이상)가 설치되어 있어야 해요.

1. 터미널을 열고 이 폴더로 이동해요.
   ```bash
   cd ~/Desktop/linknamu
   ```
2. 필요한 패키지를 설치해요.
   ```bash
   npm install
   ```
3. `.env.example` 파일을 복사해서 `.env.local` 을 만들고, MongoDB Atlas 접속 주소를 넣어요.
   ```bash
   cp .env.example .env.local
   ```
   (MongoDB를 아직 안 만들었으면 이 단계는 건너뛰어도 돼요. 페이지는 뜨고, 클릭 수만 저장되지 않아요.)
4. 개발 서버를 켜요.
   ```bash
   npm run dev
   ```
5. 브라우저에서 http://localhost:3000 을 열어요.

## 내용 바꾸기

이름, 소개, 태그, 링크는 모두 `src/data/profile.ts` 한 파일에서 바꿔요.
프로필 사진을 쓰려면 사진을 `public/profile.jpg` 로 넣고 `photo: "/profile.jpg"` 로 적어요.

## MongoDB Atlas 준비

1. https://www.mongodb.com/atlas 에서 무료(M0) 클러스터를 만들어요.
2. Database Access에서 사용자(아이디/비밀번호)를 만들어요.
3. Network Access에서 `0.0.0.0/0` (어디서나 접속)을 허용해요. Vercel에서 접속하려면 필요해요.
4. Connect → Drivers에서 접속 주소를 복사해 `.env.local` 의 `MONGODB_URI` 에 넣어요.

## Vercel 배포

1. 이 폴더를 GitHub 저장소에 올려요. (`.env.local` 은 자동으로 빠져요.)
2. https://vercel.com 에서 그 저장소를 Import 해요.
3. Settings → Environment Variables에 `MONGODB_URI`, `MONGODB_DB` 를 넣고 배포해요.
