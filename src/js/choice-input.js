// user inputs an item
// onchange, store user input in state
let userValues = "";
console.log("init UV:", userValues);

// get the current input element
let currInputEl = document
  .getElementById("choices")
  .getElementsByTagName("input"); // an array of objects

console.log("currInputel is a(n)", typeof currInputEl);

Object.values(currInputEl).forEach(input => {
  console.log({ inputType: input.type });
  // if currInputEl is a text input el
  if (input.type === "text") {
    // get the current value
    console.log(input.value);
    let currValue = input.value;
    // store it
    userValues = currValue;
    console.log({ userValues });
    // with each new change
    // update the stored value
  } else {
    // else
    // determine which boolean has a truthy value
    // then set the stored value
    console.log("it's not a text input");
  }
});

const onTextChange = event => {
  event.target.value;
};
