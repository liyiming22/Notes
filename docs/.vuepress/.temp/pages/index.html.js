export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/img/notion-avatar.png",
    "actions": [
      {
        "text": "Get Started 👉",
        "link": "/Frontend/JavaScript/",
        "type": "primary"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Liam"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1609485229000,
    "contributors": [
      {
        "name": "liyiming22",
        "email": "liyiming22@jd.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
