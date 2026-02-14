# CYE 公式サイト

このリポジトリは、CYEの公式サイト（ニュース、イベント、各種案内ページ）を提供するVue.jsアプリです。

## 使っている技術
- Vue 3 + TypeScript
- Vue CLI
- Vue Router

## セットアップ
```
npm install
```

## 開発
```
npm run serve
```

## ビルド
```
npm run build
```

## Lint
```
npm run lint
```

## ニュース記事の追加方法
ニュースは [src/data/news](src/data/news) 配下に、1記事1ファイルのMarkdown（front matter付き）で追加します。表示順は `date` の降順です。

### 追加する項目（front matter）
- `slug`: 記事URL用の英数字（`/news/<slug>`）
- `date`: `YYYY-MM-DD`
- `title`: タイトル
- `summary`: 一覧用の要約
- `tags`: `お知らせ` / `ニュース` / `動画投稿` / `そのほか`
- `thumbnail`: サムネイル画像パス（`src/assets` からの相対パス）

### 例
```md
---
slug: example-news
date: 2026-02-12
title: 新しいお知らせ
summary: お知らせの要約がここに入ります。
tags:
  - お知らせ
thumbnail: news/example.webp
---

## 見出し

本文テキスト

- 箇条書き
- 箇条書き
```

### 同期方法
Cloudflare側へ反映する場合は、Markdown作成後に以下を実行します。

```
node src/sync-news.js
```

### 画像の置き場所
- サムネイルや本文画像は [src/assets/news](src/assets/news) に配置します。
- `thumbnail` と `content[].src` は `news/` から始まる相対パスで指定します。

### 外部リンク記事
- `url` を追加すると外部リンクとして扱われます。
- 外部リンク記事は `slug` が不要です。

## イベント記事の追加方法
イベントは [src/views/events/CurrentEventsView.vue](src/views/events/CurrentEventsView.vue) の `events` 配列に追加します。

### 追加する項目
- `id`: 一意の数値または文字列
- `title`: タイトル
- `period`: 開催期間（自由記述）
- `description`: 説明文
- `image`: 画像ファイル名（任意）
- `status`: `開催中` / `開催予定` / `終了`

### 例
```ts
events: [
	{
		id: 1,
		title: '春の交流イベント',
		period: '2026-03-01 〜 2026-03-31',
		description: '期間限定の交流イベントを開催します。',
		image: 'spring_event.webp',
		status: '開催予定'
	}
]
```

### 画像の置き場所
- 画像は [src/assets/events](src/assets/events) に配置します。
- `image` はファイル名のみ指定します（例: `spring_event.webp`）。

## ページ構成
- ニュース一覧: [src/views/news/NewsView.vue](src/views/news/NewsView.vue)
- ニュース詳細: [src/views/news/NewsArticleView.vue](src/views/news/NewsArticleView.vue)
- イベント一覧: [src/views/events/CurrentEventsView.vue](src/views/events/CurrentEventsView.vue)

## 補足
- タグは自動で集計され、フィルターに表示されます。
- 画像は `src/assets` 配下から参照します。パスやファイル名が一致しているか確認してください。
