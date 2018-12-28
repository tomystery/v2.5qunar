# 1. 基础

## 1. 1 细分几个生命周期


1. beforeCreate
2. created 
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroyed

页面一加载执行的是beforeCreate,created,beforeMount,mounted。

beforeUpdata是数据发生变化的时候发生的，updated是beforeUpdate之后虚拟dom重新渲染发生的。

beforeDestroy是销毁实例的
> * beforeDestroy以及destroyed没有测试
> * 在不是主页面的时候发现一打开页面就是updated


## 1.2 模版语法

1. `v-once`:在标签上使用，只会执行一次
2. `<button v-bind:disabled="isButtonDisabled">Button</button>`,isButtonDisabled为否定意味如null false underfined的时候不会显示出来
3. 修饰符 `.prevent`,阻止默认的事件
4. 模版只能使用单个的表达式，流控制(if)和语句(var a=2)都是不会生效的。

## 1.3 计算属性和桢听器

 1. computed和方法的不同，computed会进行缓存。只要数据源是没有变化的。^ - ^ `Date.now()`也是不会变化的

2. 计算属性默认是只有getter，但在需要时也可以提供一个setter.
3. $emit向父组件向上触发事件
 
> 侦听器，看不下去

## 1.4 事件处理



`<router-view>`-显示的就是当前路由组件对应的页面