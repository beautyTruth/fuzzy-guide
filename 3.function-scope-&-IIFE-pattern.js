var teacher = "Tom";

(function anotherTeacher() {
  var teacher = "Jack";
  console.log(teacher);
})();

(function numSquare(x) {
  console.log(x * x);
})(5);

console.log(teacher);

// watch out for type errors when using IIFEs
