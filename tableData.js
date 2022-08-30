//import{getNumberOfChars, getFirstChar,   // 
//} from "./tableData2.js"//
let ans1 = document.querySelector("#ans1");
let ans2 = document.querySelector("#ans2");
let ans3 = document.querySelector("#ans3");
let ans4 = document.querySelector("#ans4");
let ans5 = document.querySelector("#ans5");
let ans6 = document.querySelector("#ans6");
 let Name = document.querySelector("#your-name");

  function getNumberOfChars(Name){
    return Name.length
 }
 function getFirstChar(Name){
    return Name[0]
 }
 function getLastChar(Name){
    return Name[Name.length -1]
 }
 function getLowerCase(Name){
    return Name.toLowerCase()
 }
 function getUpperCase(Name){
    return Name.toUpperCase()
 }
 function getCapitalized(Name){
    return Name[0].toUpperCase() + Name.substring(1).toLowerCase()
 }
 Name.addEventListener("keyup", () => {
 let value =Name.value;

 ans1.textContent = getNumberOfChars(value);
 ans2.textContent = getFirstChar(value);
 ans3.textContent = getLastChar(value);
 ans4.textContent = getLowerCase(value);
 ans5.textContent = getUpperCase(value);
 if (value){
 ans6.textContent = getCapitalized(value);
 }
 else{
    ans6.textContent ="";
 }
 });
