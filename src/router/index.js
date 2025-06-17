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
      title: 'トップ', 
      fullTitle: 'トップ', // この項目でページタイトルを上書きします
      description: 'Minecraftの架空国家プロジェクト「やんまー帝国連邦」の公式サイトです。国の情報、参加方法、サーバールールなどを掲載しています。',
      keywords: 'やんまー帝国連邦,マイクラ,Minecraft,架空国家,国家運営,都市国家'
    }
  },
  /* 基本情報 */
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { 
      breadcrumb: '基本情報',
      title: '基本情報',
      description: 'やんまー帝国連邦の国家概要、歴史、政治体制、構成国などの基本情報を紹介します。',
      keywords: '基本情報,国家概要,歴史,政治,行政,構成国'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue'),
    meta: { 
      breadcrumb: '検索結果',
      title: 'サイト内検索',
      description: 'サイト内のコンテンツを検索します。',
      keywords: '検索'
    }
  },
  /* 参加・お問い合わせ */
  {
    path: '/join',
    name: 'join',
    component: () => import(/* webpackChunkName: "join" */ '../views/JoinView.vue'),
    meta: { 
      breadcrumb: '製作メンバーになる',
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
      breadcrumb: 'サーバールール',
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
      breadcrumb: 'ロール',
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
      breadcrumb: 'お問い合わせ',
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
      breadcrumb: '免責事項',
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
        breadcrumb: '個人情報保護方針',
        title: '個人情報保護方針',
        description: '当サイトのプライバシーポリシーです。個人情報の取得方法、利用目的、管理方法について定めています。',
        keywords: 'プライバシーポリシー,個人情報保護方針,個人情報,Cookie'
    }
  },

  // --- ここから下はすべて準備中ページ ---
  { path: '/nations', name: 'nations', component: UnderConstruction, meta: { breadcrumb: '構成国' } },
  { path: '/constitution', name: 'constitution', component: UnderConstruction, meta: { breadcrumb: '憲法' } },
  { path: '/government/diet', name: 'diet', component: UnderConstruction, meta: { breadcrumb: '帝国議会' } },
  { path: '/government/ministries', name: 'ministries', component: UnderConstruction, meta: { breadcrumb: '府省庁' } },
  { path: '/government/courts', name: 'courts', component: UnderConstruction, meta: { breadcrumb: '裁判所' } },
  { path: '/politics/policy', name: 'policy', component: UnderConstruction, meta: { breadcrumb: '政策' } },
  { path: '/politics/budget', name: 'budget', component: UnderConstruction, meta: { breadcrumb: '予算' } },
  { path: '/politics/pr', name: 'pr', component: UnderConstruction, meta: { breadcrumb: '広報' } },
  { path: '/corporations', name: 'corporations', component: UnderConstruction, meta: { breadcrumb: '国内法人' } },
  { path: '/tourism/guide', name: 'tourism-guide', component: UnderConstruction, meta: { breadcrumb: '観光案内' } },
  { path: '/tourism/access', name: 'tourism-access', component: UnderConstruction, meta: { breadcrumb: '国外からのアクセス' } },
  { path: '/tourism/transport', name: 'tourism-transport', component: UnderConstruction, meta: { breadcrumb: '交通情報' } },
  { path: '/events', name: 'events', component: UnderConstruction, meta: { breadcrumb: 'イベント情報' } },
  { path: '/faq', name: 'faq', component: UnderConstruction, meta: { breadcrumb: 'よくある質問' } },
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
  const metaTitle = document.querySelector('#meta-title');
  if (metaTitle) metaTitle.setAttribute('content', pageTitle);
  
  const description = to.meta.description || defaultDescription;
  const metaDescription = document.querySelector('#meta-description');
  if (metaDescription) metaDescription.setAttribute('content', description);

  const metaKeywords = document.querySelector('#meta-keywords');
  if (to.meta.keywords && metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords);
  }
  
  // OGPタグの更新
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', pageTitle);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', description);
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', window.location.href);

});

export default router
