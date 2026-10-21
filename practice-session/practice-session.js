/* 
Practice session
Project:
Open index.html with Live Server. There is a list of 6 statements.
It's your job to assess whether they're true or not.
Use JavaScript to add a comment under each statement that says one of the following 3 things:
"That is true, I looked it up."
"That is not true at all."
"That is the silliest thing I've ever heard!"

Look at the example screenshot of what a commented statement looks like.
Hint 1 - Examine the HTML of each statement so you can determine which tags to select.
Hint 2 - Add a unique id to each tag where you need to add JavaScript
Hint 3 - Don't forget to use the script tag to link to this file.
Hint 4 - Use variables to save yourself some repetitive typing.
*/

const trueComment = "That is true, I looked it up."
const falseComment = "That is not true at all."
const sillyComment = "That is the silliest thing I've ever heard!"

document.getElementById("comment1").textContent = trueComment

document.getElementById("comment2").textContent = falseComment

document.getElementById("comment3").textContent = trueComment

document.getElementById("comment4").textContent = trueComment

document.getElementById("comment5").textContent = trueComment

document.getElementById("comment6").textContent = falseComment