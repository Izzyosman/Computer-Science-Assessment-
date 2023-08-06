1) Sum Zero
Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True



function addToZero(arr) {
  
    for (let i = 0; i < arr.length; i++) {
     
      for (let j = 0; j < arr.length; j++) {
       
        if (i !== j) {
        
          if (arr[i] + arr[j] === 0) {
            return true; 
          }
        }
      }
    }
    

    return false; 
  }

  Runtime: O(n)
  Space complexity: O(n) 
  
  



2) Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False


function hasUniqueChars(word) {
    const charMap = {};
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
  
      if (charMap[char]) {
        return false;
      }
  
      charMap[char] = true;
    }
  
    return true;
  }
  
Run Time: O(n)
Space Complexity: O(n)





3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

function isPangram(sentence) {

    const lowercaseSentence = sentence.toLowerCase();
  
    for (let charCode = 97; charCode <= 122; charCode++) {
      const letter = String.fromCharCode(charCode);
   
      if (!lowercaseSentence.includes(letter)) {
        return false; 
      }
    }
 
    return true; 
  }


  Run Time: O(n)
Space Complexity: O(1)



4) Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5

function findLongestWord(words) {
    let longestLength = 0;
  
    for (let word of words) {
    
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }
  
    return longestLength;
  }


  
  Run Time: O(n)
  Space Complexity: O(n)

Extra Credit
List out the space complexity of each solution in Step 2.