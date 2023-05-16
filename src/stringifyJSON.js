// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  // console.log('result: ', result);

  if (obj === null) {
    return 'null';
  } else if (!(typeof obj === undefined || typeof obj === 'function')) {
    // console.log('obj: ', obj, ', typeof obj: ', typeof obj);
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        result = '[]';
      } else {
        result += '[';
        for (var i = 0; i < obj.length; i++) {
          var currentItem = obj[i];
          if (i === obj.length - 1) {
            result += stringifyJSON(currentItem); //get rid of 'return'
          } else {
            result += stringifyJSON(currentItem) + ','; // get rid of 'return'
          }
        }
        result += ']';
      }
    } else if (typeof obj === 'object' && !Array.isArray(obj)) {
      if (Object.keys(obj).length === 0) {
        result += '{}';
      } else {
        for (var key in obj) {
          // if (!(typeof obj.key === 'function' || obj.key === undefined)) { //this conditional seems to be breaking our code
          //   result += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
          // } else

          if (!(typeof obj[key] === 'function'  || obj[key] === undefined)) {
            result += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
          }
        }
        result = '{' + result.slice(0, result.length - 1) + '}';
      }
    } else if (typeof obj === 'boolean') {
      result = obj.toString();
    } else if (typeof obj === 'number') {
      result = obj.toString();
    } else if (typeof obj === 'string') {
      result = '"' + obj + '"'; // need to add open quote  and close quote around obj
    }
    // console.log('result: ', result);
    return result;
  }
};
