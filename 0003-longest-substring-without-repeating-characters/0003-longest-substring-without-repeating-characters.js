/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {

//     let maxLen = 0,
//     maxStr = '',
//     tmpStr,
//     posIndex,
//     i;

//   for( i = 0 ; i < s.length; i++ ){

//     tmpStr = s[i];
//     posIndex = maxStr.indexOf(tmpStr);

//     if(posIndex > -1){
//       maxStr = maxStr.substring(posIndex + 1);
//     }

//     maxStr += tmpStr;
//     maxLen = Math.max(maxLen, maxStr.length);
//   }

//   return maxLen;
      let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};