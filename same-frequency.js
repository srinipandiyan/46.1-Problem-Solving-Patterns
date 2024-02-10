// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const num1Freq = {};
    const num2Freq = {};
    
    for (let digit of num1.toString()) {
        num1Freq[digit] = ++num1Freq[digit] || 1;
    }

    for (let digit of num2.toString()) {
        num2Freq[digit] = ++num2Freq[digit] || 1;
    }

    for (let digit in num1Freq){
        if(!num2Freq[digit]) return false;
        if(num1Freq[digit] !== num2Freq[digit]) return false;
    }
    return true;
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false