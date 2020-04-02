let closestSquare=(num)=>Math.ceil( Math.sqrt(num));

let letterCount =(str)=>{
  let letterArr = [];
  for(let i=65; i<=90; i++){
    letterArr.push(String.fromCharCode(i));
  }
  for(let i=97; i<=122; i++){
    letterArr.push(String.fromCharCode(i));
  }
  let counter = 0;
  var strArr = str.split('')
  strArr.forEach(letter=>{
    if(letterArr.includes(letter)){
      counter++;
    }
  })
    return counter
}
