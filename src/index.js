module.exports = function toReadable (number) {
    let arrDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arrCountTillTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arrTens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    if (number.toString().length === 3) {
        let hundreds = number.toString()[0]
        let decimals = number.toString()[1]
        let numeral = number.toString()[2]

        if (decimals == 0 && numeral == 0) {  //100
            console.log(`${arrDigits[+hundreds]} hundred`)
            return `${arrDigits[+hundreds]} hundred`
        } else if (decimals == 0) {    //105
            return `${arrDigits[+hundreds]} hundred ${arrDigits[+numeral]}`
        } else if (numeral == 0) {     //140
            return `${arrDigits[+hundreds]} hundred ${arrTens[decimals - 1]}`
        } else if (decimals == 1 && numeral != 0) {    //119
            return `${arrDigits[+hundreds]} hundred ${arrCountTillTwenty[numeral-1]}`
        } else {
            return `${arrDigits[+hundreds]} hundred ${arrTens[decimals - 1]} ${arrDigits[+numeral]}`
        }
    } else if (number.toString().length === 2) {
        let decimals = number.toString()[0]
        let numeral = number.toString()[1]

        if (decimals == 1 && numeral != 0) {
            return arrCountTillTwenty[numeral-1]
        } else if (numeral == 0) {
            return arrTens[decimals-1]
        } else {
            return arrTens[decimals-1] + ' ' + arrDigits[numeral] 
        }
    } else {
        return arrDigits[number]
    }
}
