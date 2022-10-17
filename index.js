const testInput = document.getElementById('test-input');
const testButton = document.getElementById('test-button');

const runTimers = () => {
  if (testInput.value === '' || testInput.value === null) return;

  const myArray = Array(Number(testInput.value));

  console.time('for');
  for (let i = 0; i < myArray.length; i++) {}
  console.timeEnd('for');

  console.time('forEach');
  myArray.forEach(() => {});
  console.timeEnd('forEach');

  console.time('forOf');
  for (const iterator of myArray) {
  }
  console.timeEnd('forOf');

  console.time('while');
  let j = 0;
  while (j < myArray.length) {
    j++;
  }
  console.timeEnd('while');
};

testButton.addEventListener('click', runTimers);
