function count(str) {
  const lowerCaseStr = str.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (consonants.includes(char)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

const inputString = "Road";
const result = count(inputString);
console.log("Vowels:", result.vowels);
console.log("Consonants:", result.consonants);
