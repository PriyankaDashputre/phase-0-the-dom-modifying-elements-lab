// Write your code here!
/* Part 1 */
document.querySelector('main')

main.remove()

/* Part 2 */
//const newHeader = document.querySelector('h1#victory');

const newHeader = document.createElement('h1')

newHeader.id = 'victory';
//const id = document.createElementById.append('')

/* Part 3 */
//newHeader.textContent = "Priyanka is the champion";

const victory = document.getElementById("victory");
newHeader.innerHTML = "Priyanka is the champion";