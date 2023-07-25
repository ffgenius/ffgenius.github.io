import{_ as o,o as n,c as t,k as a,t as e,V as l}from"./chunks/framework.d3b95951.js";const k=JSON.parse('{"title":"vue","description":"","frontmatter":{"prev":{"text":"JavaScript","link":"/interview/javascript"},"next":false},"headers":[],"relativePath":"interview/vue.md","filePath":"interview/vue.md"}'),r={name:"interview/vue.md"},p=l('<h1 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h1><h2 id="vue的优点" tabindex="-1">vue的优点 <a class="header-anchor" href="#vue的优点" aria-label="Permalink to &quot;vue的优点&quot;">​</a></h2><ol><li>轻量级框架</li><li>简单易学</li><li>双向数据绑定</li><li>组件化</li><li>视图，数据，结构分离</li><li>虚拟DOM</li><li>运行速度更快</li></ol><h2 id="spa单页面优缺点" tabindex="-1">SPA单页面优缺点 <a class="header-anchor" href="#spa单页面优缺点" aria-label="Permalink to &quot;SPA单页面优缺点&quot;">​</a></h2><h3 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h3><ol><li>SPA（ single page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。</li><li>一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转。</li><li>页面的变化是利用路由机制实现 HTML 内容的变换，避免页面的重新加载。</li></ol><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ol><li>用户体验好，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染。</li><li>减少了不必要的跳转和重复渲染，这样相对减轻了服务器的压力。</li><li>前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理。</li></ol><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ol><li>初次加载耗时多。</li><li>不能使用浏览器的前进后退功能，由于单页应用在一个页面中显示所有的内容，所以，无法前进后退。</li><li>不利于搜索引擎检索：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。。</li></ol><h2 id="spa首屏加载速度慢的怎么解决" tabindex="-1">SPA首屏加载速度慢的怎么解决 <a class="header-anchor" href="#spa首屏加载速度慢的怎么解决" aria-label="Permalink to &quot;SPA首屏加载速度慢的怎么解决&quot;">​</a></h2><p>首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容；</p><p><strong>加载慢的原因</strong></p><ol><li>网络延时问题。</li><li>资源文件体积是否过大。</li><li>资源是否重复发送请求加载。</li><li>加载脚本的时候，渲染内容堵塞。</li></ol><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h3><ol><li>减小入口文件体积。</li><li>静态资源本地缓存。</li><li>UI框架按需加载。</li><li>图片资源的压缩。</li><li>组件重复打包。</li><li>开启GZip压缩。</li><li>使用SSR。</li></ol><h2 id="mvvm理解" tabindex="-1">MVVM理解 <a class="header-anchor" href="#mvvm理解" aria-label="Permalink to &quot;MVVM理解&quot;">​</a></h2><p>MVVM 由 Model、View、ViewModel 三部分构成，Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来；ViewModel 是一个同步View 和 Model的对象。</p><p>在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。</p><p>ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM， 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。</p><h2 id="vue数据双向绑定原理" tabindex="-1">Vue数据双向绑定原理 <a class="header-anchor" href="#vue数据双向绑定原理" aria-label="Permalink to &quot;Vue数据双向绑定原理&quot;">​</a></h2><p>实现mvvm的数据双向绑定，是采用<strong>数据劫持</strong>结合<strong>发布者-订阅者模式</strong>的方式，通过Object.defineProperty()来给各个属性添加setter，getter并劫持监听，在数据变动时发布消息给订阅者，触发相应的监听回调。</p><h2 id="vue响应式原理" tabindex="-1">vue响应式原理 <a class="header-anchor" href="#vue响应式原理" aria-label="Permalink to &quot;vue响应式原理&quot;">​</a></h2><p>什么是响应式，也即是说，数据发生改变的时候，视图会重新渲染，匹配更新为最新的值。 Object.defineProperty 为对象中的每一个属性，设置 get 和 set 方法，每个声明的属性，都会有一个 专属的依赖收集器 subs，当页面使用到 某个属性时，触发 ObjectdefineProperty - get函数，页面的 watcher 就会被 放到 属性的依赖收集器 subs 中，在 数据变化时，通知更新； 当数据改变的时候，会触发Object.defineProperty - set函数，数据会遍历自己的 依赖收集器 subs，逐个通知 watcher，视图开始更新。</p><h2 id="vue3-x响应式原理" tabindex="-1">Vue3.x响应式原理 <a class="header-anchor" href="#vue3-x响应式原理" aria-label="Permalink to &quot;Vue3.x响应式原理&quot;">​</a></h2><p>Vue3.x改用Proxy替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。Proxy只会代理对象的第一层，Vue3是怎样处理这个问题的呢？判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理， 这样就实现了深度观测。监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？我们可以判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。</p><h2 id="proxy-与-object-defineproperty-优劣对比" tabindex="-1">Proxy 与 Object.defineProperty 优劣对比 <a class="header-anchor" href="#proxy-与-object-defineproperty-优劣对比" aria-label="Permalink to &quot;Proxy 与 Object.defineProperty 优劣对比&quot;">​</a></h2><ol><li>Proxy 可以直接监听对象而非属性；</li><li>Proxy 可以直接监听数组的变化；</li><li>Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；</li><li>Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；</li><li>Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；</li><li>Object.defineProperty 的优势如下: 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。</li></ol><h2 id="vue中组件的data为什么是一个函数-而new-vue-实例里-data-可以直接是一个对象" tabindex="-1">vue中组件的data为什么是一个函数？而new Vue 实例里，data 可以直接是一个对象 <a class="header-anchor" href="#vue中组件的data为什么是一个函数-而new-vue-实例里-data-可以直接是一个对象" aria-label="Permalink to &quot;vue中组件的data为什么是一个函数？而new Vue 实例里，data 可以直接是一个对象&quot;">​</a></h2><p>因为使用对象的话，每个实例（组件）上使用的data数据是相互影响的。对象是对于内存地址的引用，直接定义个对象的话组件之间都会使用这个对象，这样会造成组件之间数据相互影响。使用函数后，使用的是data()函数，data()函数中的this指向的是当前实例本身，就不会相互影响了。而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。</p><h2 id="vue中computed与method的区别" tabindex="-1">vue中computed与method的区别 <a class="header-anchor" href="#vue中computed与method的区别" aria-label="Permalink to &quot;vue中computed与method的区别&quot;">​</a></h2><p><strong>相同点</strong></p><p>​ 如果作为模板的数据显示，二者能实现响应的功能，唯一不同的是methods定义的方法需要执行。</p><p><strong>不同点</strong></p><ol><li>computed 会基于响应数据缓存，methods不会缓存；</li><li>diff之前先看data里的数据是否发生变化，如果没有变化computed的方法不会执行，但methods里的方法会执行。</li><li>computed是属性调用，而methods是函数调用。</li></ol><h2 id="react、vue中的key有什么作用-key的内部原理" tabindex="-1">react、vue中的key有什么作用？(key的内部原理) <a class="header-anchor" href="#react、vue中的key有什么作用-key的内部原理" aria-label="Permalink to &quot;react、vue中的key有什么作用？(key的内部原理)&quot;">​</a></h2><h3 id="虚拟dom中的作用" tabindex="-1">虚拟DOM中的作用： <a class="header-anchor" href="#虚拟dom中的作用" aria-label="Permalink to &quot;虚拟DOM中的作用：&quot;">​</a></h3><p>key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成的【新的虚拟DOM】， 随后Vue进行【新虚拟DOM】和【旧虚拟DOM】的差异比较。</p><h3 id="对比规则" tabindex="-1">对比规则 <a class="header-anchor" href="#对比规则" aria-label="Permalink to &quot;对比规则&quot;">​</a></h3><ol><li>旧虚拟DOM中找到了与新虚拟DOM相同的key： 若虚拟DOM中内容没有改变，直接使用之前的虚拟DOM 若虚拟DOM中的内容改变了，则生成新的真是DOM，随后替换掉页面中之前的真是DOM</li><li>旧虚拟DOM中未找到与新虚拟DOM相同的key 创建新的真是DOM，随后渲染到页面</li></ol><h3 id="用index作为key可能会引发的问题" tabindex="-1">用index作为key可能会引发的问题 <a class="header-anchor" href="#用index作为key可能会引发的问题" aria-label="Permalink to &quot;用index作为key可能会引发的问题&quot;">​</a></h3><ol><li>若对数据进行：逆序添加，逆序删除等破坏顺序操作： 会产生没有必要的真是DOM更新 ==&gt; 界面效果没问题，但是效率低</li><li>如果结构中还包含输入类的DOM： 会产生错误DOM更新 ==&gt; 界面有问题</li></ol><h3 id="开发中如何选择key" tabindex="-1">开发中如何选择key <a class="header-anchor" href="#开发中如何选择key" aria-label="Permalink to &quot;开发中如何选择key&quot;">​</a></h3><ol><li>最好使用每条数据的唯一标识作为key，比如id，手机号，身份证号，学号等唯一标识。</li><li>如果不存在对数据的逆序添加，逆序删除等破坏顺序操作，仅用于渲染列表用于展示。 使用index作为key是没有问题的。</li></ol><h2 id="nexttick" tabindex="-1">$nextTick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;$nextTick&quot;">​</a></h2><p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</p><p>Vue更新DOM是异步的。数据变化时将开启一个队列，同一个watcher的多次触发，只会被加入队列一次，这样可以避免不必要的计算和DOM操作。</p><h2 id="vue常用指令" tabindex="-1">vue常用指令 <a class="header-anchor" href="#vue常用指令" aria-label="Permalink to &quot;vue常用指令&quot;">​</a></h2>',48),i=a("li",null,"v-model指令：用于表单输入，实现表单控件和数据的双向绑定。",-1),c=a("li",null,"v-on：简写为@，基础事件绑定。",-1),h=a("li",null,"v-bind：简写为：，动态绑定一些元素的属性，类型可以是：字符串、对象或数组。",-1),u=a("li",null,"v-if指令：取值为true/false，控制元素是否需要被渲染",-1),d=a("li",null,"v-else指令：和v-if指令搭配使用，没有对应的值。当v-if的值false，v-else才会被渲染出来。",-1),y=a("li",null,"v-show指令：指令的取值为true/false，分别对应着显示/隐藏。",-1),D=a("li",null,"v-for指令：遍历data中存放的数组数据，实现列表的渲染。",-1),F=a("li",null,"v-once： 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。",-1),m=a("li",null,"v-pre：跳过其节点的编译过程。可利用跳过没有使用指令语法，没有使用插值语法的节点，会加快编译。",-1),v=l(`<h2 id="v-show和v-if指令的共同点和不同点" tabindex="-1">v-show和v-if指令的共同点和不同点 <a class="header-anchor" href="#v-show和v-if指令的共同点和不同点" aria-label="Permalink to &quot;v-show和v-if指令的共同点和不同点&quot;">​</a></h2><h3 id="共同点" tabindex="-1">共同点： <a class="header-anchor" href="#共同点" aria-label="Permalink to &quot;共同点：&quot;">​</a></h3><p>v-show和v-if都能控制元素的显示和隐藏。</p><h3 id="不同点" tabindex="-1">不同点 <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;不同点&quot;">​</a></h3><ol><li>实现本质方法不同：v-show本质就是通过设置css中的display设置为none；控制隐藏v-if是动态的向DOM树内添加或者删除DOM元素。</li><li>v-show都会编译，初始值为false，只是将display设为none，但它也编译了；v-if初始值为false，就不会编译了。</li></ol><p><strong>总结</strong>：v-show只编译一次，后面其实就是控制css，而v-if不停的销毁和创建，如果要频繁切换某节点时，故v-show性能更好一点。</p><h2 id="为什么避免v-if和v-for一起使用" tabindex="-1">为什么避免v-if和v-for一起使用 <a class="header-anchor" href="#为什么避免v-if和v-for一起使用" aria-label="Permalink to &quot;为什么避免v-if和v-for一起使用&quot;">​</a></h2><p>vue2.x版本中，当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级； vue3.x版本中，当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。 官网明确指出：避免 v-if 和 v-for 一起使用，永远不要在一个元素上同时使用 v-if 和 v-for。</p><h2 id="vue-set-改变数组和对象中的属性" tabindex="-1">Vue.set 改变数组和对象中的属性 <a class="header-anchor" href="#vue-set-改变数组和对象中的属性" aria-label="Permalink to &quot;Vue.set 改变数组和对象中的属性&quot;">​</a></h2><p>在一个组件实例中，只有在data里初始化的数据才是响应的，Vue不能检测到对象属性的添加或删除，没有在data里声明的属性不是响应的,所以数据改变了但是不会在页面渲染； **解决办法：**使用 Vue.set(object, key, value) / vm.$set(obj, key, val)方法将响应属性添加到嵌套的对象上。</p><h2 id="第一次页面加载会触发哪几个钩子" tabindex="-1">第一次页面加载会触发哪几个钩子 <a class="header-anchor" href="#第一次页面加载会触发哪几个钩子" aria-label="Permalink to &quot;第一次页面加载会触发哪几个钩子&quot;">​</a></h2><p>第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子。</p><h2 id="vue组件通信有哪些方式" tabindex="-1">vue组件通信有哪些方式 <a class="header-anchor" href="#vue组件通信有哪些方式" aria-label="Permalink to &quot;vue组件通信有哪些方式&quot;">​</a></h2><ol><li>父传子：props 父组件通过 props 向下传递数据给子组件。注：组件中的数据共有三种形式：data、props、computed</li><li>子传父：通过自定义事件形式 子组件通过 $emit()给父组件发送消息，父组件通过v-on绑定事件接收数据。</li><li>父子、兄弟、跨级：eventBus.js全局事件总线 这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心）,用它来（e m i t ） 触 发 事 件 和 （ emit）触发事件和（emit）触发事件和（on）监听事件，巧妙而轻量地实现了任何组件间的通信。</li><li>通信插件：PubSub.js 消息订阅与发布。</li><li>vuex vuex 是 vue 的状态管理器，存储的数据是响应式的。只需要把共享的值放到vuex中，其他需要的组件直接获取使用即可。</li></ol><h2 id="computed-和-watch-的区别" tabindex="-1">Computed 和 Watch 的区别 <a class="header-anchor" href="#computed-和-watch-的区别" aria-label="Permalink to &quot;Computed 和 Watch 的区别&quot;">​</a></h2><h3 id="computed" tabindex="-1">Computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;Computed&quot;">​</a></h3><p><strong>作用</strong></p><ol><li>解决模板中放入过多的逻辑会让模板过重且难以维护的问题。例如两个数据的拼接或字体颜色的判断。</li><li>它<strong>支持缓存</strong>，只有依赖的数据发生了变化，才会重新计算。例如模板中多次用到数据拼接可以用计算属性，只执行一次计算，除非数据发生变化。</li><li><strong>不支持异步</strong>，如果有异步操作，无法监听数据的变化。</li><li>如果属性值是函数，默认使用get方法，函数的返回值就是属性的属性值。还有一个set方法，当数据变化时就会调用set方法。</li><li>computed的值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的。</li></ol><h3 id="watch" tabindex="-1">Watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;Watch&quot;">​</a></h3><p><strong>作用</strong></p><ol><li>它不支持缓存，数据变化时，它就会触发相应的操作。</li><li>支持异步监听。</li><li>接受两个参数，第一个是最新的值，第二个是变化之前的值。</li><li>监听data或者props传来的数据，发生变化时会触发相应操作。</li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ol><li><strong>computed</strong> 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。</li><li><strong>watch</strong> 侦听器 : 更多的是观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。</li></ol><h3 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h3><ol><li><strong>computed</strong>：是多对一，多个数据影响一个。当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。</li><li>watch：是一对多，一个数据发生变化，执行相应操作会影响多个数据。当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</li></ol><h2 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h2><p>逻辑复用，跟操作DOM有关。对普通DOM元素进行底层操作。</p><ol><li>bind：指令与元素成功绑定时调用。</li><li>inserted：指令所在元素被插入页面时调用。</li><li>update：指令所在模板结构被重新解析时调用。</li></ol><h2 id="router路由" tabindex="-1">router路由 <a class="header-anchor" href="#router路由" aria-label="Permalink to &quot;router路由&quot;">​</a></h2><h3 id="路由跳转" tabindex="-1">路由跳转 <a class="header-anchor" href="#路由跳转" aria-label="Permalink to &quot;路由跳转&quot;">​</a></h3><ol><li><p>声明式路由导航 <code>&lt;router-link to=&quot;/about&quot;&gt;About&lt;/router-link&gt;</code></p></li><li><p>编程式路由导航 不借助<code>&lt;router-link&gt; </code>实现路由跳转，让路由跳转更加灵活</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   	</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   	   </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">   		  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">xxx</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   		  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">   		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">xxx</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forward</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">//前进</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">back</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">//后退</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">//可前进也可后退</span></span></code></pre></div></li></ol><p>push和replace的区别： push 跳转到对应的路由，这个方法会向history栈添加一个记录，点击后退会返回到上一个页面。 replace同样是跳转到指定的路由，但是这个方法不会向history里面添加新的记录，而是替换（覆盖）掉当前路由，点击返回，会跳转到上上一个页面。</p><h2 id="如何区别-router与-route" tabindex="-1">如何区别 $router与 $route <a class="header-anchor" href="#如何区别-router与-route" aria-label="Permalink to &quot;如何区别 $router与 $route&quot;">​</a></h2><h3 id="router" tabindex="-1">$router <a class="header-anchor" href="#router" aria-label="Permalink to &quot;$router&quot;">​</a></h3><p>router是VueRouter的实例方法，相当于一个全局的路由器对象，作用是进行路由跳转的！就像jQuery里的window.location一样，起到的是导航的作用。里面含有很多属性和子对象，例如history对象，导航到不同url，可以使用this。</p><h3 id="route" tabindex="-1">$route <a class="header-anchor" href="#route" aria-label="Permalink to &quot;$route&quot;">​</a></h3><p>route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name、meta、path、hash、query、params、fullPath、matched、redirectedFrom等。</p><h2 id="路由参数" tabindex="-1">路由参数 <a class="header-anchor" href="#路由参数" aria-label="Permalink to &quot;路由参数&quot;">​</a></h2><h3 id="query参数" tabindex="-1">query参数 <a class="header-anchor" href="#query参数" aria-label="Permalink to &quot;query参数&quot;">​</a></h3><p><strong>传递参数</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 跳转并携带query参数，to的字符串写法 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/message/detail?id=666&amp;title=你好</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">跳转</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 跳转并携带query参数，to的对象写法 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">:to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">      path:&#39;/home/message/detail&#39;,</span></span>
<span class="line"><span style="color:#C3E88D;">      query:{</span></span>
<span class="line"><span style="color:#C3E88D;">         id:666,</span></span>
<span class="line"><span style="color:#C3E88D;">         title:&#39;你好&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">      }</span></span>
<span class="line"><span style="color:#C3E88D;">   }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">跳转</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>接收参数</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span></span></code></pre></div><h3 id="params参数" tabindex="-1">params参数 <a class="header-anchor" href="#params参数" aria-label="Permalink to &quot;params参数&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiangqing</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">detail/:id/:title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//使用占位符声明接收params参数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">Detail</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>传递参数</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/message/detail/666/你好</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">跳转</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">:to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">      name:&#39;xiangqing&#39;,</span></span>
<span class="line"><span style="color:#C3E88D;">      params:{</span></span>
<span class="line"><span style="color:#C3E88D;">         id:666,</span></span>
<span class="line"><span style="color:#C3E88D;">            title:&#39;你好&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">      }</span></span>
<span class="line"><span style="color:#C3E88D;">   }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">跳转</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">router-link</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><blockquote><p>特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！</p></blockquote><p><strong>接收参数</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span></span></code></pre></div><h2 id="缓存路由组件" tabindex="-1">缓存路由组件 <a class="header-anchor" href="#缓存路由组件" aria-label="Permalink to &quot;缓存路由组件&quot;">​</a></h2><p><code>keep-alive</code>是Vue的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁。 作用：<code>keep-alive</code>用来缓存组件，<strong>避免多次加载相同的组件</strong>，减少性能消耗，提高用户体验。</p><h2 id="路由器的两种工作模式" tabindex="-1">路由器的两种工作模式 <a class="header-anchor" href="#路由器的两种工作模式" aria-label="Permalink to &quot;路由器的两种工作模式&quot;">​</a></h2><ol><li>对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。</li><li>hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。</li><li>hash模式： <ul><li>地址中永远带着#号，不美观 。</li><li>若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。</li><li>兼容性较好。</li></ul></li><li>history模式： <ul><li>地址干净，美观 。</li><li>兼容性和hash模式相比略差。</li><li>应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。</li></ul></li></ol><h2 id="路由的生命周期" tabindex="-1">路由的生命周期 <a class="header-anchor" href="#路由的生命周期" aria-label="Permalink to &quot;路由的生命周期&quot;">​</a></h2><ol><li>作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。</li><li>具体名字： <ol><li><code>activated</code>路由组件被激活时触发。</li><li><code>deactivated</code>路由组件失活时触发。</li></ol></li></ol><h2 id="路由守卫" tabindex="-1">路由守卫 <a class="header-anchor" href="#路由守卫" aria-label="Permalink to &quot;路由守卫&quot;">​</a></h2><h3 id="全局路由守卫" tabindex="-1">全局路由守卫 <a class="header-anchor" href="#全局路由守卫" aria-label="Permalink to &quot;全局路由守卫&quot;">​</a></h3><p><strong>全局前置路由守卫</strong> router.beforeEach((to,from,next)=&gt;{})    在路由跳转前触发，主要是用于登录验证</p><p><strong>全局解析路由守卫</strong> router.beforeResolve((to,from,next)=&gt;{})    和 router.beforeEach 类似，因为它在每次导航时都会触发，但是确保在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被正确调用。</p><p><strong>全局后置路由守卫</strong> router.afterEach((to,from,next)=&gt;{})    路由跳转完成后触发，该钩子只有两个参数to和from。</p><h3 id="独享路由守卫" tabindex="-1">独享路由守卫 <a class="header-anchor" href="#独享路由守卫" aria-label="Permalink to &quot;独享路由守卫&quot;">​</a></h3><p>router.beforeEnter((to,from,next)=&gt;{})    路由对象单个路由配置 ，单个路由进入前触发</p><h3 id="组件内路由守卫" tabindex="-1">组件内路由守卫 <a class="header-anchor" href="#组件内路由守卫" aria-label="Permalink to &quot;组件内路由守卫&quot;">​</a></h3><p><strong>组件内前置路由守卫</strong></p><p>beforeRouteEnter:(to,from,next)=&gt;{}    beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。    不过，你可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数：</p><p><strong>组件内更新路由守卫</strong> beforeRouteUpdate:(to,from,next)=&gt;{}    在当前路由改变时，并且该组件被复用时调用，可以通过this访问实例。</p><p><strong>组件内后置路由守卫</strong> beforeRouteLeave:(to,from,next)=&gt;{}    导航离开该组件的对应路由时调用，可以访问组件实例this。</p>`,68);function b(s,f,C,q,x,A){return n(),t("div",null,[p,a("ol",null,[i,c,h,u,d,y,D,F,m,a("li",null,"v-cloak：本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。使用css配合v-cloak可以解决网速慢时页面展示出"+e(s.xxx)+"的问题。",1),a("li",null,"v-text：向其所在的节点渲染文本内容。与插值语法的区别： v-text会替换节点中的内容， "+e(s.xx)+"不会。",1),a("li",null,"v-html：向指定节点渲染包含html结构的内容。v-html会替换掉节点的所有内容，"+e(s.xxx)+"不会，v-html可以识别html结构。**注意：**在网站上动态渲染任意html时非常危险的，容易导致xss攻击；一定要在可信的内容上使用v-html，永远不要用在用户提交的内容上。",1)]),v])}const P=o(r,[["render",b]]);export{k as __pageData,P as default};
