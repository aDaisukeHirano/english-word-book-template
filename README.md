## 概要

Nextjs を使った MicroCMS の英単語帳一覧を取得して表示する実装例です。

[src/app/page.tsx](https://github.com/aDaisukeHirano/english-word-book-template/blob/main/src/app/page.tsx) に、[microcms-js-sdk](https://github.com/microcmsio/microcms-js-sdk)を使ったものと、fetch API を使ったものを示しています。

## API スキーマ

### エンドポイント

`https://9gpsl13tqx.microcms.io/api/v1`

### リクエストヘッダー

X-API-KEY : [Google Drive env.txt](https://drive.google.com/file/d/1PBD6uHqUM7aKGSBImxpjqzrCZjVyW8iW/view?usp=drive_link) に記載

### パス

#### /words

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

### コンテンツ API 仕様書

[コンテンツ API とは](https://document.microcms.io/content-api/introduction)

GET/POST/DELETE などの API の仕様が書かれています。GET で指定できるクエリパラメータや、レスポンスボディの例なども書かれています。

### 一覧取得の例

```ts
const words = await fetch("https://9gpsl13tqx.microcms.io/api/v1/words", {
  method: "GET",
  headers: {
    "X-API-KEY": process.env.MICROCMS_API_KEY || "",
  },
}).then((res) => res.json());
```

## 画像

MicroCMS にアップロードしている画像の URL 一覧

- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/3b8b7e2151b4477295151a33669bb366/dog.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/8bb040d94e1c4bdd91875641a563ddbb/cow.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/183ff439dd624f78ab0c32488e156e9a/cat.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/b284350a889b417d9cfda91f2f4e3575/horse.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/2d345266ace647e0ad9275772f900f38/kuma.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/eadc65cfc2924fa8bba4238eeb65d295/sheep.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/5c87be6ecf9e45e1bc565be4c0d25a2d/usagi.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/6da5c6bb6a5a42719c686321e6fa9728/fox.png
- https://images.microcms-assets.io/assets/d969296c041748ecbc26138e53640370/76ed4800b31141eb91116bc50c85e4a5/tanuki.png

取得元：[フリーペンシル](https://iconbu.com/)

## 参考

- [Next.js との連携](https://document.microcms.io/tutorial/next/next-top)

  - Nextjs との連携です。Nextjs 以外にも、Astro や Android や IOS など、いろいろな連携例が載っています。
