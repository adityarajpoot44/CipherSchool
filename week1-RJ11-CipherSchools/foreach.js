let array = [1,2,3,4,5];
array.forEach((element,index)=> {
    element *= element;
    console.log(element);
});
console.log("Array is: ",array);