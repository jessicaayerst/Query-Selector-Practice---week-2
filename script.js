// ----------------- Lightning Exercise One -------------------//
// Create an index.html file
// Use the shift + ! shortcut to generate some boilerplate HTML.
// Create a header element and give it an id of "main-header"
// Create two p elements and give them each a class of "body-text"

// ------------------- Lightning Exercise Two ------------------//
// Create a JavaScript file and link it to your index.html file.
// Use document.querySelector to get a reference to the element with an id of "main-header"
// Log the reference to the console
// Add a class of "blue-text" to the element
// Add a style rule for the "blue-text" class to your style.css sheet



const mainHeader = document.querySelector("header")
console.log(mainHeader)
mainHeader.classList.add("blue-text")
mainHeader.textContent = "Hello!"

const htmlString = `<h1 class="red-text">My awesome blog</h1>
<h2 class="blue-text">By me</h2>`

mainHeader.innerHTML = htmlString


//----------------------- Lightning Exercise Three---------------//
// In your JavaScript file, use document.querySelectorAll to select all of the elements in your HTML file with a class of "body-text"
// Log the reference to the console
// Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"


const bodyTextParagraphs = document.querySelectorAll(".body-text")
console.log(bodyTextParagraphs)

for(let i = 0; i< bodyTextParagraphs.length; i++){
    console.log(bodyTextParagraphs[i])
    bodyTextParagraphs[i].innerHTML = "Hello, World!"
}

// for(var i = 0; i < bodyText.clientHeight; i++){
//     bodyTextParagraphs[i].innerHTML = "Hello, world!"
//     console.log(bodyText[i])
// }