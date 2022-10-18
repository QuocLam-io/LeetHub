/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    while (num.toString().length >1){
        
        let numbr = num.toString();
        let newNum = 0;
        for (let i=0; i<numbr.length;i++){
            
            newNum += parseInt(numbr[i])
            console.log(newNum)
            
        }
        num = newNum
        
    }
    return num
};