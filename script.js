
    //window.alert("Good Morning");
    // declare a variable to hold container div
    let container = document.getElementById("container");
    //assign the content of div container with p element
    container.innerHTML =" <h1>this is inside div</h1><p>This is inside div</p>";
    //set color of the container in red
    container.style.color = "red";

    let ptag = document.getElementById("ptag");

    ptag.innerText = "Update p tag content"


    let btnGoBack = document.getElementById("btnGoBack");
    btnGoBack.onclick = function() {
        history.back();
    }
    //declare a variable to hold button element
    let button = document.getElementById("btnClickMe"); // using let var, const keyword to declare the variable
    // handle the click event by associating it with a function
    button.onclick = function(){
       // window.alert('Thanks for your order! We appreciate your business.')
        document.write("<p>This is the end</p>")

    }

    //declare variable to hold header
    let header = document.getElementsByTagName("h1")[0]; //get the first h1 element
    let footer = document.getElementsByTagName("h1")[2];
    //handle the event when mouse over the header
    header.onmouseover = function() {
        header.style.color = 'blue';
    }

    //handle the event when mouse over the header
    header.onmouseout = function() {
        header.style.color = 'black';
    }

    footer.onclick = function (){
        console.log("footer is clicked")
        
        footer.style.fontSize = "40px";
    }
//declare a variable to work with input text usernmae
    let username = document.getElementById("username");
//add the action to event change
    username.onchange = function () {
        container.innerHTML = username.value
        //window.alert("User have input" + username.value)
    }

    function handleChange() {
        let username = document.getElementById("username")
        container.innerHTML = username.value
    }