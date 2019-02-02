function fizzbuzz(num) {
    var result = "";
    if (num % 3 === 0 && num % 5 === 0) {
        result = "FizzBuzz";
    } else {
        if (num % 3 === 0) {
            result = "Fizz"
        }
        if (num % 5 === 0) {
            result = "Buzz";
        }
    }
    if (num % 3 !== 0 && num % 5 !== 0) {
        if (num % 10 === 3 || Math.floor(num / 10) === 3) {
            result = "Fizz"
        } else if (Math.floor(num / 10) === 5) {
            result = "Buzz";
        } else {
            result = num.toString();
        }
    }
    return result;
}

module.exports = fizzbuzz;