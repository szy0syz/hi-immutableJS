// OrderMap 有序的 map，迭代输出的顺序是条用 set 的顺序
// 会造成有更高的性能开销
const { OrderedMap } = require('immutable');

const map = OrderedMap({});
const map2 = map.set('z', 1);
const map3 = map2.set('x', 2);

map3.forEach((v, k) => console.log(k, v)); // 先z 再x
