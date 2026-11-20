import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts, incrementClick } from "@/lib/clicks";

const validIds = new Set(links.map((l) => l.id));

// POST /api/click  { "linkId": "naver-cafe" }  → 클릭 수 1 증가
export async function POST(request: Request) {
  let linkId: unknown;
  try {
    const body = await request.json();
    linkId = body?.linkId;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다" }, { status: 400 });
  }

  // 등록된 링크만 집계해서, 아무 값이나 DB에 쌓이지 않게 합니다.
  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다" }, { status: 400 });
  }

  try {
    const count = await incrementClick(linkId);
    return NextResponse.json({ linkId, count });
  } catch (err) {
    console.error("[api/click] 저장 실패", err);
    return NextResponse.json({ error: "저장에 실패했습니다" }, { status: 500 });
  }
}

// GET /api/click  → 전체 클릭 수 조회
export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts);
}
