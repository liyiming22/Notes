const sidebar = [
  {
    text: 'JavaScript',
    collapsable: true,
    link: '/Frontend/',
    children: [
      {
        text: 'JavaScript',
        link: '/Frontend/JavaScript/',
        children: [],
      },
    ]
  },
  {
    text: 'React',
    collapsable: true,
    link: '/React/',
    children: [
      '/Frontend/React/Hooks/',
      '/Frontend/React/Patterns/',
    ]
  },
  {
    text: 'Tools',
    collapsable: true,
    link: '/Tools/',
    children: [
      '/Tools/Git/',
      '/Tools/Vim/',
    ]
  },
  {
    text: 'FP',
    collapsable: true,
    link: '/FP/',
    children: [
      '/FP/'
    ]
  },
  {
    text: 'Node',
    collapsable: true,
    link: '/Node/',
    children: [
      '/Frontend/Node/'
    ]
  },
  {
    text: '工程化',
    collapsable: true,
    link: '/Webpack/',
    children: [
      '/Frontend/Webpack/'
    ]
  },
];

module.exports = sidebar;
