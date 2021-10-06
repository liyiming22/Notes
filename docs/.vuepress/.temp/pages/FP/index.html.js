export const data = {
  "key": "v-2d0a0f0c",
  "path": "/FP/",
  "title": "Functional Programming",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "函数式编程的几个技术",
      "slug": "函数式编程的几个技术",
      "children": []
    },
    {
      "level": 2,
      "title": "Advantages",
      "slug": "advantages",
      "children": []
    },
    {
      "level": 2,
      "title": "柯里化",
      "slug": "柯里化",
      "children": []
    },
    {
      "level": 2,
      "title": "偏函数",
      "slug": "偏函数",
      "children": []
    },
    {
      "level": 2,
      "title": "惰性载入函数",
      "slug": "惰性载入函数",
      "children": [
        {
          "level": 3,
          "title": "覆盖函数名",
          "slug": "覆盖函数名",
          "children": []
        },
        {
          "level": 3,
          "title": "自执行函数",
          "slug": "自执行函数",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "FP/README.md",
  "git": {
    "updatedTime": 1609075122000,
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
