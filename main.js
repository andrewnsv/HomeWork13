//1) Напишите код с ипользованим Промиса, который будет вывожить в консоль текст приветствия я через 3и секунды.

const greeting = new Promise ((resolve) => {
  setTimeout(() => {resolve("Hello teacher")}, 3000);
})

greeting.then(res => console.log(res));


// 2) используя async/await реализуйте функцию deleay:

function delay() {
  return new Promise ((resolve) => {
    setTimeout (() => resolve(), 4000)
  }) 
}

async function result() {
  console.log('first call');
  await delay();
  console.log('second call');
}

result(); 

//3) Задание на Promice all

function createDice() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    if (randomNum < 6) {
      reject(randomNum);
    } else {
      resolve(randomNum);
    }
  });
}

const promise1 = createDice();
const promise2 = createDice();
const promise3 = createDice();

Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(`You are lucky, your numbers ${res}`))
  .catch(() => console.log(`Not today`));