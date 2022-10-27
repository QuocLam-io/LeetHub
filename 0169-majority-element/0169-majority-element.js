/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let currNum = nums[0], count = 0;
    
    for(let x of nums) {
        if(currNum == x) count++;
        else {
            count--;
            if(!count) {
                currNum = x;
                count = 1;
            }
        }
    }
    return currNum;
};