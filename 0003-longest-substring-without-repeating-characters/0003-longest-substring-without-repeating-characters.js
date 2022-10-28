/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {

let max = 0;
    let windowStart = 0;
    const soFar = {};
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
        let rightChar = str[windowEnd];
        soFar[rightChar] = soFar[rightChar] + 1 || 1;
        
        while (soFar[rightChar]>1){
            let leftChar = str[windowStart];
            
            if(soFar[leftChar]>1){
                soFar[leftChar]--;
            } else {
                delete soFar[leftChar];
            }
            windowStart++
        }
        max = Math.max(max, (windowEnd - windowStart)+1)
    }
    return max
};