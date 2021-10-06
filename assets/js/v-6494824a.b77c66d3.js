"use strict";(self.webpackChunkdaily_steps=self.webpackChunkdaily_steps||[]).push([[500],{6386:(s,e,a)=>{a.r(e),a.d(e,{data:()=>n});const n={key:"v-6494824a",path:"/Tools/Git/",title:"Git",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"去除已经 commit 过的某个文件的提交",slug:"去除已经-commit-过的某个文件的提交",children:[]}],filePathRelative:"Tools/Git/README.md",git:{updatedTime:1633490487e3,contributors:[{name:"liyiming",email:"lym.liam@outlook.com",commits:1}]}}},1968:(s,e,a)=>{a.r(e),a.d(e,{default:()=>l});const n=(0,a(6252).uE)('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="去除已经-commit-过的某个文件的提交" tabindex="-1"><a class="header-anchor" href="#去除已经-commit-过的某个文件的提交" aria-hidden="true">#</a> 去除已经 <code>commit</code> 过的某个文件的提交</h2><ol><li>回退到上一工作区</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD^\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>将不想 <code>commit</code> 的文件 <code>stash</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash -- src/xxx.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>重新提交一次</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n<span class="token function">git</span> commit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',8),i={},l=(0,a(3744).Z)(i,[["render",function(s,e){return n}]])},3744:(s,e)=>{e.Z=(s,e)=>{for(const[a,n]of e)s[a]=n;return s}}}]);