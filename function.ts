function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2,5));


function greet(name: string, age?: number): void {
  console.log(name, age);
}

console.log(greet('siam'));
console.log(greet("Siam", 22));