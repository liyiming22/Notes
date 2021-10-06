export const data = {
  "key": "v-97071834",
  "path": "/Frontend/Webpack/",
  "title": "常见的问题",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "style-loader vs css-loader",
      "slug": "style-loader-vs-css-loader",
      "children": []
    },
    {
      "level": 2,
      "title": "file-loader vs url-loader",
      "slug": "file-loader-vs-url-loader",
      "children": []
    }
  ],
  "filePathRelative": "Frontend/Webpack/README.md",
  "git": {
    "updatedTime": 1633483918000,
    "contributors": [
      {
        "name": "liyiming",
        "email": "lym.liam@outlook.com",
        "commits": 1
      },
      {
        "name": "liyiming22",
        "email": "liyiming22@jd.com",
        "commits": 1
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
