const navigation = require('./config/navigation');
const sidebar = require('./config/sidebar');

module.exports = {
  title: 'Notes',
  description: '一鸣的 CS 技术简记',
  base: '/Notes/',
  themeConfig: {
    displayAllHeaders: false,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: navigation,
    sidebar
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      '@vuepress/medium-zoom',
      {
        selector: ".theme-default-content :not(a) > img"
      }
    ],
  ]
}
