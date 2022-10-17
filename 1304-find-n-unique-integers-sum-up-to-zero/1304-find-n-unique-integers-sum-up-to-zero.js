/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let answer = []
    let m = n
    
    if(n===1){
        return ["0"]
    } 
    else if( (n % 2) === 0){
        
        while (answer.length < m){
            answer.push(-n);
            answer.push(n)
            n--
        }
    } else {
        
        while (answer.length < m-1){
            
            answer.push(-n);
            answer.push(n)
            n--
            
        }
        
    }
    
    if( (m % 2) !== 0){
        answer.push(0)
    }
    console.log(answer)
            
    return answer
    
};