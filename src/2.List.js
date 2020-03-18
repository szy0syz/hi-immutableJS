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
// l.set(6, 666); //* 将 List 扩展到size为6，设置索引6为666，中间没有的 undefined