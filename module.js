const pi = 3.14159265359;

let circleArea = (r) => {
  let circleArea = pi * Math.pow(r, 2);
  console.log("Circle Area: ", circleArea);
};
let circleCircumference = (r) => {
  let circleCircumference = 2 * pi * r;
  console.log("Circle Circumference: ", circleCircumference);
};

module.exports = { circleArea, circleCircumference };