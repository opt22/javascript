//for multiples of 3 print "Fizz"
//for multiples of 5 print "Buzz"
//for multiples of 3 and 5 print "FizzBuzz"

//RANGE

function* range(start=0, end=undefined, step=1) {    
    if( arguments.length === 1) {end = start, start = 0}    
    [...arguments].forEach(arg => {    
        if( typeof arg !== 'number') {throw new TypeError("Invalid argument")}
    });

    if( arguments.length === 0) {throw new TypeError("range requires at least 1 argument, got 0")}

    if(start >= end) return                                                                                                                                     
    yield start    
    yield* range(parseInt(start + step), end, step);
}

function numlist(){
  numbers = [...range(0,101)]
  console.log(numbers);
    for (var i in [...range(1,101)]){
      console.log(i);
        if (i % 5 == 0 && i % 3 == 0){
            console.log(` ${i}\t BuzzFizz`)
        }
        if (i % 3 == 0){
            console.log(` ${i}\t Fizz`)
        }
        if (i % 5 == 0){
            console.log(` ${i}\t Buzz`)
        }
    }
}

numlist();




