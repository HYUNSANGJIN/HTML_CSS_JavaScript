function foo(num) {
  let loop = 1;
  while (loop < 5) {
    for (let i = 1; i <= 9; i++) {
      let result = "";
      for (let j = num; j < num + 4; j++) {
        result += `${j} * ${i} = ${j * i}  `;
      }
      loop++;
      console.log(result);
    }
  }
}
foo(2);
console.log(" ");
foo(6);
