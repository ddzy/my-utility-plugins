import utilityAlgorithm from "./ddzy/utility/algorithm";


const reflect = utilityAlgorithm.ES6Achieve._reflect;
const obj = {
  name: 'ddzy',
  age: 21,
};

// ? reflect
// console.log(reflect);

// ? reflect.get
// const p1 = reflect.get(obj, 'name');
// const p2 = reflect.get(obj, 'skill');
// console.log(p1);
// console.log(p2);

// ? reflect.set
// const p1 = reflect.set(obj, 'skill', 'program');
// const p2 = reflect.set(obj, 'hobby', ['run', 'play-game']);
// console.log(p1);
// console.log(p2);
// console.log(obj);




// ! -------------------------------------------

// ? Reflect.construct
// const p1 = Reflect.construct(Person, []);
// const p2 = Reflect.construct(Person2, []);
// console.log(p1);
// console.log(p2.say());

// ? Reflect.get
// const p1 = Reflect.get(obj, 'name');
// const p2 = Reflect.get(obj, 'skill');
// console.log(p1);
// console.log(p2);

// ? Reflect.has
// const p1 = Reflect.has(obj, 'name');
// const p2 = Reflect.has(obj, 'skill');
// console.log(p1);
// console.log(p2);

// ? Reflect.getPrototypeOf, 获取隐式原型, 相当于__proto__
// const p1 = Reflect.getPrototypeOf(obj);
// const p2 = new Person();
// console.log(p2);

// ? Reflect.setPrototypeOf
// Object.setPrototypeOf(p2, function() {});
// console.log(Object.getPrototypeOf(p2))
// console.log(p1);

// ? Reflect.set
// const p1 = Reflect.set(obj, 'skill', 'program');
// const p2 = Reflect.set(obj, [], []);
// console.log(p1);
// console.log(p2);
// console.log(obj);

// ? Reflect.deleteProperty
// const p1 = Reflect.deleteProperty(obj, 'age');
// const p2 = Reflect.deleteProperty(obj, 'skill');
// console.log(p1);
// console.log(p2);
// console.log(obj);

// ? Reflect.apply
// const p1 = Reflect.apply(Person2, obj, ['test']);
// const p2 = Reflect.apply(Person2, null, ['test']);
// const p3 = Reflect.apply(Person2, undefined, document.querySelectorAll('div'));
// const p4 = Reflect.apply(Person2, window, ['test']);