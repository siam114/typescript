const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2,3));

const getLargerName = (name1: string, name2: string):string =>{
    if(name1.length > name2.length){
        return name1
    }
    return name2
}

const biggerName = getLargerName('alis', 'smsiam')
console.log(biggerName);