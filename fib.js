
function fibIterative(index) {
  if (index === 0 || index === 1) {
    return index;
  }
  let fib1 = 0, fib2 = 1, fib3;
  for (let i = 2; i <= index; i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  return fib3;
}
function fibIterative2(index) {
  let arr = [0, 1];
  
  for(let i=2;i<=index;i++) {
    arr.push(arr[i-1]+arr[i-2]);
  }

  return arr[index];
}
function fibRecurIterative(index) {
  if (index === 0 || index === 1) {
    return index;
  }
  return fibRecurIterative(index - 1) + fibRecurIterative(index - 2);
}
fibRecurIterative(2);
fibIterative(8);
fibIterative2(8);
// 0,1,1,2,3,5,8,13,21,34
