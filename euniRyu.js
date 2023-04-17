function examOne(first, second){
  if(typeof(first) === 'string' || typeof(second) === 'string'){
    return "문자열 데이터를 입력하셨습니다."
  }
  else{
    let sum = first + second;
    return `first + second = ${sum}`;
  }
};

function examTwo(first, second, third){
  if(typeof(first) === 'number' && typeof(second) === 'number' && typeof(third) === 'number'){
    let mult = first * second * third;
    return `first * second * third = ${mult}`
  }
  else{
    return "입력된 값을 다시 한번 확인해주세요"
  }
}
function examThree(str){
  if(typeof(str) === 'string'){
    let count = 0;
    while (str[count] !== undefined) {
      count++;
      //console.log(str[count])
    }
    return `입력된 문자열의 길이는 ${count}`;
  }
}
function examFour(array){
  if (Array.isArray(array)) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return `배열의 최소값은 ${min}`
  }
  else{
    return "배열로 입력해주세요"
  }
}
function examFive(array){
  if (Array.isArray(array)) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return `배열의 총 합은 ${sum}`
  }
  else{
    return "배열로 입력해주세요"
  }
}

console.log(examOne(2, 3)); //Q1.덧셈로직 만들기
console.log(examTwo(2, 3, 4)); //Q2.곱셈로직 만들기
console.log(examThree("hello")); //Q3.문자열 길이 구하기
console.log(examFour([3, 1, 4, 2])); //Q4.최솟값 판별하기
console.log(examFive([1, 2, 3])); //Q5.배열 값 총합하기