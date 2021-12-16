// Block Scoping & var -> there is no effect on var if it is or isn't in a block

// var name = "Clint";

// {
//   var name = "Guardian";
//   console.log(name);
// }

// console.log(name);

// Block Scoping & let -> Has Effect

// var name = "Clint";

// {
//   let name = "Guardian";
//   console.log(name);
// }

// console.log(name);

// Block Scoping & const -> Has Effect

var name = "Clint";

{
  const name = "Guardian";
  console.log(name);
}

console.log(name);

// follow the principle LEAST EXPOSURE aka LEAST PRIVELAGE
