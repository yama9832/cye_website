// ブログ記事のデータを管理するファイル
// 新しい記事を追加する場合は、この配列の先頭に新しいオブジェクトを追加してください。

export const posts = [
  {
    slug: 'info-2025-07-01',
    title: '2025年7月20日に上院選挙が実施されます',
    date: '2025.07.01',
    category: 'お知らせ',
    images: [],
    content: `
    <p>2025年7月20日投開票の第33回上院議員通常選挙が実施されます。</p>
    <p>自由山間党、自由ヤンマシア解放戦線、山間民主党、山間勇者の会、やんまーから国民を守る党、やんま新鮮組、社会山間党などが候補者を擁立すると見込まれます。</p>
    <p>投票日に投票所へ行けない方は期日前投票や不在者投票、仕事や留学で海外にお住いの方は在外投票ができます。</p>
    `
  },
  {
    slug: 'info-2025-06-25',
    title: '「建築ギャラリー」「ブログ」ページを追加しました',
    date: '2025.06.25',
    category: '更新',
    images: [],
    content: `
    <p>新たに建築物を紹介するページとブログを掲載するページを追加しました。</p>
    <p>低頻度ではありますが、定期的に更新していく予定ですので、ぜひご覧ください。</p>
    <p>この他にも追加してほしいページや現在あるページで改善してほしい点がありましたら、ぜひご連絡ください。公式Discordサーバーや公式SNSアカウント、代表(やんまー)のSNSアカウントなどで受け付けております。</p>
    `
  },
  {
    slug: 'architecture-course-vol5',
    title: 'やんまーでもわかる!建築講座vol.5「ビル」',
    date: '2025.06.19',
    category: '建築講座',
    images: [
      'architecture-course-vol5_1.webp',
      'architecture-course-vol5_2.webp',
      'architecture-course-vol5_3.webp',
      'architecture-course-vol5_4.webp',
      'architecture-course-vol5_5.webp',
    ],
    content: `<p>公式Discordで提供している建築講座を公式サイト上でも提供いたします。ぜひご活用ください。</p>`
  },
  {
    slug: 'architecture-course-vol4',
    title: 'やんまーでもわかる!建築講座vol.4「住宅補足編1」',
    date: '2025.06.19',
    category: '建築講座',
    images: [
      'architecture-course-vol4_1.webp',
      'architecture-course-vol4_2.webp',
      'architecture-course-vol4_3.webp',
      'architecture-course-vol4_4.webp',
    ],
    content: `<p>公式Discordで提供している建築講座を公式サイト上でも提供いたします。ぜひご活用ください。</p>`
  },
  {
    slug: 'architecture-course-vol3',
    title: 'やんまーでもわかる!建築講座vol.3「住宅」',
    date: '2025.06.19',
    category: '建築講座',
    images: [
      'architecture-course-vol3_1.webp',
      'architecture-course-vol3_2.webp',
      'architecture-course-vol3_3.webp',
      'architecture-course-vol3_4.webp',
    ],
    content: `<p>公式Discordで提供している建築講座を公式サイト上でも提供いたします。ぜひご活用ください。</p>`
  },
  {
    slug: 'architecture-course-vol2',
    title: 'やんまーでもわかる!建築講座vol.2「World Edit」基礎編',
    date: '2025.06.19',
    category: '建築講座',
    images: [
      'architecture-course-vol2_1.webp',
      'architecture-course-vol2_2.webp',
      'architecture-course-vol2_3.webp',
      'architecture-course-vol2_4.gif',
      'architecture-course-vol2_5.gif',
      'architecture-course-vol2_6.gif',
    ],
    content: `<p>公式Discordで提供している建築講座を公式サイト上でも提供いたします。ぜひご活用ください。</p>`
  },
{
    slug: 'architecture-course-vol1',
    title: 'やんまーでもわかる!建築講座vol.1「コア配置」',
    date: '2025.06.19',
    category: '建築講座',
    images: [
      'architecture-course-vol1_1.webp',
      'architecture-course-vol1_2.webp',
      'architecture-course-vol1_3.webp',
      'architecture-course-vol1_4.webp',
    ],
    content: `<p>公式Discordで提供している建築講座を公式サイト上でも提供いたします。ぜひご活用ください。</p>`
  },
  {
    slug: 'info-2025-06-18',
    title: '公式サイトを全面リニューアルしました',
    date: '2025.06.18',
    category: 'お知らせ',
    images: [],
    content:
      `<p>公式サイトを一から再構築して全面リニューアルしました。今後はブログやイベント情報などを定期的に更新していきます。ぜひご覧ください！</p>
      <p>以前のサイトで掲載していた情報の大半は引き継いでおりますが、一部設定の変更などで削除したものがあります。また、一部ページは未完成となります。ご了承ください。</p>
      <p>これからもやんまー帝国連邦をよろしくお願いいたします。興味がある方は、ぜひご参加ください！初心者も大歓迎です！</p>`
  },
];
