const inputDelay = document.querySelector('[name="delay"]')
const formEl = document.querySelector('form')

console.log("hi1");
function createPromise(position, delay) {
  return new Promis((resolt, rejekt) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{   
      if (shouldResolve) {
      resolt("yes")
      resolve({position, delay})
        } else {
      rejekt("no")
      resolve({position, delay})
         }},delay);
 }
    )
 }

formEl.addEventListener("submit", onSubmit)

function onSubmit(event) {
  event.preventDefault()
  const elements = event.currentTarget.elements
  const delay = Number(elements.delay.value);
  const step = Number(elements.step.value);
  const amount = Number(elements.amount.value);
  console.log(delay);
  console.log(step);
  console.log(amount);
  for(let i = 0; i <= amount; i+=1){
    i=i+1
  console.log(i);
  createPromise(i, delay)
.then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});
  }

}






