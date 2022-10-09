import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(Notify);

const formEl = document.querySelector('form')

formEl.addEventListener("submit", onSubmit)

console.log("hi1");
function createPromise(position, delay) {
  return new Promise((resolt, rejekt) => {
   
    setTimeout(()=>{   
  const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
    resolt({position, delay})
      } else {
    rejekt({position, delay})
       }},delay);
 }
    )
 }

function onSubmit(event) {
  event.preventDefault()
  const elements = event.currentTarget.elements
  const delay = Number(elements.delay.value);
  const step = Number(elements.step.value);
  const amount = Number(elements.amount.value);
  for(let i = 0; i < amount; i+=1){
console.log("interval", delay + step*i);
console.log("i", i);
  createPromise(i+1, delay + step*i)
.then(({ position, delay }) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
 })
.catch(({ position, delay }) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
});
}
}









