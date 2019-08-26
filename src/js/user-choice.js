console.log("user-choice init");

class Choice {
  constructor(input, name) {
    this.input = input;
    this.name = name;
  }
}

const numberCh = new Choice(
  `<input type="text" name="number" placeholder="Enter a number"></input>`,
  "number"
);

const stringCh = new Choice(
  `<input type="text" name="string" placeholder="Enter a word"></input>`,
  "string"
);

const booleanCh = new Choice(
  `<input type="radio" name="boolean" value="true"></input>
  <label name="boolean">True</label>
  <input type="radio" name="boolean" value="false"></input>
  <label name="boolean">False</label>`,
  "boolean"
);

const choiceList = [numberCh, stringCh, booleanCh];

const choices = document.getElementsByName("item");

choices.forEach(element => {
  element.onchange = event => {
    choiceList.forEach(choice => {
      if (event.target.value === choice.name) {
        document.getElementById("choices").innerHTML = choice.input;
      }
    });
  };
});
