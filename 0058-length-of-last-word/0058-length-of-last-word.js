/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let ss = s.split(" ")
    console.log(ss)
    
    for (let i = ss.length-1; i>=0; i--){
    
        if (ss[i] !== ""){
            console.log(i)
            console.log(ss[i], "space")
            return ss[i].length
        }
    }
};