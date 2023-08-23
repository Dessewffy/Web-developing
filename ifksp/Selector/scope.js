//Global Scope.
var globalName = "Joe"

function somthing() {
    var globalName = "jack";
    console.log(globalName);
}
somthing();

console.log(globalName);
