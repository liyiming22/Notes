const navigation = require('./config/navigation');
const sidebar = require('./config/sidebar');

module.exports = {
  title: 'Notes',
  description: 'CS 技术简记',
  base: '/Notes/',
  themeConfig: {
    displayAllHeaders: false,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    navbar: navigation,
    sidebar
  },
}
