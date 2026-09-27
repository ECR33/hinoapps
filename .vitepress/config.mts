import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja-JP',
  title: "品川区立日野学園PTA アプリケーション",
  description: "PTA向けアプリケーションの一覧と説明",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }],
  ],
  async transformHead(ctx) {
    return [
      // Slack等のリンクプレビュー用画像 (OGP)
      ['meta', { property: 'og:image', content: 'https://apps.hinogakuenpta.org/og-image.png' }],
      ['meta', { property: 'og:title', content: ctx.pageData.title || '品川区立日野学園PTA アプリケーション' }],
      ['meta', { property: 'og:description', content: ctx.pageData.description || 'PTA向けアプリケーションの一覧と説明' }],
      // Twitter / OGP カード対応
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:image', content: 'https://apps.hinogakuenpta.org/og-image.png' }]
    ]
  },
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
          {
            text: 'slack2mail', items: [
              { text: '概要', link: '/slack2mail/' },
              { text: '操作手順', link: '/slack2mail/operation' },
              { text: '選択肢', link: '/slack2mail/options' },
            ]
          },
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
  },
  vite: {
    server: {
      allowedHosts: ['.hinogakuenpta.org', '.sakurastyle.jp'],
    },
  }
})
