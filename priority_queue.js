function PriorityQueue() {
	var collection = [];

	var this.printCollection = function(){
		console.log(collection);	
	};

	this.enqueue = function(e){
		if(this.isEmpty()){
			collection.push(e);
		}
		else {
			var added = false;
			for(var i=0; i < collection.length; i++){
				//Checking the priorities
				if(e[1] < collection[i][1]){
					collection.splice(i,0,e);
					added = true;
					break;
				}
			}
			if(!added){
				collection.push(e);
			}
		}		
	};

	this.dequeue = function() {
		var value = collection.shift();
		return value[0];
	};

}

var pq = new PriorityQueue();