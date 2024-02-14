export const convertToApiString = (inputString) => {
  var words = inputString.split(" ");
  var resultString = words.join("+");
  return resultString;
};