// add whatever parameters you deem necessary

function constructNote(message, letters) {
    const messageFreq = {};
    const lettersFreq = {};
    
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    for (let char in messageFreq){
        if(!lettersFreq[char]) return false;
        if(messageFreq[char] > lettersFreq[char]) return false;
    }
    return true;
}

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true