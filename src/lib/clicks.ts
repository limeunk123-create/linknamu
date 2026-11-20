import { getDb } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number; updatedAt: Date };

const COLLECTION = "clicks";

/** 링크 하나의 클릭 수를 1 올립니다. */
export async function incrementClick(linkId: string): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.collection<ClickDoc>(COLLECTION).findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
    { upsert: true, returnDocument: "after" },
  );
  return result?.count ?? null;
}

/** 모든 링크의 클릭 수를 { 링크ID: 횟수 } 형태로 돌려줍니다. DB 오류 시 빈 객체. */
export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const db = await getDb();
    if (!db) return {};
    const docs = await db.collection<ClickDoc>(COLLECTION).find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (err) {
    console.error("[clicks] 클릭 수를 불러오지 못했습니다", err);
    return {};
  }
}
