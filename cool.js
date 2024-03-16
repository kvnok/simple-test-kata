function solve(str) {
	console.log(str);
    let result = '';
    let signStack = [];
    let currentSign = 1;

    const operations = {
        '+': () => { currentSign = 1; },
        '-': () => { currentSign = -1; },
        '(': () => { signStack.push(currentSign); },
        ')': () => { signStack.pop(); },
        default: (char) => {
            if (signStack.length > 0) {
                result += (currentSign * signStack[signStack.length - 1] === -1) ? '-' : '+';
            } else {
                result += (currentSign === -1) ? '-' : '+';
            }
            result += char;
        }
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const operation = operations[char] || operations.default;
        operation(char);
    }
	if (result[0] === '+') {
		result = result.slice(1);
	}
	console.log(result);
    return result;
}

module.exports = solve;

//https://www.codewars.com/kata/5a3bedd38f27f246c200005f/train/javascript
// In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:

// solve("x-(y+z)") = "x-y-z"
// solve("x-(y-z)") = "x-y+z"
// solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
// solve("x-(-y-z)") = "x+y+z"
// There are no spaces in the expression. Only two operators are given: "+" or "-".

// More examples in test cases.

// Good luck!
