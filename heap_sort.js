
var arrayLength;

function buildHeap(input){
	arrayLength = input.length;

	for(var i = Math.floor(arrayLength/2); i>0; i-- ){
		heapify(input, i);
	}
}

function heapify(input, i){
	var left = 2 * i + 1;
	var right = 2 * i + 2;
	var largest = i;

	if(left < arrayLength && input[left] > input[largest]){
		largest =  left;
	}

	if(right < arrayLength && input[right] > input[largest]){
		largest = right;
	}

	if (largest !=i) {
		swap(input, i, largest);
		heapify(input, largest);
	}

}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}


function heapSort(input){
	buildHeap(input);

	for(){

	}

}


var example = [40, 10, 50, 24, 1, 2, 4, -10, 15, 7, 8, 5];
heapSort(example);
console.log(example);