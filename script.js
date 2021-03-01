document.getElementById("demo").innerHTML = "Qalyn mal calculator";
document.getElementById("education").style.color = "blue";
document.getElementById("networth").style.color = "green";


let person = {
  name: null,
  price: parseInt(0),
  letter: null
}

var name;
var price;
var report = new Array;

let groomsName = () => {
  person.name = prompt("Name");
}
groomsName();

let groomsPrice = () => {
  person.price = parseInt(prompt("Price ($)"));
}
groomsPrice();

var result = person.price;




let letter = (letter) => {
  person.letter = letter;
}


function first() {
  var education = document.getElementById("education").value;
  if (education == "bachelor") {
    result = person.price * 1.5;
    console.log(education + " " + result);
  } else if (education == "college") {
    result = person.price * 1.2;
    console.log(education + " " + result);
  } else if (education == "high_school") {
    result = person.price * 1.05;
    console.log(education + " " + result);
  } else if (education == "middle_school") {
    result = person.price * 0.9;
    console.log(education + " " + result);
  }
}

function second() {
  var networth = document.getElementById("networth").value;

  if (networth == "upper_class") {
    result *= 2;
    console.log(networth + " " + result);
  } else if (networth == "middle_class") {
    result *= 1.5;
    console.log(networth + " " + result);
  } else if (networth == "lower_class") {
    result *= 1.2;
    console.log(networth + " " + result);
  }
}

function others(id) {
  var options = document.getElementsByName(id);



  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      if (id == "skills") {
        calculating_skills(options[i].value);
      } else if (id == "age") {
        calculating_age(options[i].value);
      } else if (id == "reputation") {
        calculating_rep(options[i].value);
      }
    }
  }
}

function calculating_skills(skill) {
  result += parseInt(skill);
  console.log(skill + " skill " + result);
}


function calculating_age(num) {
  result *= Number(num);
  console.log(num + " age " + result);
}

function calculating_rep(reputation) {
  if (reputation == 0.85 || reputation == 0.9) {
    result *= reputation;
    console.log(reputation + " reputation " + result);
  } else {
    result -= reputation;
    console.log(reputation + " reputation " + result);
  }
}

const checkedGossips = new Array;

checkedGossips.forEach((item, i) => {
  if (gossipsEls[i].checked == true) {
    checkedGossips.push(parseFloat(item));
  }
});

checkedGossips.forEach((item, i) => {
  if (checkedGossips[i] % 1 == 0 || checkedGossips[i] == 0) {
    alert(checkedGossips[i]);
    result += checkedGossips[i];
  } else {
    result *= checkedGossips[i];
  }
});

var button = document.getElementById("submit");
if (button) {
  button.addEventListener("click", calculate, false);
}


let reportFunc = () => {
  var reportFinal = report.reduce(function(sum, current) {
    console.log(`Name: ${sum} \nStart Price: ${current}`);
    return sum + current;
  })
}

let calculate = () => {

  if (person.name == "" || isNaN(person.price)) {
    alert("Error");
  } else {
    others("skills");
    others("age");
    others("reputation");

    report.push(person.name);
    report.push(person.price);
    reportFunc();

    var templateLetter = document.getElementById('loveLetter').value;
    letter(templateLetter);
    alert("Name: " + person.name + "\nStart price: " + person.price + "$" + `\nResult: ${result} $` + "\nLetter:\n" + person.letter);
  }
}

var button = document.getElementById('acceptButton');
button.addEventListener("click", calculate);
