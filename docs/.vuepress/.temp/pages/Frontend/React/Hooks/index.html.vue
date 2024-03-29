<template><h1 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h1>
<h2 id="技巧-总结" tabindex="-1"><a class="header-anchor" href="#技巧-总结" aria-hidden="true">#</a> 技巧&amp;总结</h2>
<h3 id="使用-usecallback-最好开启-eslint" tabindex="-1"><a class="header-anchor" href="#使用-usecallback-最好开启-eslint" aria-hidden="true">#</a> 使用 <code>useCallback</code> 最好开启 eslint</h3>
<p><code>useEffect</code> 对于函数依赖，尝试将该函数放置在 <code>effect</code> 内，或者使用 <code>useCallback</code> 包裹；<code>useEffect/useCallback/useMemo</code>，对于 <code>state</code> 或者其他属性的依赖，根据 eslint 的提示填入 <code>deps</code>；</p>
<h3 id="usestate-vs-usereducer" tabindex="-1"><a class="header-anchor" href="#usestate-vs-usereducer" aria-hidden="true">#</a> <code>useState</code> vs <code>useReducer</code></h3>
<p>如果不直接使用 <code>state</code>，只是想修改 <code>state</code>，用 <code>setState</code> 的函数入参方式 <code>setState(c =&gt; c + 1)</code> 代替；如果修改 <code>state</code> 的过程依赖了其他属性，尝试将 <code>state</code> 和属性聚合，改写成 <code>useReducer</code> 的形式。当这些方法都不奏效，使用 <code>ref</code>，但是依然要谨慎操作。</p>
<h3 id="usestate-vs-useref" tabindex="-1"><a class="header-anchor" href="#usestate-vs-useref" aria-hidden="true">#</a> <code>useState</code> vs <code>useRef</code></h3>
<ul>
<li>
<p>当用 <code>useMemo</code>, <code>useCallback</code> 等API的时候，如果引用了 <code>useState</code>，就要把 <code>useState</code> 值作为 <code>deps</code> 传入，否侧由于 <code>useMemo</code>, <code>useCallback</code> 缓存了 <code>useState</code> 旧的值，无法得到新得值，但是 <code>useRef</code> 不同，可以直接读取/改变 <code>useRef</code> 里面缓存的数据。</p>
</li>
<li>
<p><code>useState</code> 同步改变 <code>state</code> 状态之后，无法获取最新的数据。而 <code>useRef</code> 可以。</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">addCnt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">count</span> <span class="token operator">=></span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// 打印出来的永远都是上一次的 count</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addCnt<span class="token punctuation">}</span><span class="token operator">></span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> forceUpdate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> addCnt <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>current<span class="token operator">++</span>
    <span class="token comment">// 因为 ref 的引用并没发生变化，所以这里需要强制刷新，否则会导致永远展示最初的 current 值</span>
    <span class="token function">forceUpdate</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">.</span>current<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addCnt<span class="token punctuation">}</span><span class="token operator">></span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
