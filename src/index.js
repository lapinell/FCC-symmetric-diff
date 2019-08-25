import "./styles.css";

// document.getElementById("app").innerHTML = `

// `;

function diffArrays() {
  console.log("diffArrays is:", arguments);
  console.log(Array.isArray(arguments[3]));
  for (let item in arguments) {
    console.log({ item: typeof item });
  }
}

diffArrays(2, [1, 2, 4], "string", [2, 1, 5, 3], [7, 2, 1, 3, 6]);

const diffArrowArrays = (...args) => {
  console.log("dAA is:", args);
};

diffArrowArrays(2, [1, 2, 4], [2, 1, 5, 3], [7, 2, 1, 3, 6]);
