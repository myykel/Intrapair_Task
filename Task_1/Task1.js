function smallerElementsToRight(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          count++;
        }
      }
      result.push(count);
    }
    return result;
  }
  
  console.log(smallerElementsToRight([5, 9, 7, 4, 2])); 


  // This function takes in an array of integers as input and uses nested loops to iterate 
  //through the array,
  //counting the number of elements to the right that are smaller than the current element. 
  //The result is pushed into a new array and returned.