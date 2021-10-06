import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-2d0a0f0c","/FP/","Functional Programming",["/FP/index.html","/FP/README.md"]],
  ["v-7d8ba964","/Frontend/","This is Frontend..",["/Frontend/index.html","/Frontend/README.md"]],
  ["v-ce023784","/Frontend/JavaScript/","This is JavaScript notes",["/Frontend/JavaScript/index.html","/Frontend/JavaScript/README.md"]],
  ["v-5379b769","/Frontend/Node/","This is Node notes",["/Frontend/Node/index.html","/Frontend/Node/README.md"]],
  ["v-97071834","/Frontend/Webpack/","常见的问题",["/Frontend/Webpack/index.html","/Frontend/Webpack/README.md"]],
  ["v-6494824a","/Tools/Git/","Git",["/Tools/Git/index.html","/Tools/Git/README.md"]],
  ["v-649b5302","/Tools/Vim/","Vim",["/Tools/Vim/index.html","/Tools/Vim/README.md"]],
  ["v-d729369a","/Frontend/React/Hooks/","Hooks",["/Frontend/React/Hooks/index.html","/Frontend/React/Hooks/README.md"]],
  ["v-6ef7ca10","/Frontend/React/Patterns/","Patterns",["/Frontend/React/Patterns/index.html","/Frontend/React/Patterns/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
