<template><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<h2 id="去除已经-commit-过的某个文件的提交" tabindex="-1"><a class="header-anchor" href="#去除已经-commit-过的某个文件的提交" aria-hidden="true">#</a> 去除已经 <code>commit</code> 过的某个文件的提交</h2>
<ol>
<li>回退到上一工作区</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset HEAD^
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>将不想 <code>commit</code> 的文件 <code>stash</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash -- src/xxx.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li>重新提交一次</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
