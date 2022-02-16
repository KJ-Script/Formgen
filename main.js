
//Creating form tag
let input = document.createElement("form");
input.setAttribute("id", "form");
let body = document.getElementById('body');
let append = body.appendChild(input);
let question = document.getElementById('question');
let enter = document.getElementById('enter');
let builtForm = document.getElementById('form');
builtForm.setAttribute("id", "choice");

// Creating the ordered list
let orderdList = document.createElement("ol");
orderdList.setAttribute("id", "ol");
let olFetch = document.getElementById("ol");
input.appendChild(orderdList)
let innerList = document.createElement('li');

// Printing the fucking question
function printQuestion() {

    //Creating the List
    
    innerList.setAttribute('id', 'li');
    innerList.setAttribute("id", "li");
    orderdList.appendChild(innerList);

    //Printing Element
    let innerText = document.getElementById('question');
    console.log(innerText.value);
    innerList.appendChild(document.createTextNode(innerText.value));
    
}

// Creates the Choice/ Select tag/  
function choiceFunction() {

    //Creating Select tag
    let select = document.createElement("select")
    let appendSelect = innerList.appendChild(select);


    //Creating Option tag
    let optionForm = document.getElementById('choice');
    optionForm.setAttribute('id', 'option');
    optionForm.setAttribute('Value', '');
    let option = document.createElement("option");
    let appendOption = select.appendChild(option);


}
