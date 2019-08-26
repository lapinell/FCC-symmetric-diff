// user selects a option from the radio

const choice = document.getElementsByName("item");
let itemValue;

// choice is actually an array-like object and must be iterated like an array
choice.forEach(function(element) {
  const checkedItem = element.hasAttribute("checked");
  if (checkedItem) {
    itemValue = element.value;
    return itemValue;
  }
});

console.log({ itemValue });

// show that option's input
const showChoice = document.getElementsByName(itemValue)[0];
console.log("showChoice:", showChoice);

showChoice.setAttribute("style", "display:block");
