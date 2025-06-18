export const searchableData = [
  // --- 主要ページ ---
  {
    type: 'ページ',
    title: 'トップページ',
    description: 'やんまー帝国連邦の公式サイトへようこそ。新着情報、イベント、参加方法などをご案内します。',
    to: '/'
  },
  {
    type: 'ページ',
    title: '基本情報',
    description: '国の概要、歴史、沿革、政治体制、国家体制、構成国、首都、人口、公用語、国旗について。大山間王国からの歴史も掲載。',
    to: '/about'
  },
  {
    type: 'ページ',
    title: '帝国議会',
    description: '立法府である帝国議会の二院制（上院・下院）の構成、政党別の議席数（自由山間党, 自由ヤンマシア解放戦線, 山間民主党など）、役割について解説。',
    to: '/government/diet'
  },
  {
    type: 'ページ',
    title: '府省庁',
    description: '行政を担う内閣、内閣府、帝国王室庁、総務省、法務省、外務省、財務省、国防総省などの各府省庁の役割と組織について紹介。',
    to: '/government/ministries'
  },
  {
    type: 'ページ',
    title: '国内法人一覧',
    description: '政府組織、特殊会社、株式会社、一般法人、学校法人、宗教法人など、連邦内で活動する主要な法人や団体、企業を紹介。ぱんぱグループ, NEグループ, AYAグループ, 山間グループなど。',
    to: '/corporations'
  },
  {
    type: 'ページ',
    title: 'イベント情報',
    description: '開催されるイベント、お祭り、建築大会の情報。夏の建築大会など。',
    to: '/events'
  },
  {
    type: 'ページ',
    title: '製作メンバーになるには',
    description: 'Minecraft(Java版/統合版)ワールド製作への参加方法、参加資格、Discordサーバーへの招待、参加の流れについて。',
    to: '/join'
  },
  {
    type: 'ページ',
    title: 'サーバールール',
    description: 'Discordやマインクラフトサーバーの基本事項、禁止事項、個人情報の取り扱い、違反時の対応など、参加者全員が守るべきルール。',
    to: '/rules'
  },
  {
    type: 'ページ',
    title: 'ロール（役職）',
    description: 'サーバー内での役職、権限、昇格条件について。ビギナー、スタンダード、カスタムメンバー、運営部、広報部など。',
    to: '/roles'
  },
  {
    type: 'ページ',
    title: 'お問い合わせ',
    description: 'やんまー帝国連邦へのお問い合わせ、連絡方法について。',
    to: '/contact'
  },
  {
    type: 'ページ',
    title: '免責事項',
    description: 'サイトの著作権、引用、AI(Gemini)の利用に関する免責事項。',
    to: '/disclaimer'
  },
  {
    type: 'ページ',
    title: '個人情報保護方針',
    description: 'プライバシーポリシー、Cookie(クッキー)、Googleアナリティクスの利用について。',
    to: '/privacy'
  },

  // --- 新着情報 ---
  { type: '新着情報', title: '公式サイトを全面リニューアルしました。', date: '2025.06.18', description: 'ウェブサイトのデザインを一新し、より使いやすくなりました。', to: '/' },
  { type: '新着情報', title: '「帝国議会」ページを更新しました。', date: '2024.10.28', description: '下院選の結果を反映しました。', to: '/government/diet' },
  { type: '新着情報', title: '二国府市と姉妹都市協定を締結しました。', date: '2024.09.21', description: '国際交流の一環として二国府市との協定を締結。', to: '/about' },
  { type: '新着情報', title: '公式サイトをレスポンシブ(スマホ・タブレット)対応にリニューアルしました。', date: '2024.08.22', description: 'スマートフォンやタブレットでも快適に閲覧できるようになりました。', to: '/' },
  { type: '新着情報', title: 'サーバールールを改正しました。', date: '2024.08.02', description: 'コミュニティの健全な運営のためルールを見直しました。', to: '/rules' },
  { type: '新着情報', title: '新メンバーの募集を再開しました。', date: '2024.08.01', description: '製作に参加してくれる新しい仲間を募集しています。', to: '/join' },
  { type: '新着情報', title: '「国内法人一覧」ページを更新しました。', date: '2024.08.01', description: '新しい企業や団体を追加しました。', to: '/corporations' },
  
  // --- イベント ---
  { type: 'イベント', title: '夏の建築大会', date: '2025年夏季(予定)', description: '毎年恒例の夏の建築大会を開催予定！テーマやルールなどの詳細は後日発表します。', to: '/events' },

  // --- 府省庁 ---
  { type: '府省庁', title: '内閣府', description: '内閣の重要政策に関する企画立案・総合調整、特定分野の事務を担う機関。', to: '/government/ministries' },
  { type: '府省庁', title: '帝国王室庁', description: '国王および王室に関する国家事務、国璽・御璽の保管などを所管する機関。', to: '/government/ministries' },
  { type: '府省庁', title: '情報通信庁', description: '情報通信技術(ICT)政策全般を統括する機関。サイバーセキュリティ、電波利用。', to: '/government/ministries' },
  { type: '府省庁', title: '総務省', description: '行政組織、地方自治、選挙、消防、統計など、国の基本的な仕組みを所管する省。', to: '/government/ministries' },
  { type: '府省庁', title: '連邦開発省', description: '構成都市国家間の格差是正と、持続可能な発展を目指す省。', to: '/government/ministries' },
  { type: '府省庁', title: '法務省', description: '国の法制度の維持・整備、国民の権利擁護を担う省。', to: '/government/ministries' },
  { type: '府省庁', title: '法人管轄省', description: '法人の設立、登録、監督を専門に行う省。', to: '/government/ministries' },
  { type: '府省庁', title: '外務省', description: '外交政策の立案・執行、国際社会における国益の増進を担う省。', to: '/government/ministries' },
  { type: '府省庁', title: '財務省', description: '国家予算の編成、税制、国債管理、通貨・金融制度の企画立案など財政全般を担う省。', to: '/government/ministries' },
  { type: '府省庁', title: '文化教育省', description: '教育、文化、スポーツ、宗教に関する行政を所管する省。', to: '/government/ministries' },
  { type: '府省庁', title: '科学技術省', description: '科学技術の振興、研究開発の推進、宇宙開発、原子力に関する政策を担う省。', to: '/government/ministries' },
  { type: '府省庁', title: '労働省', description: '労働条件の改善、雇用の安定、職業能力開発など、働く人々に関わる政策を所管する省。', to: '/government/ministries' },
  { type: '府省庁', title: '厚生省', description: '医療、保健、福祉、公衆衛生、年金など国民の健康と生活の安定に関わる行政を担う省。', to: '/government/ministries' },
  { type: '府省庁', title: '農林水産省', description: '食料の安定供給、農林水産業の振興、森林の保全、水産資源の管理などを所管する省。', to: '/government/ministries' },
  { type: '府省庁', title: '経済産業省', description: '経済・産業政策、エネルギー政策、貿易の振興などを担う省。', to: '/government/ministries' },
  { type: '府省庁', title: '国土交通省', description: '道路、鉄道、港湾、空港などの社会資本整備、運輸、気象、観光、都市計画を担う。', to: '/government/ministries' },
  { type: '府省庁', title: '国防総省', description: '国の平和と独立を守り、安全を保つための防衛政策を担う省。連邦軍の管理・運営。', to: '/government/ministries' },

  // --- 法人 ---
  // 政府組織・特殊会社
  { type: '法人', title: '特務機関BERG', description: '政府直属の非公開組織。', to: '/corporations' },
  { type: '法人', title: '山間帝国国有鉄道 (帝鉄)', description: '国有鉄道を運営する公共企業体。', to: '/corporations' },
  { type: '法人', title: '帝都地下高速度交通局 水咲支部（水咲メトロ）', description: '水咲市の地下鉄事業を運営する特殊会社。', to: '/corporations' },
  { type: '法人', title: '水咲市営交通局', description: '水咲市のバスや一部地下鉄路線を運営する公営企業。', to: '/corporations' },
  { type: '法人', title: '東桜高速鉄道', description: '水咲市内の第三セクター鉄道である桜町線を運営。', to: '/corporations' },
  { type: '法人', title: '山間電信電話株式会社（YTT）', description: '国内最大の総合ICT事業グループ。', to: '/corporations' },
  { type: '法人', title: 'やんまー宇宙航空研究開発機構（YAXA）', description: '航空宇宙開発政策を担う国立研究開発法人。', to: '/corporations' },
  { type: '法人', title: '山間郵政株式会社（YP）', description: '郵便・物流、銀行、生命保険事業を営む特殊会社。', to: '/corporations' },
  { type: '法人', title: '山間電力株式会社', description: '国内の電力小売・発電事業を営む特殊会社。', to: '/corporations' },
  { type: '法人', title: 'YANMA 住ヶ丘リテール株式会社', description: '国内の高速道路の管理を行う特殊会社。', to: '/corporations' },
  { type: '法人', title: '山間エアポート株式会社', description: '笹染国際空港の設置・管理を目的として設立された特殊会社。', to: '/corporations' },
  // ぱんぱグループ
  { type: '法人', title: 'ぱんぱグループ株式会社', description: '旧ぱんぱ財閥を起源とする巨大企業グループ。', to: '/corporations' },
  { type: '法人', title: 'PANPA CASTILE HOUSE', description: 'ぱんぱグループの中枢となる本社ビル。', to: '/corporations' },
  { type: '法人', title: '統一求心会', description: '国家転覆を企む、ぱんぱグループ設立の団体。', to: '/corporations' },
  { type: '法人', title: 'Panpa Private Intelligence Agency', description: '企業の裏仕事や諜報活動を行う団体。', to: '/corporations' },
  { type: '法人', title: '一般社団法人 Panpa Self Defence Forces', description: '民間軍事法人。破防法監視対象団体。', to: '/corporations' },
  { type: '法人', title: '一般社団法人 ぱんぱヘルスネット', description: '緊急援助、災害救援、血液事業などを提供。', to: '/corporations' },
  { type: '法人', title: 'Dimension Co., Ltd.', description: '世界最大の半導体メーカー、ファウンドリ。', to: '/corporations' },
  { type: '法人', title: '株式会社スタディーエクスプレス', description: '通信教育や塾などを手掛ける教育関連企業。', to: '/corporations' },
  { type: '法人', title: '山間民主党', description: 'ぱんぱグループ系。自由山間党による独裁の打倒を目標とする国政政党。', to: '/corporations' },
  { type: '法人', title: 'Pacific Wings', description: 'やんまー帝国連邦のフラッグキャリアである航空会社。', to: '/corporations' },
  { type: '法人', title: '株式会社ヤンマテレビジョン', description: 'ヤンマニュースネットワーク(YNN)のキー局。', to: '/corporations' },
  { type: '法人', title: 'Yanma News Network (YNN)', description: 'ヤンマテレビジョンをキー局とする民放テレビ局のニュースネットワーク。', to: '/corporations' },
  { type: '法人', title: 'NexCell Holding', description: '国内2位の通信系企業グループ。', to: '/corporations' },
  { type: '法人', title: 'Foglia Inc.', description: '様々なAIサービスを提供する企業。', to: '/corporations' },
  // NEグループ
  { type: '法人', title: 'NEグループ株式会社', description: '旧ねの財閥を起源とする急成長企業。', to: '/corporations' },
  { type: '法人', title: 'NE PrivateService inc.', description: '護衛、貴重品輸送、施設警備などを行う会社。', to: '/corporations' },
  { type: '法人', title: 'Mateグループ', description: 'NEグループの姉妹グループ会社。', to: '/corporations' },
  { type: '法人', title: '財配会グループ（集団）', description: 'NEグループの姉妹グループ会社。', to: '/corporations' },
  { type: '法人', title: '一般社団法人 殺戮会', description: 'NEグループ系。反社会組織。テロ組織。', to: '/corporations' },
  { type: '法人', title: '民間武器会社Milliam（ミリアム）', description: '殺戮会の武器開発・販売を行う会社。', to: '/corporations' },
  { type: '法人', title: '株式会社Hausas（ハウサス）', description: 'NEグループ関連会社。', to: '/corporations' },
  // AYAグループ
  { type: '法人', title: 'AYAグループホールディングス', description: 'アンチやんまーの会のフロント企業。', to: '/corporations' },
  { type: '法人', title: '水咲急行電鉄グループ (水急)', description: 'AYAグループ系。大手私鉄の一つ。', to: '/corporations' },
  { type: '法人', title: 'ロリオングループ', description: '国内最大の流通企業。「ロリモール」を展開。', to: '/corporations' },
  { type: '法人', title: '水戸江製薬', description: '違法薬物「やんまードラック」を生産・輸出。', to: '/corporations' },
  { type: '法人', title: 'カスヤマホールディングス', description: '帝国最大の外食チェーン。「ヤマゼリヤ」を世界展開。', to: '/corporations' },
  { type: '法人', title: 'ヤマタロヤマカス＆カンパニー', description: '薬品販売事業。', to: '/corporations' },
  // 山間グループ
  { type: '法人', title: '山間グループ株式会社', description: '政府に協力的な大手グループ。', to: '/corporations' },
  { type: '法人', title: '株式会社ワイシービー (YCB)', description: '国際ブランドのクレジットカード「YCB」を運営。', to: '/corporations' },
  { type: '法人', title: '山間銀行株式会社', description: '4大メガバンクの一角を占める都市銀行。', to: '/corporations' },
  { type: '法人', title: '山間重工業株式会社', description: '国内軍需産業の大手三社の一つ。防衛装備品を手掛ける。', to: '/corporations' },
  { type: '法人', title: 'Mount AI 株式会社', description: '汎用人工知' },
  { type: '法人', title: 'YONY株式会社', description: '山間グループ系。総合電機メーカー。「プレイングステーション」「Xpelia」', to: '/corporations' },
  { type: '法人', title: '株式会社YAMAKAWA', description: '出版、映像、ゲームなどを行う総合エンターテインメント企業。', to: '/corporations' },
  { type: '法人', title: '株式会社ヤワンゴ', description: 'YAMAKAWAの子会社。「ヤマヤマ動画」を運営。', to: '/corporations' },
  // その他の法人
  { type: '法人', title: 'Terminal inc.', description: 'バーコード決済「TerminalPay」を運営。', to: '/corporations' },
  { type: '法人', title: 'LineFox Logistics Inc.', description: '国内第二位の物流会社。', to: '/corporations' },
  { type: '法人', title: '山間娯楽機株式会社 (YANGO)', description: '遊園地の遊具メーカー。', to: '/corporations' },
  { type: '法人', title: '株式会社PLENABA（プレナバ）', description: '高級ファッションブランド。', to: '/corporations' },
  { type: '法人', title: 'Pocketホールディングス株式会社', description: 'ホテル、駐車場、アミューズメント施設などを運営。', to: '/corporations' },
  { type: '法人', title: 'Clubアミューズメント株式会社', description: 'ゲームセンターやネットカフェ「Club24」を展開。', to: '/corporations' },
  { type: '法人', title: 'Abicoシステムズ株式会社', description: '交通インフラのシステムを開発・製造。', to: '/corporations' },
  { type: '法人', title: '株式会社YCityNet', description: '山間勇者の会の主な支持層。学園都市を開発予定。', to: '/corporations' },
  // 学校法人
  { type: '法人', title: '国立大学法人山間帝国大学', description: '国内屈指の難関国立大学。', to: '/corporations' },
  { type: '法人', title: '公立大学法人水咲市立医療大学', description: '水咲市が運営する医療系大学。', to: '/corporations' },
  { type: '法人', title: '学校法人アストリア学園', description: '専門学校エクア学園などを運営。', to: '/corporations' },
  { type: '法人', title: '専門学校エクア学園', description: 'IT、ゲーム、デザインなど多様な分野を学べる専門学校。', to: '/corporations' },
  // 宗教法人
  { type: '法人', title: '宗教法人世界隙間統一家庭連合', description: 'カルト宗教・テロ組織。', to: '/corporations' },
  { type: '法人', title: '宗教法人独配教', description: '殺戮会系列のカルト宗教・テロ組織。', to: '/corporations' },
  // 協会・連合など
  { type: '法人', title: '全ヤンマシア脱税連合会 (全脱連)', description: '脱税を宣言する企業が加盟する組織。', to: '/corporations' },

  // --- ロール ---
  { type: 'ロール', title: 'ビギナーメンバー', description: 'メンバーの初期ロール。住宅やコンビニなどの建築が可能。', to: '/roles' },
  { type: 'ロール', title: 'スタンダードメンバー', description: '中級メンバー。工業系・高層ビルの建築やWorldEditの使用が可能。', to: '/roles' },
  { type: 'ロール', title: 'カスタムメンバー', description: '上級メンバー。ランドマークや公共施設の建築が可能。', to: '/roles' },
  { type: 'ロール', title: '姉妹都市交換留学生', description: '姉妹都市からの交換留学生。スタンダードメンバーと同等の権限。', to: '/roles' },
  { type: 'ロール', title: '国王 (管理者)', description: 'サーバーの最高責任者。管理者。', to: '/roles' },
  { type: 'ロール', title: '運営部', description: 'やんまー帝国連邦製作委員会の中心組織。運営方針の決定やトラブル対処を行う。', to: '/roles' },
  { type: 'ロール', title: '広報部', description: 'やんまー帝国連邦製作委員会の広報活動を担当。', to: '/roles' },
  { type: 'ロール', title: '帝国議会', description: '開発方針を話し合う外部組織。', to: '/roles' },
];
