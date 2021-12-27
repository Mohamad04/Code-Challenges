/**
 Do not return anything, modify arr in-place instead.
 */
// function duplicateZeros(arr: number[]) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == 0) {
//       for (let j = arr.length - 2; j >= i; j--) {
//         arr[j + 1] = arr[j];
//       }
//     }
//   }
//   return arr;
// }                      // complexity O(N)^2

// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
// console.log(duplicateZeros([1, 2, 3]));

// ---------------------------------------------------

function duplicateZeros(arr: number[]) {
  let possibleDups = 0;
  let arrayLength = arr.length - 1;

  for (let i = 0; i <= arrayLength - possibleDups; i++) {
    if (arr[i] == 0) {
      // Edge case: This zero can't be duplicated. We have no more space,
      // as i is poleting to the last element which could be included
      if (i == arrayLength - possibleDups) {
        arr[arrayLength] = 0;
        arrayLength -= 1;
        break;
      }
      possibleDups++;
    }
  }

  let last = arrayLength - possibleDups;

  // Copy zero twice, and non zero once.
  for (let i = last; i >= 0; i--) {
    if (arr[i] == 0) {
      arr[i + possibleDups] = 0;
      possibleDups--;
      arr[i + possibleDups] = 0;
    } else {
      arr[i + possibleDups] = arr[i];
    }
  }

  return arr;
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
// console.log(duplicateZeros([1, 2, 3]));
