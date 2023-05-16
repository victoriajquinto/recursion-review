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

  //create empty result array
  var result = [];
  rootNode = rootNode || document.body;

  if (rootNode.classList && rootNode.classList.contains(className)) {
    result.push(rootNode);
  }

  var children = rootNode.children;
  for (var i = 0; i < children.length; i++) {
    result = result.concat(getElementsByClassName(className, children[i]));
  }

  //if child ... recursions!
  //Return array
  return result;

};
