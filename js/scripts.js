let closestSquare=num=>Math.ceil( Math.sqrt(num));

let insertSpace=(str, number)=> {
    var arr = [];
    for(let i = 0; i < str.length; i += number) {
       arr.push(str.substr(i, number))
    }
    return arr.join(' ')
};
let letterCount =str=>{
  let letterArr = [];
  let siftedArr = []
  for(let i=65; i<=90; i++){
    letterArr.push(String.fromCharCode(i));
  }
  for(let i=97; i<=122; i++){
    letterArr.push(String.fromCharCode(i));
  }
  for(let i=0; i<=9; i++){
    letterArr.push(i );
  }
  let counter = 0;
  var strArr = str.split('')
  strArr.forEach(letter=>{
    if(letterArr.includes(letter)){
      counter++;
      siftedArr.push(letter)
    }
  })
    return [counter, siftedArr]
}

let makeLetterMatrix = str => {
  let [numLetters, letterArr] = letterCount(str)
  let numColumns = closestSquare(numLetters);
  let numRows = Math.ceil(numLetters/numColumns)
  let letterMatrix = []
  let k = 0
  for(let i=0; i<numRows; i++ ){
     let innerArr = []
    for(let j =0 ;j<numColumns;j++){
      if(letterArr[k]){
      innerArr.push(letterArr[k])
      }else{
        innerArr.push('')
      }
      k++
    }
    letterMatrix.push(innerArr)
  }


  return letterMatrix
}

let encrypt = str =>{
  let matrix = makeLetterMatrix(str);
  let numRow = matrix.length
  let numColumns = matrix[0].length
  let message = []
 for(let i = 0; i<numColumns; i++){
    for(let j = 0; j<numRow; j++){
     message.push(matrix[j][i])
    }
  }
  let messageStr = message.join('')
  messageStr = insertSpace(messageStr, 5)
  return messageStr
}

$(document).ready(()=>{
 $("#formOne").submit(e=>{
   e.preventDefault();
   let input = $('#userInput').val();
   let output = encrypt(input);
   $('#result').text(output)
 })
})
