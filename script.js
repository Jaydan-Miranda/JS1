    window.alert("Good Morning");
    // declare a variable to hold container div
    let container = document.getElementById("container");
    //assign the content of div container with p element
    container.innerHTML =" <p>This is inside div</p>";
    //set color of the container in red
    container.style.color = "red";
    //declare a variable to hold button element
    let button = document.getElementById("btnClickMe"); // using let var, const keyword to declare the variable
    // handle the click event by associating it with a function
    button.onclick = function(){
        window.alert('Thanks for your order! We appreciate your business.')
    }
    //declare variable to hold header
    let header = document.getElementsByTagName("h1")[0]; //get the first h1 element

    //handle the event when mouse over the header
    header.onmouseover = function() {
        header.style.color = 'blue';
    }

    //handle the event when mouse over the header
    header.onmouseout = function() {
        header.style.color = 'black';
    }