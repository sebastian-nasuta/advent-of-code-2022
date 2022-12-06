// Import stylesheets
import './style.css';
import { Day } from './days/day-4/day';

// Write TypeScript code!
const day: Day = new Day();
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `<h1>AOC - ${day.getDayAsString()}</h1>
<hr />
<h2>${day.resolve()}</h2>
<h2>${day.resolve2()}</h2>`;
