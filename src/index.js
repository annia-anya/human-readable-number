module.exports = function toReadable (n) {
    const simpleMapping = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    const simpleKeys = Object.keys(simpleMapping).reverse();
    if (n === 0) {
        return simpleMapping[0];
    }
    const getTextNumber = (number) => {
        if (number < 100) {
            if (number === 0) {
                return '';
            } else {
                let currentIndex = 0;
                while (Math.floor(number / simpleKeys[currentIndex]) !== 1) {
                    currentIndex++;
                }
                const num = simpleKeys[currentIndex]; 
                const mod = number % num;
                return `${simpleMapping[num]} ` + getTextNumber(mod); 
            }
        } else {
            const hundreds = Math.floor(number / 100);
            const mod = number % 100;
            return `${simpleMapping[hundreds]} hundred ` + getTextNumber(mod);
        }
    }

    const result = getTextNumber(n);
    return result.trim();
};
