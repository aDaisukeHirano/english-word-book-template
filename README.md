## 概要

MicroCMS の英単語長を取得して表示する実装例です。[microcms-js-sdk](https://github.com/microcmsio/microcms-js-sdk)を使ったものと、fetch API を使ったものを示しています。

## 環境変数

- NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN

  - ドメインです。公開しても大丈夫です。

- MICROCMS_API_KEY
  - API キーです。公開してはいけません。平野に聞いてください。

ルートに.env.local を作成して、.example.env の内容を移してください。

## API スキーマ

```json
{
  "apiFields": [
    {
      "fieldId": "title",
      "name": "英語",
      "kind": "text",
      "required": true,
      "patternMatchValidation": {
        "regexp": { "pattern": "[\\w-\\s]+", "flags": null }
      },
      "isUnique": false
    },
    {
      "fieldId": "description",
      "name": "日本語",
      "kind": "text",
      "required": true,
      "isUnique": false
    },
    {
      "fieldId": "author",
      "name": "作成者",
      "kind": "text",
      "required": true,
      "isUnique": false
    },
    { "fieldId": "imageUrl", "name": "画像", "kind": "media" },
    { "fieldId": "referenceUrl", "name": "参照URL", "kind": "text" }
  ],
  "customFields": []
}
```

画像について、7/11 現在準備中です。

## 参考

- [コンテンツ API とは](https://document.microcms.io/content-api/introduction)

  - GET/POST/DELETE などの API の仕様が書かれています。レスポンスボディの例なども書かれています。

- [Next.js との連携](https://document.microcms.io/tutorial/next/next-top)

  - Nextjs との連携です。Nextjs 以外にも、Astro や Android や IOS など、いろいろな連携例が載っています。
