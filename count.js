/**
 * 카운트 하기
 */
const animals = ["고양이", "재규어", "호랑이", "표범", "강아지", "원숭이", "사자", "고슴도치", "강아지", "원숭이", "호랑이",
                "표범","고슴도치", "사자", "호랑이", "고양이", "호랑이","원숭이", "사자", "늑대", "고양이", "강아지","고양이", "고슴도치", "호랑이", "재규어",
                "늑대", "호랑이", "고슴도치", "재규어", "원숭이", "고슴도치", "사자", "표범", "늑대", "고양이", "늑대", "고양이", "원숭이", "사자", "표범",
                "고양이", "재규어", "강아지", "고양이", "늑대", "표범", "고슴도치","원숭이", "강아지", "호랑이", "재규어", "고슴도치", "사자", "재규어", "고양이",
                "표범", "늑대", "고슴도치", "사자", "고양이", "호랑이", "표범", "호랑이", "재규어", "늑대", "강아지", "늑대", "고양이", "고양이", "사자",
                "강아지", "늑대","고슴도치", "늑대", "표범", "고양이", "재규어"]


// 1. 위 배열에 각 동물이 몇마리씩 있는지 js를 사용하여 카운트해보세요.
const cntAnimals = animals.reduce((result, curr) => {
  curr in result ? result[curr]++ : result[curr] = 1;

  return result;
}, {});

console.group('1. 위 배열에 각 동물이 몇마리씩 있는지 js를 사용하여 카운트해보세요.');
console.log(cntAnimals);
console.groupEnd('1. 위 배열에 각 동물이 몇마리씩 있는지 js를 사용하여 카운트해보세요.');


// 2. 호랑이는 사자와 몇마리의 차이가 있나요?
const getPostPosition = (char, type) => {
  const charCode = char.charCodeAt(char.length - 1);
  const consonantCode = (charCode - 44032) % 28;
  const hasConsonant = consonantCode !== 0;
  
  switch(type) {
    case '가':
    case '이':
      return char + (hasConsonant ? '이' : '가');
    case '와':
    case '과':
      return char + (hasConsonant ? '과' : '와');
    default:
      return char;
  }
}

const getDiff = (a, b) => {
  const diff = cntAnimals[a] - cntAnimals[b];

  if (diff === 0) {
    return `${getPostPosition(a, '와')} ${b}의 마리수는 동일합니다.`;
  }
  else {
    const diffCnt = Math.sqrt(Math.pow(diff, 2), 2);
    const compare = diff >= 0 ? '많습니다' : '적습니다';

    return `${getPostPosition(a, '가')} ${b} 보다 ${diffCnt}마리 더 ${compare}.`
  }
}

console.group('2. 호랑이는 사자와 몇마리의 차이가 있나요?');
console.log(getDiff('호랑이', '사자'));
console.groupEnd('2. 호랑이는 사자와 몇마리의 차이가 있나요?');


// 3. 개과 동물(개와 늑대)은 몇마리 있나요?
const getCanidae = () => {
  const canidae = ['강아지', '늑대'];
  const sumCanidae = canidae.reduce((result, curr) => result + cntAnimals[curr], 0);
  
  return `개과 동물은 총 ${sumCanidae}마리 입니다.`;
}

const getAnimalSum = (animals) => {
  const sumAnimal = animals.reduce((result, curr) => result + cntAnimals[curr], 0);
  return `${animals.join(', ')}의 합은 총 ${sumAnimal}마리 입니다.`
}

console.group('3. 개과 동물(개와 늑대)은 몇마리 있나요?');
console.log(getCanidae());
console.log(getAnimalSum(['고양이', '재규어', '호랑이']))
console.groupEnd('3. 개과 동물(개와 늑대)은 몇마리 있나요?');


// 4. 10마리 이상인 동물은 몇 종인가요?
const filteredAnimals = (min) => {
  let = kinds = 0;

  for (const key in cntAnimals) cntAnimals[key] >= min && ++kinds;
  
  return `${min}마리 이상인 동물은 총 ${kinds}종 입니다.`;
}

console.group('4. 10마리 이상인 동물은 몇 종인가요?');
console.log(filteredAnimals(10));
console.groupEnd('4. 10마리 이상인 동물은 몇 종인가요?');


// 5. 가장 적은 숫자의 동물은 무엇인가요?
const getLeastAnimal = () => {
  const leastValue = Math.min(...Object.values(cntAnimals));
  let leastAnimal = '';

  for (const key in cntAnimals) {
    if (cntAnimals[key] === leastValue) leastAnimal = key;
  }

  return `가장 적은 숫자의 동물은 ${leastAnimal}입니다.`;
}

console.group('5. 가장 적은 숫자의 동물은 무엇인가요?');
console.log(getLeastAnimal())
console.groupEnd('5. 가장 적은 숫자의 동물은 무엇인가요?');