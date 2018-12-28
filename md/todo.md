1. 查看双向绑定组件的js实现
2. 先看一遍文档，然后再测试一下
4. ~~flex:1~~
5. 配置webpack出现的data-随机码的出现
6. 查一下`axios`的原理
7. watch的原理
8. 过一点时间再执行，这个timeOut

```
if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
```
