/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
//Bucket Sort Method
    let hMap = {}

//creates frequency
    for( let i = 0; i < nums.length; i++){
        if(hMap[nums[i]]) hMap[nums[i]] += 1;
        else hMap[nums[i]] = 1;
    }
    // console.log(hMap)
    //makes an array of arrays from the key-pair values
    let result = Object.keys(hMap).map((key) => [Number(key), hMap[key]]);
    console.log(result)

    //This is telling sort() to compare the second index of each array
    let sortedResult = result.sort((a,b) => {
        console.log(b, a)
        return b[1]-a[1]
    })
    console.log(sortedResult)


    let answer = []
    //Pushes the most frequent into a new array
    for ( let i = 0; i < k; i++){
        answer.push(sortedResult[i][0])
    }
    return answer;
};