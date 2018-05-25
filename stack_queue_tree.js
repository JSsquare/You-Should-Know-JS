var stack = [];
stack.push(1);
stack.push(3);
var i = stack.pop();

var queue = [];
queue.push(2);
queue.push(5);
var i = queue.shift(); //removes first element and unshift() insert to first element


var BinarySearchTree = function(value){

	var instance = Object.create(BinarySearchTree.prototype);

	instance.value = value;
	instance.right = undefined;
	instance.left = undefined;

	return instance;
};

BinarySearchTree.prototype.insert = function(value){

	var node = BinarySearchTree(value);

	function recurse(bst){
		if(bst.value > value && bst.left === undefined){
			bst.left = node;
		}
		else if (bst.value > value) {
			recurse(bst.left);
		}
		else if (bst.value < value && bst.right === undefined){
			bst.right = node;
		}
		else if(bst.value < value){
			recurse(bst.right);
		}
	}

	recurse(this);
}

BinarySearchTree.prototype.contains = function(value){
	var doesContain = false;

	function recurse(bst){
		if(bst.value === value){
			doesContain = true;
		}
		else if (bst.left !== undefined && value < bst.value){
			recurse(bst.left);
		}
		else if(bst.left !== undefined && value < bst.value){
			recurse(bst.right);
		}

	}

	recurse(this);
	return doesContain;
}

