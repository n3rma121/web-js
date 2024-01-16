
  

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/batman.png"){
        myImage.setAttribute("src", "images/next.png");
    }else{
        myImage.setAttribute("src", "images/batman.png");
    }
    
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is cool, ${myName}`;
}
myButton.onclick = () => {
    setUserName();
  };
  