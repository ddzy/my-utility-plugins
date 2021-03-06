import sameValueZero from "./ddzy/utility/others/sameValueZero";

let a = Symbol('a');
let b = Symbol('b');
let c = [1, 2, 3];
let d = { a, b, c };

const received = [
  {
    a: 10,
    b: 'duan',
  },
  {
    a: undefined,
    b: undefined,
  },
  {
    a: null,
    b: null,
  },
  {
    a: NaN,
    b: NaN,
  },
  {
    a: +0,
    b: -0,
  },
  {
    a: -0,
    b: +0,
  },
  {
    a: 999,
    b: 999,
  },
  {
    a: 99999,
    b: 11111,
  },
  {
    a: 'duan',
    b: 'duan',
  },
  {
    a: 'duan',
    b: 'duanzhaoyang',
  },
  {
    a: true,
    b: true,
  },
  {
    a: true,
    b: false,
  },
  {
    a: a,
    b: b,
  },
  {
    a: a,
    b: a,
  },
  {
    a: c,
    b: d,
  },
  {
    a: c,
    b: c,
  },
];

const expected = received.map((v) => {
  return sameValueZero(v.a, v.b);
});

console.log(expected);