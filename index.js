import refs from './scripts/refs.js';
import Timer from "./scripts/timer.js";

// -------------варіант 1 імперативне програмування-------------
// const NEW_YEAR = new Date('01.01.2024 00:00'); 
// const handleTime = () => {
// 	const now = new Date();
// 	const timeDifference = NEW_YEAR - now;

// 	const daysLeft = Math.floor(timeDifference / 86400000);
// 	const hoursLeft = Math.floor((timeDifference % 86400000) / 3600000);
// 	const minutesLeft = Math.floor((timeDifference % 3600000) / 60000);
// 	const secondLeft = Math.floor((timeDifference % 60000) / 1000);

// 	attachToElement(refs.functionalTimerEl, {
// 		daysLeft,
// 		hoursLeft,
// 		minutesLeft,
// 		secondLeft
// 	});
// };

// const attachToElement = (
// 	el,
// 	{ daysLeft, hoursLeft, minutesLeft, secondLeft }
// ) => {
// 	const timeLeftValue = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondLeft}s`;
	
// 	el.textContent = timeLeftValue;

// }

// let timer = setInterval(handleTime, 1000);

// refs.stopTimerEl.addEventListener("click", () => {
// 	clearInterval(timer);
// });
// refs.startTimerEl.addEventListener("click", () => {
// 	clearInterval(timer);
// 	timer = setInterval(handleTime, 1000);
// });

// -------------варіант 2 декларативне програмування-------------


const timer = new Timer(classTitle, 1000);
// можна прибрати timer.start(); щоб таймер з'являвся при старті
timer.start();

refs.stopTimerEl.addEventListener("click", () => timer.stop());
refs.startTimerEl.addEventListener("click", () => timer.start());