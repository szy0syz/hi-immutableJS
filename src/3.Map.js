// Map 对应原生 js 的 Object 结构，它是无序的
const { Map } = require('immutable');

// Map也是工厂方法，不要使用 new 实例化

// set 设定值 set(key, val)

// delete 删除值 delete(key) 返回新的 Map
const d1 = Map({
  name: 'aaa',
  age: 18,
});
// d2 是个新数组
const d2 = d1.delete('age');
console.log(d2);

// deleteAll 批量删除 deleteAall([key1, key2, ... keyN])

// clear 清除所有返回 新Map

// update 更新

// merge 合成 N 个 Map 为一个新 Map
// concat 是 merge 的别名

// mergeWith 类似于 merge，但是指定了 merge 的具体规则

// setIn 设置嵌套对象的值
// setIn([1层key,2层key, ...N层key], value)

// 同样的操作还有 deleteIn, updateIn, mergeIn

// toJS 把 map 转换成原生 object，深转换

// toJSON 把 map 转换成原生 Object，浅转换，只转第一层

// equals 两个 map 的值是否相等
const map1 = Map({ x: 1, y: 2 });
const map2 = Map({ x: 1, y: 2 });
console.log('map1===map2', map1 === map2);  // -> false
console.log('map1.equals(map2)', map1.equals(map2)); // -> true

// flatten 扁平化这个 Map，用法和 List 的一样

// has 判断是否有指定 key

// includes 判断是否有指定value
