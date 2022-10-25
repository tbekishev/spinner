
const symb = ['|','/','-','\\','|'];
let timer =100;
for (let i = 0; i < symb.length; i++){
  setTimeout(() => {
    process.stdout.write(`\r${symb[i]}   `);
  }, timer);
  timer += 200;
}