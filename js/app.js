const storeName = "Le Grocerie'";
document.title = `${storeName} Grocery Store`;
console.log("What is in the document:", document.all); //document.all[23]

console.log("tag element: ", document.getElementsByTagName("p"));

let h1_OfHeader = document.getElementById("mainIntro");

// console.log(h1_OfHeader); checking

h1_OfHeader.innerHTML = "Welcome";

const getAllNavListClasses = document.querySelectorAll(".nav_list_item");

console.log("headers: ", getAllNavListClasses);

const getIconCredit = document.querySelector("#iconsCredit");

console.log(getIconCredit);

const imageExample = document.querySelector("img [alt='cherry icon']");

console.log(imageExample);

const magicButton = document.getElementById("magic");

console.log(magicButton);

magicButton.addEventListener("mouseover", () => 
{ 
    magicButton.className = "myPoint";
    magicButton.style.backgroundColor = "#000";

    console.log("enter", magicButton);

});

magicButton.addEventListener("mouseleave", () => { magicButton.className = ""});

document.addEventListener("keyup", () => { console.log("I am pressed.")});

document.addEventListener("keydown", () => { console.log(event.keyCode)});

const magicBackground = document.getElementById("content");

magicBackground.addEventListener("mouseover", () =>
{
    magicBackground.style.backgroundColor("#fff");
});