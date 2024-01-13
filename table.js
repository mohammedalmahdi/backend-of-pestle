
var probValue; 
var impValue;
function getprobValue() {

  var radio = document.getElementsByName('probilty');
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked)
    probValue= radio[i].value;
  }

  var impRadio = document.getElementsByName('impact');
  for (m = 0; m < impRadio.length; m++) {
    if (impRadio[m].checked)
    impValue= impRadio[m].value;
  }

  var deg = probValue * impValue;

  var degree = document.getElementById('deg');
  degree.value = deg;
}

function updateRadioInputs() {
  var rangeValue = document.getElementById("rangeInput").value;
  document.getElementById("rangeValue").textContent = rangeValue;

  var radioInputsContainer = document.getElementById("radioInputsContainer");
  radioInputsContainer.innerHTML = "";  // Clear existing radio inputs

  
  for (var i = 1; i <= rangeValue; i++) {
    var radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "probilty";
    radioInput.id = "probi";
    radioInput.value = i;

    var label = document.createElement("label");
    label.htmlFor = "probi";
    label.textContent = i ;

    radioInputsContainer.appendChild(radioInput);
    radioInputsContainer.appendChild(label);
  }
}

// ---------------------------------------------------
function updateImpactInputs() {
  var rangeValue = document.getElementById("rangeInput").value;
  document.getElementById("rangeValue").textContent = rangeValue;

  var radioImpactContainer = document.getElementById("radioImpactContainer");
  radioImpactContainer.innerHTML = "";  // Clear existing radio inputs

  
  for (var i = 1; i <= rangeValue; i++) {
    var impactInput = document.createElement("input");
    impactInput.type = "radio";
    impactInput.name = "impact";
    impactInput.id = "impact";
    impactInput.value = i;

    var label2 = document.createElement("label");
    label2.htmlFor = "impact";
    label2.textContent = i ;

    radioImpactContainer.appendChild(impactInput);
    radioImpactContainer.appendChild(label2);
  }
}
