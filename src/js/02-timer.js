import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const inputEl = document.querySelector('#datetime-picker');
const butnStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const currentDate = new Date()
const currentTime = currentDate.getTime()

console.log('currentDate :', currentDate);
// console.log("calendar :", options.defaultDate);

inputEl.addEventListener('input', onCalendar)


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0].getHours());
       },
  };

  const dataPickr = new flatpickr(inputEl, options)

butnStart.disabled = true;


function onCalendar() {
  console.log("hi");
  // console.log("calendar :", options.defaultDate.getHours());
  console.log("calendar Hours:", dataPickr.selectedDates.selectedDates[0].getHours())
  console.log("calendar Minutes:", dataPickr.selectedDates.selectedDates[0].getMinutes())
  console.log("calendar Seconds:", dataPickr.selectedDates.selectedDates[0].getSeconds())


  dataHours.textContent = dataPickr.selectedDates.selectedDates[0].getHours();
  dataMinutes.textContent = dataPickr.selectedDates.selectedDates[0].getMinutes();
  dataSeconds.textContent = dataPickr.selectedDates.selectedDates[0].getSeconds();
 }





