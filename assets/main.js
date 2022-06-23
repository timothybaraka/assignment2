window.onload = () =>{

// const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")
const buttons = [...document.querySelectorAll("button")]
// const buttons = Array.prototype.slice.call(buttonsArr)

// button5.addEventListener('click', () => {
//   disp.textContent = "added 5"
//   indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
// })

buttons.forEach(element =>{
  element.addEventListener('click',()=>{
    disp.textContent = `added ${(buttons.indexOf(element) + 1) * 5}`;
    indicator.textContent = (parseInt(indicator.textContent) + ((buttons.indexOf(element) + 1) * 5)).toString();
})
});
//console.log(buttons)
}