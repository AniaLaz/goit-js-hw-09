const inputDelay = document.querySelector('[name="delay"]')
const inputStep = document.querySelector('[name="step"]')
const inputAmount= document.querySelector('[name="amount"]')
console.log(inputDelay.value);
console.log(inputStep.value);
console.log(inputAmount.value);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    position
  } else {
    // Reject
  }
}


// createPromise(2, inputDelay.value)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });