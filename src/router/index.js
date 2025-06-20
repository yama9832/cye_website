import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue' // 

const routes = [
  // --- 公開中のページ ---
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    meta: {
      title: 'やんまー帝国連邦公式サイト',
      fullTitle: 'やんまー帝国連邦公式サイト',
      description: 'Minecraft(マインクラフト)で架空国家を運営するプロジェクト「やんまー帝国連邦」の公式サイト。現代都市開発やマルチプレイに興味がある方はぜひご覧ください。',
      keywords: 'マイクラ, Minecraft, 架空国家, 都市開発, マルチサーバー, 建築, 参加, コミュニティ, 現代都市, やんまー帝国連邦, マルチプレイ, クロスプレイ, Java, BE, 統合版 '
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue'),
    meta: {
      breadcrumb: [{ text: '検索結果' }],
      title: 'サイト内検索',
      description: 'やんまー帝国連邦公式サイト内のコンテンツを検索します。',
      keywords: '検索, サイト内検索'
    }
  },
  /* 基本情報 */
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報' }],
      title: '基本情報',
      description: '架空国家「やんまー帝国連邦」の国家概要、歴史、政治体制、構成国などの基本情報を紹介します。マイクラでの国家運営や世界観設定の参考に。',
      keywords: '架空国家, 基本情報, 国家概要, 歴史, 政治, 行政, 構成国, マイクラ, 世界観'
    }
  },
  {
    path: '/government/diet',
    name: 'diet',
    component: () => import(/* webpackChunkName: "diet" */ '../views/DietView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報' }, { text: '国の組織' }, { text: '帝国議会' }],
      title: '帝国議会',
      description: 'やんまー帝国連邦の立法府、帝国議会の構成や役割について。上院・下院の議席情報、政党情報など、架空国家の政治設定を紹介します。',
      keywords: '架空国家, 帝国議会, 政治, 政党, 上院, 下院, 議席, 立法府, マイクラ, 国家運営'
    }
  },
  {
    path: '/government/ministries',
    name: 'ministries',
    component: () => import(/* webpackChunkName: "ministries" */ '../views/MinistriesView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報' }, { text: '国の組織' }, { text: '府省庁' }],
      title: '府省庁',
      description: 'やんまー帝国連邦の行政を担う各府省庁の役割と組織を紹介。架空国家における詳細な省庁設定。',
      keywords: '架空国家, 府省庁, 行政, 内閣, 省庁, 設定, やんまー帝国連邦'
    }
  },
  /* 国政情報 */
  {
    path: '/corporations',
    name: 'corporations',
    component: () => import(/* webpackChunkName: "corporations" */ '../views/CorporationsView.vue'),
    meta: {
      breadcrumb: [{ text: '国政情報' }, { text: '各種一覧' }, { text: '国内法人' }],
      title: '国内法人一覧',
      description: 'やんまー帝国連邦で活動する主要な法人、企業、団体を紹介。架空の企業設定や経済活動に興味がある方向け。',
      keywords: '架空国家, 企業, 法人, 団体, 経済, 設定, マイクラ'
    }
  },
  /* 観光・イベント */
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryView.vue'),
    meta: {
      breadcrumb: [{ text: '観光・イベント' }, { text: '建築ギャラリー' }],
      title: '建築ギャラリー',
      description: 'やんまー帝国連邦の美しい都市景観や建築物の数々を写真で紹介します。マイクラ建築のインスピレーションに。',
      keywords: 'マイクラ 建築, マイクラ 都市, 建築ギャラリー, Minecraft, スクリーンショット, 現代建築'
    }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue'),
    meta: {
      breadcrumb: [{ text: '観光・イベント' }, { text: 'イベント' }, { text: 'イベント情報' }],
      title: 'イベント情報',
      description: 'やんまー帝国連邦で開催されるイベント情報。マイクラ建築大会や季節のお祭りなど、マルチプレイで楽しめる催しをチェック。',
      keywords: 'マイクラ イベント, マイクラ 大会, 建築大会, マルチプレイ, やんまー帝国連邦'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue'),
    meta: {
      breadcrumb: [{ text: 'ブログ' }],
      title: 'ブログ',
      description: 'やんまー帝国連邦の活動を発信するブログ。建築講座、開発日記、運営からのお知らせなど。',
      keywords: 'マイクラ ブログ, マイクラ 建築講座, 開発日記, 架空国家'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import(/* webpackChunkName: "blog-post" */ '../views/BlogPostView.vue'),
    meta: {
      breadcrumb: [{ text: 'ブログ', to: '/blog' }, { text: '記事' }],
    }
  },
  /* 参加・お問い合わせ */
  {
    path: '/join',
    name: 'join',
    component: () => import(/* webpackChunkName: "join" */ '../views/JoinView.vue'),
    meta: {
      breadcrumb: [{ text: '参加・お問い合わせ' }, { text: '連邦に参加' }, { text: '製作メンバーになる' }],
      title: '製作メンバーになる',
      description: 'マインクラフトのサーバーに参加して、一緒に都市開発をしませんか？参加資格や参加方法、Discordサーバーへの招待リンクはこちら。',
      keywords: 'マイクラ サーバー 参加, Minecraft マルチプレイ, マインクラフト 建築メンバー募集, Java版 統合版 クロスプレイ, 都市開発サーバー, 参加方法, Discord'
    }
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "rules" */ '../views/RulesView.vue'),
    meta: {
      breadcrumb: [{ text: '参加・お問い合わせ' }, { text: '連邦に参加' }, { text: 'サーバールール' }],
      title: 'サーバールール',
      description: 'マルチサーバー参加者全員が遵守すべきルールです。禁止事項、建築ルールなどを定めています。参加前に必ずご確認ください。',
      keywords: 'マイクラ ルール, マイクラ マルチサーバー, サーバールール, 禁止事項, 建築ルール'
    }
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ '../views/RolesView.vue'),
    meta: {
      breadcrumb: [{ text: '参加・お問い合わせ' }, { text: '連邦に参加' }, { text: 'ロール' }],
      title: 'ロール',
      description: 'サーバー内での役職（ロール）と権限、昇格条件について解説。マイクラでのロールプレイや国家運営にご興味のある方はご覧ください。',
      keywords: 'マイクラ, 役職, 権限, 国家運営, 架空国家'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
    meta: {
      breadcrumb: [{ text: '参加・お問い合わせ' }, { text: 'サポート' }, { text: 'お問い合わせ' }],
      title: 'お問い合わせ',
      description: 'やんまー帝国連邦へのお問い合わせはこちらから。公式Discordサーバーの専用チャンネルをご案内します。',
      keywords: 'お問い合わせ, 連絡, 質問, Discord'
    }
  },
  /* 免責事項・個人情報保護方針 */
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: () => import(/* webpackChunkName: "disclaimer" */ '../views/DisclaimerView.vue'),
    meta: {
      breadcrumb: [{ text: '免責事項' }],
      title: '免責事項',
      description: '当サイトの免責事項です。サイトの情報の正確性、著作権、引用について記載しています。',
      keywords: '免責事項, 著作権, 引用'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/PrivacyView.vue'),
    meta: {
      breadcrumb: [{ text: '個人情報保護方針' }],
      title: '個人情報保護方針',
      description: '当サイトのプライバシーポリシーです。個人情報の取得方法、利用目的、管理方法について定めています。',
      keywords: 'プライバシーポリシー, 個人情報保護方針, 個人情報, Cookie'
    }
  },

  // --- 準備中ページ ---
  // 共通のコンポーネントを使い回す場合も、ルート定義は個別に行い、
  // webpackChunkNameで同じ名前を付けることで、同じファイルにまとめられます。
  {
    path: '/nations', name: 'nations',
    component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'),
    meta: { breadcrumb: [{ text: '基本情報' }, { text: '構成国' }] }
  },
  {
    path: '/constitution', name: 'constitution',
    component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'),
    meta: { breadcrumb: [{ text: '基本情報' }, { text: '憲法' }] }
  },
  { path: '/government/courts', name: 'courts', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '基本情報' }, { text: '国の組織' }, { text: '裁判所' }] } },
  { path: '/politics/policy', name: 'policy', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '国政情報' }, { text: '政策・広報' }, { text: '政策' }] } },
  { path: '/politics/budget', name: 'budget', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '国政情報' }, { text: '政策・広報' }, { text: '予算' }] } },
  { path: '/politics/pr', name: 'pr', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '国政情報' }, { text: '政策・広報' }, { text: '広報' }] } },
  { path: '/tourism/guide', name: 'tourism-guide', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '観光・イベント' }, { text: '観光案内' }, { text: '観光案内' }] } },
  { path: '/tourism/access', name: 'tourism-access', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '観光・イベント' }, { text: '観光案内' }, { text: '国外からのアクセス' }] } },
  { path: '/tourism/transport', name: 'transport', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '観光・イベント' }, { text: '観光案内' }, { text: '交通情報' }] } },
  { path: '/faq', name: 'faq', component: () => import(/* webpackChunkName: "under-construction" */ '../views/UnderConstruction.vue'), meta: { breadcrumb: [{ text: '参加・お問い合わせ' }, { text: 'サポート' }, { text: 'よくある質問' }] } },

  // --- 404 Not Found ---
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue'),
    meta: {
      title: '404 - ページが見つかりません',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // ページ遷移時にスクロールを一番上に戻す
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' } // スムーズスクロールを追加
    }
  },
  routes
})

// ページ遷移後にmetaタグと構造化データを更新する
router.afterEach((to) => {
  // ★修正点2: Vue.nextTick を nextTick に変更
  nextTick(() => {
    const siteName = 'やんまー帝国連邦';
    const defaultDescription = 'Minecraft(マインクラフト)で架空国家を運営するプロジェクト「やんまー帝国連邦」の公式サイト。現代都市開発やマルチプレイに興味がある方はぜひご覧ください。';
    const baseUrl = 'https://yanma-empire.net';

    // タイトルの設定
    const pageTitle = to.meta.fullTitle || (to.meta.title ? `${to.meta.title} | ${siteName}` : siteName);
    document.title = pageTitle;

    // metaタグの更新
    const metaDescription = document.querySelector('#meta-description');
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description || defaultDescription);
    }

    const metaKeywords = document.querySelector('#meta-keywords');
    if (to.meta.keywords && metaKeywords) {
      metaKeywords.setAttribute('content', to.meta.keywords);
    }

    // OGPタグの更新
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', to.meta.description || defaultDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // --- ▼▼▼ 構造化データ(JSON-LD)の生成 ▼▼▼ ---
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": []
    };

    // ① WebSiteの構造化データ
    structuredData["@graph"].push({
      "@type": "WebSite",
      "url": baseUrl,
      "name": "やんまー帝国連邦公式サイト",
      "description": "Minecraftの架空国家プロジェクト「やんまー帝国連邦」の公式サイトです。",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });

    // ② パンくずリストの構造化データ
    if (to.meta.breadcrumb && to.meta.breadcrumb.length > 0) {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "トップ",
          "item": baseUrl + "/"
        },
        ...to.meta.breadcrumb.map((crumb, index) => {
          const isLast = index === to.meta.breadcrumb.length - 1;
          const itemUrl = crumb.to ? new URL(crumb.to, baseUrl).href : window.location.href;
          const listItem = {
            "@type": "ListItem",
            "position": index + 2,
            "name": crumb.text,
          };
          if (!isLast || crumb.to) {
            listItem.item = itemUrl;
          }
          return listItem;
        })
      ];

      structuredData["@graph"].push({
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      });
    }

    const scriptTag = document.querySelector('#structured-data');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    }
  });
});

export default router
