import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(Notify);

const inputEl = document.querySelector('#datetime-picker');
const butnStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let currentDate = new Date()
let currentTime = currentDate.getTime()
let calendarTime = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    //   console.log(selectedDates[0])
      if (currentTime <= calendarTime){
        butnStart.disabled = false;
        
      }
      else {
        butnStart.disabled = true;
        // window.alert("Please choose a date in the future");
        Notify.failure('Please choose a date in the future');
    }
       },
  };

const dataPickr = new flatpickr(inputEl, options)

inputEl.addEventListener('input', onCalendar)
butnStart.addEventListener('click', onCalendarTime)

butnStart.disabled = true;


function onCalendar() {
  calendarTime = dataPickr.selectedDates[0].getTime()
//   console.log('currentDate :', currentTime);
//   console.log("calendar :", calendarTime);
 }

 function onCalendarTime() {   

timerId = setInterval(() => {
    currentDate = new Date()
    currentTime = currentDate.getTime()

    const getTime = calendarTime - currentTime
    const objektTime = convertMs(getTime);
    // console.log(getTime);
    // console.log(calendarTime);
    // console.log(currentTime);
    
    if (getTime>0)
    {
    dataDays.textContent=addLeadingZero(objektTime.days);
    dataHours.textContent=addLeadingZero(objektTime.hours);
    dataMinutes.textContent=addLeadingZero(objektTime.minutes);
    dataSeconds.textContent=addLeadingZero(objektTime.seconds);
    }
    else {
    dataDays.textContent="00";
    dataHours.textContent="00";
    dataMinutes.textContent="00";
    dataSeconds.textContent="00";
    stopTimer(timerId) 
    // window.alert('time is over');
    Notify.info('time is over');
    }
},1000)
 }
 function stopTimer(timerId) {
    clearInterval(timerId);
   }

 function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  
  function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
