"use strict";(self.webpackChunkdaily_steps=self.webpackChunkdaily_steps||[]).push([[625],{946:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-6ef7ca10",path:"/Frontend/React/Patterns/",title:"Patterns",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"声明式编程",slug:"声明式编程",children:[]},{level:2,title:"组合模式",slug:"组合模式",children:[]}],filePathRelative:"Frontend/React/Patterns/README.md",git:{updatedTime:1633490487e3,contributors:[{name:"liyiming",email:"lym.liam@outlook.com",commits:1}]}}},8617:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="patterns" tabindex="-1"><a class="header-anchor" href="#patterns" aria-hidden="true">#</a> Patterns</h1><h2 id="声明式编程" tabindex="-1"><a class="header-anchor" href="#声明式编程" aria-hidden="true">#</a> 声明式编程</h2><p>只需要描述 <em>这个组件长什么样子</em> ，而不是去描述 <em>怎么样让这个组件长成这个样子</em> 。</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token punctuation">{</span> \n    currentAuthorize <span class="token operator">===</span> authorize\n    <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MatchComponent</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    : </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoMatchComponent</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  }\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>以上代码存在的问题：</p><ul><li>系统中多个模块都需要权限控制，所以会出现代码的冗余</li><li>一旦权限判断逻辑需要改变，多处代码都需要作出更改</li></ul><p>React 中使用声明式编程设计组件的好处：</p><ul><li>减少了重复劳动</li><li>提高了代码的可维护性：只需要更改相关功能的代码，组件的代码不需要改动</li></ul><p>优化后的部分代码，api 设计部分可参考 react-route、antd pro 的 authorized 组件源码</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Authorized</span></span> \n    <span class="token attr-name">authorize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">noMatch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">无权访问</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">权限通过后显示的内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Authorized</span></span><span class="token punctuation">&gt;</span></span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TabItem</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">One</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TabItem</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Two</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TabItem</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Three</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tab</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>每次都需要手动传递一堆 <code>props</code>。可以使用 <code>React.Children.map</code> 和 <code>React.cloneElement</code> 来篡改 <code>Children</code>，最后渲染篡改后的 <code>Children</code> 就好了。</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> newChildren <span class="token operator">=</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n     active<span class="token operator">:</span> activeIndex <span class="token operator">===</span> index<span class="token punctuation">,</span>\n     <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setActiveIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> child\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n   </span><span class="token punctuation">{</span> newChildren <span class="token punctuation">}</span><span class="token plain-text">\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">)</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">One</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Two</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Three</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TabItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',14),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);