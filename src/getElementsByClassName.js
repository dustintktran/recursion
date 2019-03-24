// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) 
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var getClasses = function(node){
		var classes = node.classList;
		return classes;
	}
	var doTheThing = function(child){
		for(var i = 0; i < child.length; i++){
		var classes = getClasses(child[i]);
		if(classes.contains(className) && !child[i].hasChildNodes()){
			output.push(child[i])
		} else if(!classes.contains(className) && child[i].hasChildNodes()){
			doTheThing(child[i].children);
		} else if(classes.contains(className) && child[i].hasChildNodes()){
			output.push(child[i]);
			doTheThing(child[i].children);
		}
	}
	return output;
	}
	var output = [];
	var main = document.body;
	var child = main.children;
	doTheThing(child);
	if(output.length !== 0){
		output.unshift(main);
	}
	return output;

};
//classList = DOMTokenList ["targetClassName", value: "targetClassName"]
/*  var body = document.body;
  var nodes = body.children;
  var classList = nodes.classList;
 // _forEach(nodes, function(node){

 // })
  for(var i = 0; i < nodes.length; i++){
  //	var classes = $('nodes[i]').attr('className').split(' ');
  	if(nodes[i].className == className){
  		output.push(body);
  		output.push(nodes[i]);
  	}
  }
  return output;*/