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

/*
Nulla esse dolore fugiat nostrud. Pariatur ad anim in et ad consectetur eu enim et ullamco veniam nisi culpa laborum. Eiusmod id ex nisi exercitation adipisicing. Ad pariatur cupidatat mollit commodo id reprehenderit qui laboris culpa Lorem.

Consectetur do do cupidatat laboris laboris consequat dolor ea nostrud nulla minim officia minim esse. Duis proident id pariatur ut nulla cillum veniam laboris dolor. Voluptate enim et dolor veniam anim dolor laboris cillum ex.
*/
