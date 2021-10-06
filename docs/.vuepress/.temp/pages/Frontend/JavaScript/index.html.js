export const data = {
  "key": "v-ce023784",
  "path": "/Frontend/JavaScript/",
  "title": "This is JavaScript notes",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "ESM vs CJS",
      "slug": "esm-vs-cjs",
      "children": [
        {
          "level": 3,
          "title": "相互引用",
          "slug": "相互引用",
          "children": []
        },
        {
          "level": 3,
          "title": "加载",
          "slug": "加载",
          "children": []
        },
        {
          "level": 3,
          "title": "差异",
          "slug": "差异",
          "children": []
        },
        {
          "level": 3,
          "title": "ES 模块中实现 require",
          "slug": "es-模块中实现-require",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Promise",
      "slug": "promise",
      "children": []
    },
    {
      "level": 2,
      "title": "对象",
      "slug": "对象",
      "children": [
        {
          "level": 3,
          "title": "Js 对象的两种属性",
          "slug": "js-对象的两种属性",
          "children": []
        },
        {
          "level": 3,
          "title": "Data properties",
          "slug": "data-properties",
          "children": []
        },
        {
          "level": 3,
          "title": "Accessor properties",
          "slug": "accessor-properties",
          "children": []
        },
        {
          "level": 3,
          "title": "合并对象",
          "slug": "合并对象",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Promise.resolve vs new Promise(resolve => resolve())",
      "slug": "promise-resolve-vs-new-promise-resolve-resolve",
      "children": []
    }
  ],
  "filePathRelative": "Frontend/JavaScript/README.md",
  "git": {
    "updatedTime": 1624956642000,
    "contributors": [
      {
        "name": "liyiming22",
        "email": "liyiming22@jd.com",
        "commits": 6
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
