import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja-JP',
  title: "品川区立日野学園PTA アプリケーション",
  description: "PTA向けアプリケーションの一覧と説明",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Applications', link: '/applications' },
      { text: 'Legal', link: '/terms-of-service' },
    ],

    sidebar: [
      {
        text: 'Applications',
        items: [
          { text: 'アプリケーション一覧', link: '/applications' },
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: '利用規約', link: '/terms-of-service' },
          { text: 'プライバシーポリシー', link: 'privacy-policy' }
        ]
      },
      {
        text: 'Related Pages',
        items: [
          { text: '品川区立日野学園PTA', link: 'https://www.hinogakuenpta.org' },
          { text: 'PTA会員専用ページ', link: 'https://members.hinogakuenpta.org' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ECR33' }
    ]
  }
})
