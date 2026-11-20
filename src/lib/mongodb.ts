import { MongoClient, type Db } from "mongodb";

// 개발 중 파일이 다시 로드될 때마다 새 연결이 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

/** DB 연결. MONGODB_URI 가 없으면 null 을 돌려줘서, DB 없이도 페이지는 뜨게 합니다. */
export async function getDb(): Promise<Db | null> {
  const clientPromise = getClientPromise();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB || "linknamu");
}
