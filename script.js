document.getElementById("demo").innerHTML = "Qalyn mal calculator";
document.getElementById("education").style.color = "blue";
document.getElementById("networth").style.color = "green";
const prop = new Array;

let person = {
  name: null,
  price: parseInt(0),
  letter: null
}

let calculate = () => {
  if (person.name == "" && isNaN(person.price)) {
    alert("Error");
  } else {
    skill_age_gossips("skills");
    skill_age_gossips("age");
    skill_age_gossips("gossips");

    prop.push(person.name);
    prop.push(person.price);
    var loveLetter = document.getElementById('loveLetter').value;
    letter(loveLetter);
    
    alert("Groom's name is " + person.name + "\nStarting bid is " + person.price + "$" + `\nGroom's price is ${result} $` + "\nYour letter for him\n" + person.letter);
  }
}

var name, price;
person.name = prompt("Name");
person.price = parseInt(prompt("Price ($)"));
var result = person.price;

let letter = (letter) => {
  person.letter = letter;
}

function edu() {
  var education = document.getElementById("education").value;
  switch (education) {
    case "1.5":
      result = person.price * 1.5;
      break;
    case "1.2":
      result = person.price * 1.2;
      break;
    case "1.05":
      result = person.price * 1.05;
      break;
    case "0.9":
      result = person.price * 0.9;
      break;
  }
}

function fam() {
  var networth = document.getElementById("networth").value;
  switch (networth) {
    case "2":
      result *= 2;
      break;
    case "1.5":
      result *= 1.5;
      break;
    case "1.2":
      result *= 1.2;
      break;
  }
}

function skill_age_gossips(id) {
  var checkOpt = document.getElementsByName(id);

  for (var i = 0; i < checkOpt.length; i++) {
    if (checkOpt[i].checked) {
      switch (id) {
        case "skills":
          skills(checkOpt[i].value);
          break;
        case "age":
          age(checkOpt[i].value);
          break;
        case "gossips":
          gossips(checkOpt[i].value);
          break;
      }
    }
  }
}

function skills(skill) {
  result += parseInt(skill);
  console.log(skill + " skill " + result);
}

function age(age) {
  result *= Number(age);
  console.log(age + " age " + result);
}

function gossips(gossips) {
  switch (gossips) {
    case "0.85":
      result *= gossips;
      break;
    case "0.9":
      result *= gossips;
    case "200":
      result -= gossips;
  }
}

const check = new Array;
check.forEach((item, i) => {
  if (gossipsEls[i].checked == true) {
    check.push(parseFloat(item));
  }
});

check.forEach((item, i) => {
  if (check[i] % 1 == 0 || check[i] == 0) {
    alert(check[i]);
    result += check[i];
  } else {
    result *= check[i];
  }
});

var button = document.getElementById("submit");
if (button) {
  button.addEventListener("click", calculate, false);
}

var button = document.getElementById('acceptButton');
button.addEventListener("click", calculate);
