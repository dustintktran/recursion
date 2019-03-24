// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {
  var array = [];
  if(typeof input == "string"){
    var string = '"' + input + '"';
    return string;
  } else if(input == null){
    return "null";
  } else if(typeof input == "number"){
    var string = "" + input;
    return string;
  } else if(typeof input == "boolean"){
    var string = "" + input;
    return string;
  } else if(typeof input == "object"){
    if(Array.isArray(input)){
      if(input.length == 0){
        return "[]";
      } else {
        input.forEach(function(value) {
          array.push(stringifyJSON(value));
        });
        return "[" + array + "]";
      }
    } else {
      var keys = Object.keys(input);
      var values = Object.values(input);
      for(var i = 0; i < keys.length; i++){
      	if(keys[i] === undefined||values[i] === undefined){
      		return "{}";
      	}
      }
      if(keys.length==0){
        return "{}";
      }
      for(var i = 0; i < keys.length; i++){
      array.push(stringifyJSON(keys[i]) + ":" + stringifyJSON(values[i]));
      } 
      return "{" + array + "}";
    }
  }
};
