function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

// add a zero in front of numbers greater than 10
   /* document.getElementById('timeInWords').innerHTML = "The time is " + convertHourToName(h) + " o'clock and " + convertNumberToName(m) + " past and " + convertNumberToName(s) + " seconds"; */

// Modified Photo
    document.getElementById('timeInWords').innerHTML = "<h2>The time is : " +
        convertHourToName(h) + " " + convertNumberToName(m) + "</h2>";

    setTimeout(startTime,300);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function convertHourToName(num) {
    if (num > 12) {
        num -= 12;
    }
    return convertNumberToName(num);
}

function convertNumberToName(num) {
    var lowNames = ["zero", "one", "two", "three",
                  "four", "five", "six", "seven", "eight", "nine",
                 "ten", "eleven", "twelve", "thirteen", "fourteen",
                  "fifteen", "sixteen", "seventeen",
                  "eighteen", "nineteen"];
    var tensNames = ["twenty", "thirty", "forty", "fifty",
                "sixty", "seventy", "eighty", "ninety"];
    var tens, ones, result;
    if (num < lowNames.length) {
        result = lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "unknown"
        }
    }
    return result;
}

startTime();
