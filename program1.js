function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap[char] !== undefined) {

            start = Math.max(start, charIndexMap[char] + 1);
        }
       
        charIndexMap[char] = end;
       
        const currentLength = end - start + 1;

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

module.exports = { longestSubstring };


