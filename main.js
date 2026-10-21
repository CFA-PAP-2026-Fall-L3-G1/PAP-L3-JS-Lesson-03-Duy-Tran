/* Exercise 1 
1. In index.html, link to this file using the script tag.
2. Log the document in the console.
*/
console.log(document)

/* Exercise 2
1. Create a variable pageTitle
Set its value to the method getElementById. Pass the method the id of the h1 tag. 
2. Log pageTitle in the console
3. Create a variable pageTitle2
Set its value to the method querySelector. Pass the method the id of the h1 tag. Don't forget id syntax!
4. Log pageTitle2 in the console
*/
const pageTitle = document.getElementById('page-title')
console.log(pageTitle)

const pageTitle2 = document.querySelector('#page-title')
console.log(pageTitle2)


/* Exercise 3
1. Log the textContent of the pageTitle in the console
2. Change text content of the h1 tag to "Moon Facts"
3. Create a variable fact1
Give it a value of a string, pick one of the facts from moon-facts.txt
4. Use the DOM to select the p tag inside the first div
5. Set its textContent to fact1
*/
let pageTitleText = pageTitle.textContent
console.log(pageTitleText)

pageTitle.textContent = "Moon Facts"

let fact1 = "The moon is drifting away from earth"
const factOneTag = document.getElementById('moon-fact-1')
factOneTag.textContent = fact1


/* Exercise 4
1. Use the DOM to select the div with id moon-fact-2
2. Set its innerHTML to a p tag with class fact and containing the text of another fact from moon-facts.txt
Hint - remember to escape the quote marks inside the p tag.
3. Use an assignment operator you learned in the last lesson so the flag doesn't disappear.
4. Do the same thing for moon-fact-3, moon-fact-4, moon-fact-5
*/
const moonFactTwo = document.getElementById('moon-fact-2')
let fact2 = '<p class ="fact">The Moon is Earths\' only natural satellite.</p>'
moonFactTwo.innerHTML += fact2;

const moonFactThree = document.getElementById('moon-fact-3')
let fact3 = '<p class ="fact">The Moon\'s gravity is about 1/6 of Earth\'s.</p>'
moonFactThree.innerHTML += fact3;

const moonFactFour = document.getElementById('moon-fact-4')
let fact4 = '<p class ="fact">The Moon takes about 27.3 days to orbit Earth.</p>'
moonFactFour.innerHTML += fact4;

const moonFactFive = document.getElementById('moon-fact-5')
let fact5 = '<p class ="fact">The Moon has almost no atmosphere.</p>'
moonFactFive.innerHTML += fact5;

const moonFactSix = document.getElementById('moon-fact-6')
let fact6 = '<p class ="fact">liens are on the moon...</p>'
moonFactSix.innerHTML += fact6;


/* Exercise 5
1. Use the DOM to select the image tag with id "secret"
2. Use the src property to change the pin image to alien-ship.png
3. Select the div tag and add a p tag to its innerHTML 
Add some text inside the p tag about a secret alien moon base.
*/
const pinImage = document.querySelector('#secret')
pinImage.src = "alien-ship.png"