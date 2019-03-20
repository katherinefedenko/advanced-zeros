module.exports = function getZerosCount(number, base) {
    var arrayOfPrimes = [];
    var prime = 2;
    getPimeNums(base,arrayOfPrimes,prime);
    return zerosCount(arrayOfPrimes, number);
  }
  function getPimeNums(numBase,arrayOfPrimes,primeNum){
    if (numBase === '1') {
        arrayOfPrimes.push(1);
    }
    if(numBase % primeNum === 0){
        arrayOfPrimes.push(primeNum);
        numBase = numBase / primeNum;
        getPimeNums(numBase,arrayOfPrimes,primeNum);
    }else if(numBase % primeNum !== 0){
        if(!(numBase <= primeNum)){
          primeNum++;
          getPimeNums(numBase,arrayOfPrimes,primeNum);
        }
    }
    return arrayOfPrimes;
  }
  function zerosCount(arrayOfPrimes, number){
    var resArr =[];
    for(var prime = 0; prime < arrayOfPrimes.length; prime++){
        var result = 1;
        var exp = 1;
        var sum = 0;
        var expNum = 1;
        while(result != 0){
          result=Math.floor(number/Math.pow(arrayOfPrimes[prime],exp));
          exp++;
          sum+=result;
        }
        while(arrayOfPrimes[prime]==arrayOfPrimes[prime+expNum]){
          expNum++;
        }
        resArr.push(Math.floor(sum/(expNum)));
    }
    var min = resArr[0];
    for( var i = 0; i < resArr.length; i++){
      if(resArr[i] < min) min = resArr[i];
    }
    return min;
  }