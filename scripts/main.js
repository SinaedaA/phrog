// add image changer
// store reference to my <img> element in myImg
const myImg = document.querySelector("img");

// create onclick event handler property equal to an anonymous function which executes the ifelse statement
myImg.onclick = () => {
    const mySource = myImg.getAttribute("src");
    if (mySource === "./images/phrog.webp") {
        myImg.setAttribute("src", "./images/phrog.png");
    } else {
        myImg.setAttribute("src", "./images/phrog.webp");
    }
};
// ./images/phrog.png
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name."); // prompt() dispays a dialog box
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName); // call on the storage API to store myName in the "name"
        myHeading.textContent = `Phrog is cool, right ${myName} ?`;
    }
}
// check if "name" exists in stored data
if (!localStorage.getItem("name")) {
    // if not, execute function setUserName()
    setUserName();
} else {
    // if it is, take the name and only execute last part of the function
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Phrog is cool, right ${storedName} ?`;
}
// add button to change name, in case it's not the right one
myButton.onclick = () => {
    setUserName();
};
