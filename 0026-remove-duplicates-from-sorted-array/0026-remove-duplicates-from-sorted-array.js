/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1
    
    for(let i = nums.length-1; i>0; i--){
        let j = i - 1
        if (nums[i] === nums[j]){
            nums.splice(i,1)
        }
        else {
            k ++
        }
    }

};