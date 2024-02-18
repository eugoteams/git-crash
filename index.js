/** @format */

let privateValue = (() => {
  let value = 0;

  function setValue(userValue) {
    value = userValue;
  }

  function getValue() {
    return value;
  }
  return { setValue, getValue };
})();

privateValue.setValue(52);
console.log(privateValue.getValue());
privateValue.setValue(5);
console.log(privateValue.getValue());
privateValue.setValue(15);
console.log(privateValue.getValue());
