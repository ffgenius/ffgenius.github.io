import{_ as a,o as e,c as t,V as i}from"./chunks/framework.d3b95951.js";const f=JSON.parse('{"title":"css","description":"","frontmatter":{"prev":{"text":"HTML","link":"/interview/html"},"next":{"text":"JavaScript","link":"/interview/javascript"}},"headers":[],"relativePath":"interview/css.md","filePath":"interview/css.md"}'),r={name:"interview/css.md"},o=i('<h1 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h1><h2 id="盒子模型" tabindex="-1">盒子模型 <a class="header-anchor" href="#盒子模型" aria-label="Permalink to &quot;盒子模型&quot;">​</a></h2><p><strong>IE盒子模型 border-box</strong></p><p>IE盒模型：属性width，height包含content、border和padding，指的是content+padding+border。</p><p><strong>W3C盒子模型 content-box</strong></p><p>W3C标准盒模型：属性width，height只包含内容content，不包含border和paddin</p><h2 id="before-和-after-中双冒号和单冒号有什么区别" tabindex="-1">::before 和:after 中双冒号和单冒号有什么区别 <a class="header-anchor" href="#before-和-after-中双冒号和单冒号有什么区别" aria-label="Permalink to &quot;::before 和:after 中双冒号和单冒号有什么区别&quot;">​</a></h2><p>在css3中使用单冒号来表示伪类，用双冒号来表示伪元素。但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号来表示伪元素。</p><p>伪类一般匹配的是元素的一些特殊状态，如hover、link等，而伪元素一般匹配的特殊的位置，比如after、before等</p><h2 id="定位" tabindex="-1">定位 <a class="header-anchor" href="#定位" aria-label="Permalink to &quot;定位&quot;">​</a></h2><h3 id="absolute" tabindex="-1">absolute <a class="header-anchor" href="#absolute" aria-label="Permalink to &quot;absolute&quot;">​</a></h3><p>absolute定位的元素，是相对于它的第一个position值不为static的祖先元素的paddingbox来进行定位的。这句话我们可以这样来理解，我们首先需要找到绝对定位元素的一个position的值不为static的祖先元素，然后相对于这个祖先元素的paddingbox来定位，也就是说在计算定位距离的时候，padding的值也要算进去。</p><h3 id="relative" tabindex="-1">relative <a class="header-anchor" href="#relative" aria-label="Permalink to &quot;relative&quot;">​</a></h3><p>生成相对定位的元素，相对于其元素本身所在正常位置进行定位。</p><h3 id="fixed-老ie不支持" tabindex="-1">fixed（老IE不支持） <a class="header-anchor" href="#fixed-老ie不支持" aria-label="Permalink to &quot;fixed（老IE不支持）&quot;">​</a></h3><p>生成绝对定位的元素，相对于浏览器窗口进行定位。</p><h3 id="static" tabindex="-1">static <a class="header-anchor" href="#static" aria-label="Permalink to &quot;static&quot;">​</a></h3><p>默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。</p><h3 id="inherit" tabindex="-1">inherit <a class="header-anchor" href="#inherit" aria-label="Permalink to &quot;inherit&quot;">​</a></h3><p>规定从父元素继承position属性的值。</p><h2 id="css3-有哪些新特性" tabindex="-1">CSS3 有哪些新特性 <a class="header-anchor" href="#css3-有哪些新特性" aria-label="Permalink to &quot;CSS3 有哪些新特性&quot;">​</a></h2><ol><li>新增各种CSS选择器 （:not(.input)：所有class不是“input”的节点）</li><li>圆角 （border-radius:8px）</li><li>多列布局 （multi-columnlayout）</li><li>阴影和反射 （Shadow\\Reflect）</li><li>文字特效 （text-shadow）</li><li>文字渲染 （Text-decoration）</li><li>线性渐变 （gradient）</li><li>旋转 （transform）</li><li>缩放，定位，倾斜，动画，多背景</li><li>例如：transform:\\scale(0.85,0.90)\\translate(0px,-30px)\\skew(-9deg,0deg)\\Animation</li></ol><h2 id="width-auto-和-width-100-的区别" tabindex="-1">width:auto 和 width:100%的区别 <a class="header-anchor" href="#width-auto-和-width-100-的区别" aria-label="Permalink to &quot;width:auto 和 width:100%的区别&quot;">​</a></h2><p>width:100%会使元素box的宽度等于父元素的contentbox的宽度。</p><p>width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。</p><h2 id="清除浮动" tabindex="-1">清除浮动 <a class="header-anchor" href="#清除浮动" aria-label="Permalink to &quot;清除浮动&quot;">​</a></h2><ol><li>clear:both</li><li>overflow:hidden</li><li>after伪元素清除浮动</li><li>before和after双伪元素清除浮动</li><li>父级div定义 height</li></ol>',27),l=[o];function n(s,d,h,c,p,b){return e(),t("div",null,l)}const x=a(r,[["render",n]]);export{f as __pageData,x as default};
