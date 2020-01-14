const insertionSort = stack => {
  //loop through length of array starting at the 1 index
  //check first value against the next value in the array
  //if next value is greater than the current value
  //check if the value to the left is less than the current val
  for(let i = 1; i < stack.storage.length; i++){
    let tempVal = stack.storage[i];
    let j = i;
    while(j > 0 && tempVal < stack.storage[j-1]){
      stack.storage[j] = stack.storage[j-1];
      j -= 1;
    }
    stack.storage[j] = tempVal;
  }
  return stack;
}

const sortStack = stack => {
  //create a temp stack to help form the sorted stack
  //loop until the orginal stack is empty
  //if the last item on the orgianl stack is less than the value in the sortedStack
  //pop the values out to ensure the larger number is at the end of the sortedStack
  //before adding the new value to the sortedStack
  //check if the sortedStack is empty and that the value from the orignal stack
  //is less that the next largest number in the sortedStack
  //if the next value is still bigger, pop out all the values in the sortedStack
  //till it is greater than a value in the sortedStack
  //otherwise just push the smallest value into the sortedStack first then the
  //bigger value after
  //else just push the value into the sortedStack
  const sortedStack = new Stack();
  sortedStack.push(stack.pop());

  while(!stack.isEmpty()){
    if(stack.peek() < sortedStack.peek()){
      const tempVal1 = stack.pop();
      const tempVal2 = sortedStack.pop();
      if(!sortedStack.isEmpty() && tempVal1 < sortedStack.peek()){
        while(tempVal1 < sortedStack.peek()){
          stack.push(sortedStack.pop());
        }
      }
      sortedStack.push(tempVal1);
      sortedStack.push(tempVal2);
    } else {
      sortedStack.push(stack.pop());
    }
  }

  return sortedStack; 
}

class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length-1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  printContents() {
    this.storage.forEach(elem => console.log(elem));
  }
}

const s = new Stack();
s.push(3);
s.push(4);
s.push(13);
s.push(8);
s.push(5);
s.push(1);
s.push(6);
s.push(2);
s.push(12)

// const sortedStack = sortStack(s); // sortedStack is also a Stack instance
const insertStack = insertionSort(s);
// console.log("sorted stack: ")
// sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10
console.log("insertion Sorted stack: ")
insertStack.printContents();