import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnderConstruction from '../views/UnderConstruction.vue'

const routes = [
  // --- 公開中のページ ---
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'やんまー帝国連邦公式サイト',
      fullTitle: 'やんまー帝国連邦公式サイト',
      description: 'Minecraftの架空国家プロジェクト「やんまー帝国連邦」の公式サイトです。国の情報、参加方法、サーバールールなどを掲載しています。',
      keywords: 'やんまー帝国連邦,マイクラ,Minecraft,架空国家,国家運営,都市国家'
      // breadcrumb はトップページなので不要
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue'),
    meta: { 
      breadcrumb: [{ text: '検索結果' }],
      title: 'サイト内検索',
      description: 'サイト内のコンテンツを検索します。',
      keywords: '検索'
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
      description: 'やんまー帝国連邦の国家概要、歴史、政治体制、構成国などの基本情報を紹介します。',
      keywords: '基本情報,国家概要,歴史,政治,行政,構成国'
    }
  },
  { 
    path: '/government/diet', 
    name: 'diet', 
    component: () => import(/* webpackChunkName: "diet" */ '../views/DietView.vue'), 
    meta: { 
      breadcrumb: [{ text: '基本情報' }, { text: '国の組織' }, { text: '帝国議会' }],
      title: '帝国議会',
      description: 'やんまー帝国連邦の立法府、帝国議会の構成や役割について解説します。上院・下院の議席情報も掲載。',
      keywords: '帝国議会,上院,下院,議席,政党,立法府'
    } 
  },
  { 
    path: '/government/ministries', 
    name: 'ministries', 
    component: () => import(/* webpackChunkName: "ministries" */ '../views/MinistriesView.vue'), 
    meta: { 
      breadcrumb: [{ text: '基本情報' }, { text: '国の組織' }, { text: '府省庁' }],
      title: '府省庁',
      description: 'やんまー帝国連邦の行政を担う各府省庁の役割と組織について紹介します。',
      keywords: '府省庁,行政,内閣,省庁,やんまー帝国連邦'
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
      description: 'やんまー帝国連邦で活動する主要な法人、団体を紹介します。政府組織から民間企業、学校法人まで多岐にわたる組織をご覧いただけます。',
      keywords: '法人,企業,団体,やんまー帝国連邦,政府組織,株式会社'
    } 
  },
  /* 観光・イベント */
  { 
    path: '/events', 
    name: 'events', 
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue'),
    meta: { 
      breadcrumb: [{ text: '観光・イベント' }, { text: 'イベント' }, { text: 'イベント情報' }],
      title: 'イベント情報',
      description: 'やんまー帝国連邦で開催されるイベント情報をお知らせします。建築大会や季節のお祭りなど、様々な催しをチェックできます。',
      keywords: 'イベント,祭り,大会,やんまー帝国連邦,建築'
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
      description: 'Minecraftのワールド製作に参加するメンバーを募集しています。参加資格や参加までの流れ、注意事項を記載しています。',
      keywords: 'メンバー募集,参加,Discord,Minecraft,建築,製作'
    }
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "rules" */ '../views/RulesView.vue'),
    meta: { 
      breadcrumb: [{ text: '参加・お問い合わせ' }, { text: '連邦に参加' }, { text: 'サーバールール' }],
      title: 'サーバールール',
      description: 'サーバー参加者全員が遵守すべきルールです。基本事項、禁止事項、違反時の対応などを定めています。',
      keywords: 'ルール,規則,禁止事項,個人情報,著作権'
    }
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ '../views/RolesView.vue'),
    meta: { 
      breadcrumb: [{ text: '参加・お問い合わせ' }, { text: '連邦に参加' }, { text: 'ロール' }],
      title: 'ロール',
      description: 'サーバー内での役職（ロール）と権限、昇格条件について解説します。運営部や広報部などの製作委員会についても紹介。',
      keywords: 'ロール,役職,権限,昇格,運営,広報'
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
      keywords: 'お問い合わせ,連絡,質問,Discord'
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
      keywords: '免責事項,著作権,引用'
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
      keywords: 'プライバシーポリシー,個人情報保護方針,個人情報,Cookie'
    }
  },

  // --- ここから下はすべて準備中ページ ---
  // 各準備中ページにも breadcrumb を設定
  { path: '/nations', name: 'nations', component: UnderConstruction, meta: { breadcrumb: [{ text: '基本情報' }, {text: '構成国' }] } },
  { path: '/constitution', name: 'constitution', component: UnderConstruction, meta: { breadcrumb: [{ text: '基本情報' }, { text: '憲法' }] } },
  { path: '/government/courts', name: 'courts', component: UnderConstruction, meta: { breadcrumb: [{ text: '基本情報' }, { text: '国の組織' }, { text: '裁判所' }] } },
  { path: '/politics/policy', name: 'policy', component: UnderConstruction, meta: { breadcrumb: [{ text: '国政情報' }, { text: '政策・広報' }, { text: '政策' }] } },
  { path: '/politics/budget', name: 'budget', component: UnderConstruction, meta: { breadcrumb: [{ text: '国政情報' }, { text: '政策・広報' }, { text: '予算' }] } },
  { path: '/politics/pr', name: 'pr', component: UnderConstruction, meta: { breadcrumb: [{ text: '国政情報' }, { text: '政策・広報' }, { text: '広報' }] } },
  { path: '/tourism/guide', name: 'tourism-guide', component: UnderConstruction, meta: { breadcrumb: [{ text: '観光・イベント' }, { text: '観光案内' }, { text: '観光案内' }] } },
  { path: '/tourism/access', name: 'tourism-access', component: UnderConstruction, meta: { breadcrumb: [{ text: '観光・イベント' }, { text: '観光案内' }, { text: '国外からのアクセス' }] } },
  { path: '/tourism/transport', name: 'transport', component: UnderConstruction, meta: { breadcrumb: [{ text: '観光・イベント' }, { text: '観光案内' }, { text: '交通情報' }] } },
  { path: '/faq', name: 'faq', component: UnderConstruction, meta: { breadcrumb: [{ text: '参加・お問い合わせ' }, { text: 'サポート' }, { text: 'よくある質問' }] } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // ページ遷移時にスクロールを一番上に戻す
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

// ページ遷移後にmetaタグを更新する
router.afterEach((to) => {
  const siteName = 'やんまー帝国連邦';
  const defaultDescription = 'Minecraftの架空国家プロジェクト「やんまー帝国連邦」の公式サイトです。国の情報、参加方法、サーバールールなどを掲載しています。';

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

});

export default router
