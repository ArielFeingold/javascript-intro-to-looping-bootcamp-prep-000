<<<<<<< HEAD
function forLoop(array){
  for(var i = 0; i < 25; i++)
    if([i] === 1){
      array.push(`I am 1 strange loop.`)
    }else{
      array.push(`I am ${i} strange loops.`)
    }
    return array
  };
=======
// function forLoop(array){
//   for(var i = 0; i < 25; i++)
//     if([i] === 1){
//       array.push(`I am 1 strange loop.`)
//     }else{
//       array.push(`I am ${i} strange loops.`)
//     }
//     return array
//   };
>>>>>>> 257732f86777ec0582f92165c53518e959ea50a1

function whileLoop(n){
  while(n > 0){
      console.log(n)
<<<<<<< HEAD
      n--
    }
    return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.shift()
  } while(array.length > 0 | maybeTrue() === true )
  return array
}
=======
      n = n--
    }
    return "done"
}
>>>>>>> 257732f86777ec0582f92165c53518e959ea50a1
