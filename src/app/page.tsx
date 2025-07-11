import { microCmsClient } from "@/lib/micro-cms";

// NOTE: 型がついていないです。

export default async function Home() {
  // microCmsClientを使ってデータを取得する例
  const words = await microCmsClient.getList({
    endpoint: "words",
    queries: { limit: 100, orders: "-createdAt" },
  });

  // 直接fetchを使っても同じようにデータを取得できます。
  const words2 = await fetch(
    `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/words`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    }
  ).then((res) => res.json());

  return (
    <div>
      {words.contents.map((word) => (
        <div key={word.id} className="inline-flex space-x-4 p-4 border">
          <div>{word.title}</div>
          <div>{word.description}</div>
        </div>
      ))}
    </div>
  );
}
