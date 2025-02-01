/*Q3: Palindrome Check
➡ Problem: Tumhe ek string di jayegi. Tumhe check karna hai ki wo palindrome hai ya nahi (same forward and backward).
➡ Explanation: Agar input "madam" hai to output true hona chahiye. Agar "hello" hai to output false.
➡ Hint: Tumne string methods like split(), reverse(), aur join() padhe hain.

js
Copy
function isPalindrome(str) {
    // yaha logic likho
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false */

function isPalindrome(str){
         str.split("")
            .includes("Madam");
}
console.log(isPalindrome("Madam"));