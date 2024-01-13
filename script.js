// // creating policy Div to add it into the existing div called policies in HTML
// // 1. Creating a policy div  
// let policyDiv = document.createElement("div");
// // policyDiv.classList.add('policy');

// //2. Adding the policy Div into the policies div in html
// let policiesDiv = document.querySelector('.policies');
// policiesDiv.appendChild(policyDiv);

// // Adding eventListener to the add btn to get access to it
// //4. getting access to the btn
// let plcAddBtn = document.getElementById('plcAddBtn');
// //5. Adding event Listener to the btn
// plcAddBtn.addEventListener('click', addInputField);

// //6. Creating the addInputField Function
// function addInputField() {
//     let PCI = `<form>
//     <input type="radio" id="p1" name="probabilty" value="p1"> 
//     <label for="p1">1</label><br>
//     <input type="radio" id="p2" name="probabilty" value="p2">
//     <label for="p2">2</label><br>
//     <input type="radio" id="p3" name="probabilty" value="p3">
//     <label for="p3">3</label>
//   </form>`;

//   let MPCI = `<form>
//     <input type="radio" id="mp1" name="impact" value="mp1">
//     <label for="mp1">1</label><br>
//     <input type="radio" id="mp2" name="impact" value="mp2">
//     <label for="mp2">2</label><br>
//     <input type="radio" id="mp3" name="impact" value="mp3">
//     <label for="mp3">3</label>
//   </form>`;

  

//   let  degree = document.querySelector('input[name="probabilty"]:checked').value;
//   let  impact = document.querySelector('input[name="impact"]:checked').value;
// let html = ` <input type"number" id="policy1" required> <div id="probablities">${PCI}</div> <div id="impacts">${MPCI}</div> <div id="degree">${degree * impact}</div>`

// policyDiv.insertAdjacentHTML('beforeend', html);
// }




// 1. Creating a policy div
let policyDiv = document.createElement("div");
// policyDiv.classList.add('policy');

// 2. Adding the policy Div into the policies div in HTML
let policiesDiv = document.querySelector('.policies');
policiesDiv.appendChild(policyDiv);

// Adding eventListener to the add btn to get access to it
// 4. getting access to the btn
let plcAddBtn = document.getElementById('plcAddBtn');
// 5. Adding event Listener to the btn
plcAddBtn.addEventListener('click', addInputField);



var count= 1;
// 6. Creating the addInputField Function
function addInputField() {
    
    if(count<=15){
  


  let html = ` <input type"number"  required>  ` ;

  policyDiv.insertAdjacentHTML('beforeend', html);
  
  count++;
}
}




let PCI = `<form >
    <input type="radio" id="p1" name="probability" value="p1"> 
    <label for="p1">1</label><br>
    <input type="radio" id="p2" name="probability" value="p2">
    <label for="p2">2</label><br>
    <input type="radio" id="p3" name="probability" value="p3">
    <label for="p3">3</label>
  </form>`;

  let MPCI = `<form>
    <input type="radio" id="mp1" name="impact" value="mp1">
    <label for="mp1">1</label><br>
    <input type="radio" id="mp2" name="impact" value="mp2">
    <label for="mp2">2</label><br>
    <input type="radio" id="mp3" name="impact" value="mp3">
    <label for="mp3">3</label>
  </form>`;


  // <span id="probabilities">${PCI}</span>
  // <span id="impacts">${MPCI}</span>

//   let degree = document.querySelector('input[name="probability"]:checked').value;
//   let impact = document.querySelector('input[name="probability"]:checked').value;