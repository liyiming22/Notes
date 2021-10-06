const navigation = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'FE',
    children: [
      { text: 'JavaScript', link: '/Frontend/JavaScript/' },
      { text: 'Node', link: '/Frontend/Node/' },
      { text: 'React', link: '/Frontend/React/Hooks/' },
    ]
  },
  {
    text: 'Tools',
    children: [
      { text: 'Git', link: '/Tools/Git/' },
      { text: 'Vim', link: '/Tools/Vim/' },
    ]
  },
  {
    text: 'FP',
    link: '/FP/'
  },
  {
    text: 'Find Me',
    children: [
      { text: 'Github', link: 'https://github.com/liyiming22', target: '_blank' },
      { text: 'StackOverflow', link: 'https://stackoverflow.com/users/9120653/liam-1997', target: '_blank' },
      { text: '掘金', link: 'https://juejin.im/user/1978776662064520/', target: '_blank' },
    ]
  }
];

module.exports = navigation;
