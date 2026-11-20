// 페이지에 보이는 프로필과 링크는 이 파일 하나만 고치면 됩니다.

export type LinkItem = {
  /** 클릭 수를 저장할 때 쓰는 고유 ID (영문·숫자·하이픈). 한 번 정하면 바꾸지 마세요. */
  id: string;
  title: string;
  description?: string;
  url: string;
  icon: "cafe" | "mail" | "phone" | "link";
  /** 강조할 링크는 true (남색 배경) */
  featured?: boolean;
};

export type Profile = {
  name: string;
  /** 이름 옆에 작게 붙는 직함 (예: "대표"). 필요 없으면 빈 문자열 */
  title?: string;
  role: string;
  bio: string;
  /** public 폴더 안의 사진 경로 (예: "/profile.jpg"). 없으면 아바타 글자가 대신 보입니다. */
  photo?: string;
  avatarText: string;
  tags: string[];
};

export const profile: Profile = {
  name: "임은경",
  title: "대표",
  role: "안행119",
  bio: "소방취업센터 - 채용정보 · 인재매칭\n이력서 / 면접 코칭 · 헤드헌팅",
  photo: "/logo.png",
  avatarText: "안행119",
  tags: ["소방취업센터", "소방민원행정센터", "화재피해지원센터"],
};

export const links: LinkItem[] = [
  {
    id: "naver-cafe",
    title: "네이버 카페 · safetylink",
    description: "채용정보와 소식을 가장 먼저 확인하세요",
    url: "https://cafe.naver.com/safetylink",
    icon: "cafe",
    featured: true,
  },
  {
    id: "homepage",
    title: "안행119 홈페이지",
    description: "anhaeng119.com",
    url: "https://anhaeng119.com/",
    icon: "link",
  },
  {
    id: "email",
    title: "이메일 문의",
    description: "limeunk123@gmail.com",
    url: "mailto:limeunk123@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    title: "전화 상담",
    description: "010-9001-6742",
    url: "tel:01090016742",
    icon: "phone",
  },
];
