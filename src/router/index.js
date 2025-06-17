import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnderConstruction from '../views/UnderConstruction.vue'

const routes = [
  // --- 公開中のページ ---
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { breadcrumb: '基本情報' } // パンくず用の日本語名
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue'),
    meta: { breadcrumb: '検索結果' } // パンくず用の日本語名
  },
  {
    path: '/join',
    name: 'join',
    component: () => import(/* webpackChunkName: "join" */ '../views/JoinView.vue'),
    meta: { breadcrumb: '製作メンバーになる' } // パンくず用の日本語名
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
  { path: '/rules', name: 'rules', component: UnderConstruction, meta: { breadcrumb: 'サーバールール' } },
  { path: '/roles', name: 'roles', component: UnderConstruction, meta: { breadcrumb: 'ロール' } },
  { path: '/faq', name: 'faq', component: UnderConstruction, meta: { breadcrumb: 'よくある質問' } },
  { path: '/contact', name: 'contact', component: UnderConstruction, meta: { breadcrumb: 'お問い合わせ' } },
  { path: '/disclaimer', name: 'disclaimer', component: UnderConstruction, meta: { breadcrumb: '免責事項' } },
  { path: '/privacy', name: 'privacy', component: UnderConstruction, meta: { breadcrumb: '個人情報保護方針' } },
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

export default router