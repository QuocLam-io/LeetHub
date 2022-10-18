/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let hMap = {};
    let answer = 0
    
    for(let i=0; i<nums.length; i++){
  
        if (hMap[nums[i]]){
            // console.log(answer, "answer")
            answer -= nums[i]
            // console.log(answer, "answer")
            // console.log("it exists")
        } else {
            hMap[nums[i]] = "whatever"
            console.log(answer, "ans")
            console.log(nums[i])
            answer += nums[i]
            console.log(answer, "ansr")
            
        }
    }
    
    return answer
    
};