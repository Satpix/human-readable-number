module.exports = function toReadable (number) {
  
}

function toReadable(number) {
        let str = "";
        let num1 = 2;
        if (number == 1000) {
            str += 'one thousandth';
        }
        if ((number >= 100) && (number < 1000)) {
            if (number.length == 4) {
                num1 = number.toString()[1];
            } else {
                num1 = number.toString()[0];
            }

            switch (num1) {
                case 1:
                    str += 'one hundredth';
                    break;
                case 2:
                    str += 'two hundredth';
                    break;
                case 3:
                    str += 'three hundredth';
                    break;
                case 4:
                    str += 'four hundredth';
                    break;
                case 5:
                    str += 'five hundredth';
                    break;
                case 6:
                    str += 'six hundredth';
                    break;
                case 7:
                    str += 'seven hundredth';
                    break;
                case 8:
                    str += 'eight thundredth';
                    break;
                case 9:
                    str += 'nine hundredth';
                    break;
                default:
                    str = str;
            }
        }
        return str;
    }
        