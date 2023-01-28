# TASK1
Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the
right of that element in the original input array. For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:
● There is 1 smaller element to the right of 3
● There is 1 smaller element to the right of 4
● There are 2 smaller elements to the right of 9
● There is 1 smaller element to the right of 6
● There are no smaller elements to the right of 1

## SOLUTION
 Created a function that takes in an array of integers as input and uses nested loops to iterate through the array,counting the number of elements to the right that are smaller than the current element. 
Then a result is pushed into a new array and returned.