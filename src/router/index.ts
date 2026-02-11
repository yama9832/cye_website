import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

interface BreadcrumbItem {
  text: string;
  to?: string;
}

interface AppRouteMeta {
  title?: string;
  fullTitle?: string;
  description?: string;
  keywords?: string;
  breadcrumb?: BreadcrumbItem[];
}

const routes: Array<RouteRecordRaw> = [
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
    path: '/basic',
    name: 'basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/basic/BasicView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報' }],
      title: '基本情報',
      description: 'やんまー帝国連邦の基本情報をまとめています。'
    }
  },
  {
    path: '/basic/constitution',
    name: 'constitution',
    component: () => import(/* webpackChunkName: "constitution" */ '../views/basic/ConstitutionView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報', to: '/basic' }, { text: '憲法' }],
      title: '憲法'
    }
  },
  {
    path: '/basic/diet',
    name: 'diet',
    component: () => import(/* webpackChunkName: "diet" */ '../views/basic/DietView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報', to: '/basic' }, { text: '帝国議会' }],
      title: '帝国議会',
      description: 'やんまー帝国連邦の立法府、帝国議会の構成や役割について。上院・下院の議席情報、政党情報など、架空国家の政治設定を紹介します。',
      keywords: '架空国家, 帝国議会, 政治, 政党, 上院, 下院, 議席, 立法府, マイクラ, 国家運営'
    }
  },
  {
    path: '/basic/ministries',
    name: 'ministries',
    component: () => import(/* webpackChunkName: "ministries" */ '../views/basic/MinistriesView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報', to: '/basic' }, { text: '府省庁' }],
      title: '府省庁',
      description: 'やんまー帝国連邦の行政を担う各府省庁の役割と組織を紹介。架空国家における詳細な省庁設定。',
      keywords: '架空国家, 府省庁, 行政, 内閣, 省庁, 設定, やんまー帝国連邦'
    }
  },
  {
    path: '/basic/corporations',
    name: 'corporations',
    component: () => import(/* webpackChunkName: "corporations" */ '../views/basic/CorporationsView.vue'),
    meta: {
      breadcrumb: [{ text: '基本情報', to: '/basic' }, { text: '国内法人' }],
      title: '国内法人一覧',
      description: 'やんまー帝国連邦で活動する主要な法人、企業、団体を紹介。架空の企業設定や経済活動に興味がある方向け。',
      keywords: '架空国家, 企業, 法人, 団体, 経済, 設定, マイクラ'
    }
  },
  /* ニュース */
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/news/NewsView.vue'),
    meta: {
      breadcrumb: [{ text: 'ニュース' }],
      title: 'ニュース',
      description: 'やんまー帝国連邦のニュースを掲載します。'
    }
  },
  { path: '/news/announcements', name: 'news-announcements', redirect: '/news' },
  { path: '/news/videos', name: 'news-videos', redirect: '/news' },
  { path: '/news/others', name: 'news-others', redirect: '/news' },
  {
    path: '/news/:slug',
    name: 'news-article',
    component: () => import(/* webpackChunkName: "news-article" */ '../views/news/NewsArticleView.vue'),
    meta: {
      breadcrumb: [{ text: 'ニュース', to: '/news' }, { text: '記事' }],
      title: 'ニュース詳細',
      description: 'ニュース記事の詳細ページです。'
    }
  },
  /* イベント */
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/events/CurrentEventsView.vue'),
    meta: {
      breadcrumb: [{ text: 'イベント' }],
      title: 'イベント',
      description: 'やんまー帝国連邦のイベント情報を掲載します。',
      keywords: 'マイクラ イベント, 開催中, 開催予定, 終了, イベント情報, やんまー帝国連邦'
    }
  },
  {
    path: '/events/upcoming',
    name: 'events-upcoming',
    redirect: '/events'
  },
  {
    path: '/events/past',
    name: 'events-past',
    redirect: '/events'
  },
  /* 参加方法 */
  {
    path: '/participation',
    name: 'participation',
    component: () => import(/* webpackChunkName: "participation" */ '../views/participation/ParticipationView.vue'),
    meta: {
      breadcrumb: [{ text: '参加方法' }],
      title: '参加方法',
      description: '参加に必要なルールやロール、よくある質問を案内します。'
    }
  },
  {
    path: '/participation/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "rules" */ '../views/participation/RulesView.vue'),
    meta: {
      breadcrumb: [{ text: '参加方法', to: '/participation' }, { text: 'ルール' }],
      title: 'サーバールール',
      description: 'マルチサーバー参加者全員が遵守すべきルールです。禁止事項、建築ルールなどを定めています。参加前に必ずご確認ください。',
      keywords: 'マイクラ ルール, マイクラ マルチサーバー, サーバールール, 禁止事項, 建築ルール'
    }
  },
  {
    path: '/participation/roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ '../views/participation/RolesView.vue'),
    meta: {
      breadcrumb: [{ text: '参加方法', to: '/participation' }, { text: 'ロール' }],
      title: 'ロール',
      description: 'サーバー内での役職（ロール）と権限、昇格条件について解説。マイクラでのロールプレイや国家運営にご興味のある方はご覧ください。',
      keywords: 'マイクラ, 役職, 権限, 国家運営, 架空国家'
    }
  },
  {
    path: '/participation/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/participation/FaqView.vue'),
    meta: {
      breadcrumb: [{ text: '参加方法', to: '/participation' }, { text: 'よくある質問' }],
      title: 'よくある質問'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact/ContactView.vue'),
    meta: {
      breadcrumb: [{ text: 'お問い合わせ' }],
      title: 'お問い合わせ',
      description: 'やんまー帝国連邦へのお問い合わせはこちらから。公式Discordサーバーの専用チャンネルをご案内します。',
      keywords: 'お問い合わせ, 連絡, 質問, Discord'
    }
  },
  /* 免責事項・個人情報保護方針 */
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: () => import(/* webpackChunkName: "disclaimer" */ '../views/legal/DisclaimerView.vue'),
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
    component: () => import(/* webpackChunkName: "privacy" */ '../views/legal/PrivacyView.vue'),
    meta: {
      breadcrumb: [{ text: '個人情報保護方針' }],
      title: '個人情報保護方針',
      description: '当サイトのプライバシーポリシーです。個人情報の取得方法、利用目的、管理方法について定めています。',
      keywords: 'プライバシーポリシー, 個人情報保護方針, 個人情報, Cookie'
    }
  },

  // --- 404 Not Found ---
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue'),
    meta: {
      title: '404 - ページが見つかりません'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // ページ遷移時にスクロールを一番上に戻す
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
  routes
});

// ページ遷移後にmetaタグと構造化データを更新する
router.afterEach((to) => {
  nextTick(() => {
    const siteName = 'やんまー帝国連邦';
    const defaultDescription = 'Minecraft(マインクラフト)で架空国家を運営するプロジェクト「やんまー帝国連邦」の公式サイト。現代都市開発やマルチプレイに興味がある方はぜひご覧ください。';
    const baseUrl = 'https://yanma-empire.net';
    const meta = to.meta as AppRouteMeta;

    // タイトルの設定
    const pageTitle = meta.fullTitle || (meta.title ? `${meta.title} | ${siteName}` : siteName);
    document.title = pageTitle;

    // metaタグの更新
    const metaDescription = document.querySelector<HTMLMetaElement>('#meta-description');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description || defaultDescription);
    }

    const metaKeywords = document.querySelector<HTMLMetaElement>('#meta-keywords');
    if (meta.keywords && metaKeywords) {
      metaKeywords.setAttribute('content', meta.keywords);
    }

    // OGPタグの更新
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', meta.description || defaultDescription);

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // --- ▼▼▼ 構造化データ(JSON-LD)の生成 ▼▼▼ ---
    const structuredData: { "@context": string; "@graph": Array<Record<string, unknown>> } = {
      "@context": 'https://schema.org',
      "@graph": []
    };

    // ① WebSiteの構造化データ
    structuredData['@graph'].push({
      '@type': 'WebSite',
      url: baseUrl,
      name: 'やんまー帝国連邦公式サイト',
      description: 'Minecraftの架空国家プロジェクト「やんまー帝国連邦」の公式サイトです。',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });

    // ② パンくずリストの構造化データ
    if (meta.breadcrumb && meta.breadcrumb.length > 0) {
      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'トップ',
          item: `${baseUrl}/`
        },
        ...meta.breadcrumb.map((crumb, index) => {
          const isLast = index === meta.breadcrumb!.length - 1;
          const itemUrl = crumb.to ? new URL(crumb.to, baseUrl).href : window.location.href;
          const listItem: Record<string, unknown> = {
            '@type': 'ListItem',
            position: index + 2,
            name: crumb.text
          };
          if (!isLast || crumb.to) {
            listItem.item = itemUrl;
          }
          return listItem;
        })
      ];

      structuredData['@graph'].push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems
      });
    }

    const scriptTag = document.querySelector<HTMLScriptElement>('#structured-data');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    }
  });
});

export default router;
