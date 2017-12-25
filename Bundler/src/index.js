import { sum } from './math.js';

// const sum = (n1, n2) => n1+n2;

window.addEventListener('load', async () => {
    const result = await new Promise(resolve => setTimeout(_ => resolve(sum(1, 2)), 1000)); 
    document.querySelector('#temp').innerHTML = `1 + 2 = ${result}`;
});
