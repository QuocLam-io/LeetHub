/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
//     let ss = s.split(" ")
//     console.log(ss)
    
//     for (let i = ss.length-1; i>=0; i--){
    
//         if (ss[i] !== ""){
//             return ss[i].length
//         }
//     }
    
        return s.trim().split(" ").pop().length;
};