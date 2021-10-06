<template><h1 id="常见的问题" tabindex="-1"><a class="header-anchor" href="#常见的问题" aria-hidden="true">#</a> 常见的问题</h1>
<h2 id="style-loader-vs-css-loader" tabindex="-1"><a class="header-anchor" href="#style-loader-vs-css-loader" aria-hidden="true">#</a> <a href="https://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader" target="_blank" rel="noopener noreferrer">style-loader vs css-loader<OutboundLink/></a></h2>
<p><code>css-loader</code> 仅仅用来读取 css 文件，并不做任何处理:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"css!./file.css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => returns css code from file.css, resolves imports and url(...) </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>style-loader</code> 获取到 css 样式文件并创建 <code>&lt;style&gt;</code> 标签将其插入到页面的 <code>&lt;head&gt;</code> 中去，使得我们写的样式生效。</p>
<h2 id="file-loader-vs-url-loader" tabindex="-1"><a class="header-anchor" href="#file-loader-vs-url-loader" aria-hidden="true">#</a> <a href="https://stackoverflow.com/questions/49080007/url-loader-vs-file-loader-webpack" target="_blank" rel="noopener noreferrer">file-loader vs url-loader<OutboundLink/></a></h2>
<p><code>file-loader</code> 会在构建过程中将文件 <em>复制</em> 到构建的文件夹中去，并将项目中所依赖到该文件的地方通过链接的形式替换。</p>
<p><code>url-loader</code> 会将整个二进制文件内容以 base64 的形式插入到依赖该文件的地方，所以并不会产生额外的请求。可以在 webpack 配置过程中设置文件大小阈值，超过该阈值的会 fallback 到 <code>file-loader</code>。</p>
</template>
