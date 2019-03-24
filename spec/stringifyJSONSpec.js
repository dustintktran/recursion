// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
 // var arrayBegin = true;
var stringifyJSON = function(input){
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
        if((values[i]) === null || keys[i] === null);
        return "{}";
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
}