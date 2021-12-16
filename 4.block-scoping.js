// Block Scoping & var -> No Effect
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
