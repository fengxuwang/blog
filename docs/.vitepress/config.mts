import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Wang's Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'gRPC', link: '/grpc/' }
    ],

    sidebar: {
      '/grpc': [
        {
          text: 'gRPC教程',
          items: [
            { text: '什么是 gRPC?', link: '/grpc/' }
          ]
        }
      ]
    },

    outline: {
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
