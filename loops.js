function doWhileLoop(num) {
  function incrementVariable() {
  num = num + 1;
  return num;
  }
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}

function forLoop(numarray) {
  for (let i=0; i<25; i++) {
    if (i==1) {
      numarray.push("I am 1 strange loop.")
    } else {
      numarray.push("I am".${i}."strange loops.")
    }
  }
  return(numarray)
}