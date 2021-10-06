export const themeData = {
  "displayAllHeaders": false,
  "smoothScroll": true,
  "lastUpdated": "Last Updated",
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "FE",
      "children": [
        {
          "text": "JavaScript",
          "link": "/Frontend/JavaScript/"
        },
        {
          "text": "Node",
          "link": "/Frontend/Node/"
        },
        {
          "text": "React",
          "link": "/Frontend/React/Hooks/"
        }
      ]
    },
    {
      "text": "Tools",
      "children": [
        {
          "text": "Git",
          "link": "/Tools/Git/"
        },
        {
          "text": "Vim",
          "link": "/Tools/Vim/"
        }
      ]
    },
    {
      "text": "FP",
      "link": "/FP/"
    },
    {
      "text": "Find Me",
      "children": [
        {
          "text": "Github",
          "link": "https://github.com/liyiming22",
          "target": "_blank"
        },
        {
          "text": "StackOverflow",
          "link": "https://stackoverflow.com/users/9120653/liam-1997",
          "target": "_blank"
        },
        {
          "text": "掘金",
          "link": "https://juejin.im/user/1978776662064520/",
          "target": "_blank"
        }
      ]
    }
  ],
  "sidebar": [
    {
      "text": "JavaScript",
      "collapsable": true,
      "link": "/Frontend/",
      "children": [
        {
          "text": "JavaScript",
          "link": "/Frontend/JavaScript/",
          "children": []
        }
      ]
    },
    {
      "text": "React",
      "collapsable": true,
      "link": "/React/",
      "children": [
        "/Frontend/React/Hooks/",
        "/Frontend/React/Patterns/"
      ]
    },
    {
      "text": "Tools",
      "collapsable": true,
      "link": "/Tools/",
      "children": [
        "/Tools/Git/",
        "/Tools/Vim/"
      ]
    },
    {
      "text": "FP",
      "collapsable": true,
      "link": "/FP/",
      "children": [
        "/FP/"
      ]
    },
    {
      "text": "Node",
      "collapsable": true,
      "link": "/Node/",
      "children": [
        "/Frontend/Node/"
      ]
    },
    {
      "text": "工程化",
      "collapsable": true,
      "link": "/Webpack/",
      "children": [
        "/Frontend/Webpack/"
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
