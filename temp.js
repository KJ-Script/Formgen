//Fetching body tag
var body = document.getElementById("body");

//Create a form tag
var form = document.createElement("form");
form.setAttribute("id", "idform");
//Attach it to body
body.appendChild(form);

//Create a OrderdList
var ol = document.createElement("ol");
ol.setAttribute("id", "idol");
//Attach it to form
form.appendChild(ol);

const questions = [];

function choiceGenerator() {
  const box = document.getElementById("question");
  const selectOptions = [];

  //Select form
  const selectForm = `<input type="text" name="" id="select-value">
        <button id="add-option-button">Add Option</button>
        <button id="confirm-choice-button">Confirm</button>
        `;

  //shows the select form
  document.getElementById("output").innerHTML = selectForm;
  document.getElementById("add-option-button").addEventListener("click", () => {
    const input = document.getElementById("select-value");
    if (input.value !== "") {
      selectOptions.push(input.value);
      input.value = "";
    }
  });

  document
    .getElementById("confirm-choice-button")
    .addEventListener("click", () => {
      questions.push({
        type: "select",
        options: selectOptions,
        label: box.value,
      });
      document.getElementById("output").innerHTML = "";
      renderQuestions();
    });

  //Attach it to Select
  // select.appendChild(option);
}

function renderQuestions() {
  const questionsOutput = document.getElementById("questions");
  questionsOutput.innerHTML = "";
  questions.forEach((question) => {
    switch (question.type) {
      case "select": {
        const optionsString = question.options
          .map(
            (option) =>
              `<option value="${option}}">${option.toUpperCase()}</option>`
          )
          .join("");
        const div = document.createElement("li");
        div.innerHTML = `<label for="${question.label}">${question.label}</label><select name="${question.label}">${optionsString}</select>`;
        questionsOutput.appendChild(div);
        break;
      }
      case "blankspace": {
        const div = document.createElement("li");
        const template = `<label for="${question.label}">${question.label}</label><input name="${question.label}" type="text"/>`;
        div.innerHTML = template;
        questionsOutput.appendChild(div);
        break;
      }
    }
  });
}

function store() {
  localStorage.setItem("generateSurvey", JSON.stringify(questions));
}

function inputGenerator() {
  const box = document.getElementById("question");

  questions.push({
    type: "blankspace",
    label: box.value,
  });
  renderQuestions();
}

function addOption() {
  const input = document.getElementById("select-value");
  selectOptions.push(input.value);
  input.value = "";
}

function showSelect() {}

// var key = document.getElementById("key").value;
//Storing array as string on

//retrieving data

function displaySurvey() {
  var getSurvey = localStorage.getItem("generateSurvey");
  if (getSurvey === null) {
    console.log(questions);
    getSurvey = questions;
  }
  console.log(getSurvey);

  var questionsRetrieved = JSON.parse(getSurvey);
  var dQuestions = document.createElement("p");
  body.appendChild(dQuestions);
  var aQuestions = document.createTextNode(getSurvey);
  dQuestions.appendChild(aQuestions);
  console.log(questions);

  for(var i=0; i<questions.length; i++)
  {
      
      if(question.type == "select"){
        questions.push({
            type: "select",
            options: selectOptions,
            label: box.value,
          });
          var otpt = document.getElementById("output"); 
          
      }
  }

  renderQuestions();
  
  console.log("check");
}



