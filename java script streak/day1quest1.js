/*Q1: String Manipulation - Remove Vowels
➡ Problem: Tumhe ek string di jayegi. Tumhe us string se vowels (a, e, i, o, u) remove kar ke ek new string return karna hai.
➡ Explanation: Agar input "javascript" hai, to output "jvscrpt" hona chahiye.
➡ Hint: Tumne string methods (replace, indexOf) padhe hain, inhe use kar sakte ho. 

notes dekh lena ek notes jo bnaya hai to slve questions ka usme hai ache se explanation*/
function removeVowel(str){
    return str.split("")// string ko array me conver kar dega\
              .filter(char => ! "aeiou".includes(char.toLowerCase()))
              .join("");
}
console.log(removeVowel("javascript"));
