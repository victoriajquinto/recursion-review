// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//i: a DOM tree
//o: an array of elements that have a specific class
//c: none
//e: currentElement not defined

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, rootNode) {
  // your code here
  var reuslt = [];
  rootNode = rootNode || document.body;

  //does element have kids? .childNodes
    //loop through the kids

};
