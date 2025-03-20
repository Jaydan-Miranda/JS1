

document.write("<p>This is the end</p> ");

//window.alert("Good Morning");
// declare a variable to hold container div
let container =  document.getElementById("container");
//assign the content of div container with p element
container.innerHTML =" <h1>This is inside div</h1><p> paragraph</p>plain text";
//set color of the container in red
container.style.color = "red";
//declare a variable to hold the h1

// declare a variable to work on p tag

let ptag = document.getElementById("ptag");

ptag.innerText = "Update p tag content";

let heater = document.getElementsByTagName("h1")[0];

let footer = document.getElementsByTagName("h1")[2];

// declare a variable to hold button element
let button = document.getElementById("btnClickMe"); //  using let, var, const keyword to declare the variable
// handle the click event by associate with an function
button.onclick = function(){
    //window.alert('Thanks for your order! We appreciate your business.');
    document.write("<p>This is the end</p> ");

}



let btnGoBack = document.getElementById("btnGoBack");
btnGoBack.onclick = function() {

    history.back();
}

//declare variable to hold the header
let header = document.getElementsByTagName("h1")[0]; // get the first h1 element

//handle the event when mouse over the header
header.onmouseover = function() {
    header.style.color = 'blue';
}


//handle the event when mouse out the header
header.onmouseout = function() {
    header.style.color = 'black';
}


footer.onclick = function () {
    console.log("footer is clicked");

    footer.style.fontSize ="40px";
}

// //declare a variable to work with input text username

// let username = document.getElementById("username");

// //add the action to event change

// username.onchange = function () {

//     //window.alert("User have input "+username.value);

//     container.innerHTML = username.value;
// }

function handleChange() {
    let username = document.getElementById("username");
    container.innerHTML = username.value

}