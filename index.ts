// Import stylesheets
import './style.css';
import { Main } from './main';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Result in ${Main.getDay().gedDayAsString()}</h1>
<hr />
<span>${Main.getDay().resolve()}</span>`;
