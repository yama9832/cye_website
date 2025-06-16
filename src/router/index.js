import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 準備中ページのコンポーネントをインポートします
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
    // 遅延読み込みでAboutViewをロードします
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'search',
    // 遅延読み込みでSearchViewをロードします
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue')
  },

  // --- ここから下はすべて準備中ページ ---
  // 基本情報セクション
  { path: '/nations', name: 'nations', component: UnderConstruction },
  { path: '/constitution', name: 'constitution', component: UnderConstruction },
  { path: '/government/diet', name: 'diet', component: UnderConstruction },
  { path: '/government/ministries', name: 'ministries', component: UnderConstruction },
  { path: '/government/courts', name: 'courts', component: UnderConstruction },
  
  // 国政情報セクション
  { path: '/politics/policy', name: 'policy', component: UnderConstruction },
  { path: '/politics/budget', name: 'budget', component: UnderConstruction },
  { path: '/politics/pr', name: 'pr', component: UnderConstruction },
  { path: '/corporations', name: 'corporations', component: UnderConstruction },

  // 観光・イベントセクション
  { path: '/tourism/guide', name: 'tourism-guide', component: UnderConstruction },
  { path: '/tourism/access', name: 'tourism-access', component: UnderConstruction },
  { path: '/tourism/transport', name: 'tourism-transport', component: UnderConstruction },
  { path: '/events', name: 'events', component: UnderConstruction },

  // 参加・お問い合わせセクション
  { path: '/join', name: 'join', component: UnderConstruction },
  { path: '/rules', name: 'rules', component: UnderConstruction },
  { path: '/roles', name: 'roles', component: UnderConstruction },
  { path: '/faq', name: 'faq', component: UnderConstruction },
  { path: '/contact', name: 'contact', component: UnderConstruction },

  // フッターのリーガルリンク
  { path: '/disclaimer', name: 'disclaimer', component: UnderConstruction },
  { path: '/privacy', name: 'privacy', component: UnderConstruction },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router