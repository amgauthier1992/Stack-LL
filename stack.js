//Here we will be using a Linked List to implement a Stack. 

/*

Stack {
  top: _Node { value: 'Amazon', next: _Node { value: 'Udemy', next: [Object] } },
  bottom: _Node { value: 'Google', next: null },
  length: 3 }

  -Top is the newNode. The next node of our new top was the node that is now below it (our old top). The next node of our bottom is null because thats the last item to be popped off on the stack. (LIFO)
*/

class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //look at top element of stack
  peek(){
    return this.top;
  }

  //add element to stack
  push(value){
    const newNode = new _Node(value);

    //if our stack is empty. The newNode is also the bottom element.
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } 
    else {
      const oldTop = this.top; //hold ref to original top
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.length++;
    return this;
  }

  //pop off element from top of stack
  pop(){
    //if theres no top element, we have nothing to pop off the stack
    if (!this.top){
      return null; 
    } 

    //if theres only 1 node left, set bottom to null
    if (this.top === this.bottom){
      this.bottom = null;
    }

    //move down the stack to create new top node
    this.top = this.top.next;

    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Amazon');
// console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack)
