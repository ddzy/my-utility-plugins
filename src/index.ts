import quickSort from "./ddzy/utility/algorithm/sort/quick-sort";

const s1 = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
const p1 = quickSort(s1);
console.log(p1);

const s2: number[] = [];
const p2 = quickSort(s2);
console.log(p2);

const s3 = [1, 2, 3, 4, 5];
const p3 = quickSort(s3);
console.log(p3);

const s4 = [3, 3, 3, 3, 3];
const p4 = quickSort(s4);
console.log(p4);

const s5 = [5, 4, 3, 2, 1];
const p5 = quickSort(s5);
console.log(p5);

const s6 = [1];
const p6 = quickSort(s6);
console.log(p6);

const s7 = [1045, 765, 32, 678, 98, 14, 20000];
const p7 = quickSort(s7);
console.log(p7);