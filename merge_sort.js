//Finding left array and right array and merging recursivly
function mergeSort(arr){

if(arr.length == 1) return arr; // Returning once array with single item done

const middle = Math.floor(arr.length / 2);
const leftArr = arr.slice(0,middle);
const rightArr = arr.slice(middle);

//recursivly split into smaller and smaller arrays
retun merge(mergeSort(leftArr), mergeSort(rightArr))

}


function merge(left, right){

	let result = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < left.length && indexRight < right.length){
		if(left[indexLeft] < right[indexRight]){
			result.push(left[indexLeft]);
			indexLeft++;
		}
		else {
			result.push(right[indexRight]);
			indexRight++;
		}
	}

	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}


const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list))