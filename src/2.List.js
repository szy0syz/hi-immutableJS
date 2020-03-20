// List

//! 创建List，注意：List是工厂方法，不能使用 new 初始化
const { List } = require('immutable');

// const mylist = new List([1,2,3,4]); //! ❌ 错误 ❌
const list = List([1, 2, 3, 4]);
console.log(list);

// 两个静态方法： List.isList() 和 List.of()
// List.isList() 判断是否是 List 类型
console.log('isList', List.isList(list)); // -> true
console.log('isList', List.isList([1, 2, 3])); // -> false

// List.of() 创建新List
const l = List.of(1, 2, 3, 4);

// size 属性取得 List 的长度
console.log('size:', l.size);

// set 方法用来设定指定下表的值 set(ind, val)
// l.set(0, 110);
// l.set(-1, 0); // 设置 List 的最后一个元素
// l.set(6, 666); //* 将 List 扩展到size为6，设置索引6为666，中间没有的 undefined

// delete 删除指定下表 delete(下标)

// insert 插入值 insert(下标，值)

// update 更新下标的值 update(idx, callback)
const u1 = List([1, 2, 3, 4]);
const u2 = u1.update(1, x => x + 100);

// clear 清空并返回一个长度为0的新数组

// push pop unshift shift 同数组方法

// setSize 重新设定数组涨肚，小于原数组长度会被截断，大于原数组会用undefined进行填充
const set1 = List([1, 2, 3, 4, 5]);
const set2 = set1.setSize(2); // -> [1,2]

// setIn() 用来设定嵌套结构的值 ([第一层下标，第二层下标, ...第N层下标], 值);
// arrx.setIn(["a", "b", "c"], 888);

// concat 链接List
const cl1 = List([1, 2]);
const cl2 = List([3, 4, 5]);
const cl3 = List([6]);

console.log('concat', cl1.concat(cl2, cl3));

// merge 是 concat 的别名

// map 通原生的 map，循环并返回 [新的数组]

// fliter 同元素filter，循环并过滤后返回 [新的数组]

// flatten 扁平化这个 list
// flatten(param) 参数是数组内嵌层数 或者 false 不定

// find 查找第一个符合的结果
// findLast 返回最后一个符合的结果

// keys 返回所有的下标
// values 返回所有的值
// entries 返回所有 entry

// groupBy 分组
const peoples = List([
  { sex: 'male', name: 'aaa' },
  { sex: 'male', name: 'bbb' },
  { sex: 'male', name: 'ccc' },
  { sex: 'demale', name: 'ddd' },
]);
// 返回的是 List 对象
const gp = peoples.groupBy(x => x.sex);
console.log(gp);
