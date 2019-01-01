//Understanding Arrow functions
---------------------------------------------------------------------------------------------------------
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) { 
  return element.length; 
}); // this statement returns the array: [8, 6, 7, 9]

elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

elements.map(element => element.length); // [8, 6, 7, 9]

elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

elements.map(({ length }) => length); // [8, 6, 7, 9]




