# collapseDemo
原生`JavaScript`有过渡效果的折叠面板

我们知道`display:none`是不能产生过渡效果的，而且折叠面板要展开的内容如果不固定，那么内容容器的高度就只能为`auto`,高度为`auto`也是不能产生过渡效果的.

这里利用了`element.offsetHeight`,据说`offsetHeight`会中断`css`的渲染，中断前会把之前已渲染的`css`属性当作已应用样式缓存起来，那么`offsetHeight`之后的`css`属性以此样式为初始样式进行渲染。不过这只是从这种现象的表现推论出的解释，并不一定是真正的原因。


-----

`2019-10-27`更新
最近看到`css`的重绘和回流，发现这种现象应该是`offsetHeight`属性导致的回流造成的。

另外列出常见会导致回流的属性和方法：

```
clientWidth、clientHeight、clientTop、clientLeft
offsetWidth、offsetHeight、offsetTop、offsetLeft
scrollWidth、scrollHeight、scrollTop、scrollLeft
scrollIntoView()、scrollIntoViewIfNeeded()
getComputedStyle()
getBoundingClientRect()
scrollTo()
```
