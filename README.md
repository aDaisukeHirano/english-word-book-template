## 概要

MicroCMS の英単語長を取得して表示する実装例です。[microcms-js-sdk](https://github.com/microcmsio/microcms-js-sdk)を使ったものと、fetch API を使ったものを示しています。

## 環境変数

- NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN

  - ドメインです。公開しても大丈夫です。

- MICROCMS_API_KEY
  - API キーです。公開してはいけません。平野に聞いてください。

ルートに.env.local を作成して、.example.env の内容を移してください。

## 参考

- [Next.js との連携](https://document.microcms.io/tutorial/next/next-top)
  - Nextjs でのセットアップ例です。Nextjs 以外にも、いろいろな例が載っています。
- [コンテンツ API とは](https://document.microcms.io/content-api/introduction)
  - GET/POST/DELETE などの API の仕様が書かれています。
