<template><h1 id="this-is-javascript-notes" tabindex="-1"><a class="header-anchor" href="#this-is-javascript-notes" aria-hidden="true">#</a> This is JavaScript notes</h1>
<h2 id="esm-vs-cjs" tabindex="-1"><a class="header-anchor" href="#esm-vs-cjs" aria-hidden="true">#</a> ESM vs CJS</h2>
<h3 id="相互引用" tabindex="-1"><a class="header-anchor" href="#相互引用" aria-hidden="true">#</a> 相互引用</h3>
<ol>
<li>
<p><code>ESM</code> 模块只能 <code>import</code> 而不能 <code>require</code>。</p>
</li>
<li>
<p><code>ESM</code> 模块可以 <code>import</code> <code>CJS</code> 模块，但是只能通过<em>默认导入</em>的模式，比如<code>import _ from 'lodash'</code>，而不能使用声明式的导入方式，比如 <code>import {shuffle} from 'lodash'</code>。(That’s because CJS scripts compute their named exports as they execute, whereas ESM’s named exports must be computed during the parsing phase.
)</p>
</li>
<li>
<p><code>ESM</code> 模块可以 <code>require</code> <code>CJS</code> 模块，包括声明式导出的，但是依然会有很多问题，类似 Webpack 或者 Rollup 这样的工具甚至不知道该怎么出处理 <code>ESM</code> 里的 <code>require</code> 代码。</p>
</li>
<li>
<p>Node 默认支持的是 <code>CJS</code> 标准，你需要选择 <code>.mjs</code> 这样的后缀或者在 <code>package.json</code> 文件中设置 <code>&quot;type&quot;: &quot;module&quot;</code> 才能开启 <code>ESM</code> 模式。通过这种方式开启的话，如果有 <code>CJS</code> 规范的文件，就需要将后缀改成 <code>.cjs</code>。</p>
</li>
</ol>
<h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3>
<p><code>CJS</code> 中的 <code>require</code> 是同步的，他不会返回一个 <code>promise</code> 或者是执行一个回调函数。<code>require</code> 从磁盘或者网络中读取文件然后立即执行。</p>
<p><code>ESM</code> 中的模块 <code>loader</code> 异步加载模块，首先解析 <code>import</code> 和 <code>export</code> 而不是去执行，在解析阶段，模块 <code>loader</code> 可以在声明式的 <code>import</code> 中检测错误并且抛出而不运行任何依赖的代码。</p>
<p>The ESM module loader then asynchronously downloads and parses any scripts that you imported, and then scripts that your scripts imported, building out a “module graph” of dependencies, until eventually it finds a script that doesn’t import anything. Finally, that script is allowed to execute, and then scripts that depend on that are allowed to run, and so on.</p>
<p>ES 模块中所有的依赖是并行下载，最后按顺序执行。</p>
<h3 id="差异" tabindex="-1"><a class="header-anchor" href="#差异" aria-hidden="true">#</a> 差异</h3>
<p><code>CJS</code> 不能 <code>require</code> <code>ESM</code> 最大的原因是 <code>CJS</code> 不支持 Top-level await。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./foo.mjs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="es-模块中实现-require" tabindex="-1"><a class="header-anchor" href="#es-模块中实现-require" aria-hidden="true">#</a> ES 模块中实现 <code>require</code></h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRequire <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'module'</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> require <span class="token operator">=</span> <span class="token function">createRequire</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token keyword">const</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./foo.cjs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<p><code>Promise.catch</code> 只是 <code>promise.then(undefined, onRejected);</code> 方法的一个别名。也就是说，这个方法用来注册当 <code>promise</code> 对象状态变为 <code>Rejected</code> 时的回调。</p>
<p>静态方法 <code>Promise.resolve(value)</code> 可以认为是 <code>new Promise()</code> 方法的快捷方式。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>每次调用 <code>then</code> 方法都会返回一个<strong>新</strong> <code>promise</code> 对象。</p>
<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2>
<h3 id="js-对象的两种属性" tabindex="-1"><a class="header-anchor" href="#js-对象的两种属性" aria-hidden="true">#</a> Js 对象的两种属性</h3>
<p>数据属性（<em>data properties</em>）和访问器属性（<em>accessor properties</em>）</p>
<h3 id="data-properties" tabindex="-1"><a class="header-anchor" href="#data-properties" aria-hidden="true">#</a> Data properties</h3>
<ul>
<li>
<p><code>configurable</code>: 默认为 <code>true</code>。当 <code>configurable</code> 为 <code>false</code> 时，表示修饰的属性不可被删除、更改，不能被转化为访问器属性。(注意此操作不可逆，并且内部属性除了 <code>writable</code> 之外再使用 <code>Object.defineProperty</code> 会抛出错误)</p>
</li>
<li>
<p><code>enumerable</code>：默认为 <code>true</code>，在 <code>for-in</code> 循环中 return。</p>
</li>
<li>
<p><code>writable</code>：默认为 <code>true</code>。</p>
</li>
<li>
<p><code>value</code></p>
</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>注意，以上所说的默认为 <code>true</code> 是字面量定义对象属性的时候。如果通过 <code>Object.defineProperty</code> 定义的属性，均为 <code>false</code>。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">333</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="accessor-properties" tabindex="-1"><a class="header-anchor" href="#accessor-properties" aria-hidden="true">#</a> Accessor properties</h3>
<p>对象只有 <code>getter</code> 的属性无法被改写，在非严格模式下会被忽略，严格模式下会抛出错误。</p>
<p>对象只有 <code>setter</code> 的属性无法被读取，在非严格模式下会返回 <code>undefined</code>，严格模式下会抛出错误。</p>
<h3 id="合并对象" tabindex="-1"><a class="header-anchor" href="#合并对象" aria-hidden="true">#</a> 合并对象</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dest <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res <span class="token operator">===</span> dest<span class="token punctuation">)</span>   <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="promise-resolve-vs-new-promise-resolve-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve-vs-new-promise-resolve-resolve" aria-hidden="true">#</a> <code>Promise.resolve</code> vs <code>new Promise(resolve =&gt; resolve())</code></h2>
<blockquote>
<p>The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a &quot;then&quot; method), the returned promise will &quot;follow&quot; that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.</p>
</blockquote>
<ol>
<li>如果传入的值是一个 <code>Promise</code>，那么回调的方式会产生两次额外的 tick，看以下代码:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resovle</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resovle<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

tick <span class="token number">1</span>
tick <span class="token number">2</span>
tick <span class="token number">4</span>
tick <span class="token number">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"tick 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

tick <span class="token number">4</span>
tick <span class="token number">1</span>
tick <span class="token number">2</span>
tick <span class="token number">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>如果传入 <code>Promise.resolve()</code> 值为一个 <code>Promise</code>，那么 <code>Promise.resolve(value) === value</code></p>
<ol start="2">
<li>如果传入一个 <code>undefined</code> 值，<code>Promise.resolve</code> 会以同步的方式抛出错误，而回调的形式会返回一个 <code>rejected</code> 的 <code>Promise</code>。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token parameter">someObject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  someObject<span class="token punctuation">.</span>resolved <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>someObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token parameter">someObject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    someObject<span class="token punctuation">.</span>resolved <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>someObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>参考 <a href="https://stackoverflow.com/questions/26711243/promise-resolve-vs-new-promiseresolve" target="_blank" rel="noopener noreferrer">stackoverflow<OutboundLink/></a>
参考 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve" target="_blank" rel="noopener noreferrer">MDN<OutboundLink/></a></p>
</template>
