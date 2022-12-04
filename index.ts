// Import stylesheets
import './style.css';
import { Day2 as Day } from './days';

// Write TypeScript code!
const day: Day = new Day();
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Result in ${day.gedDayAsString()}</h1>
<hr />
<span>${day.resolve()}</span>`;
